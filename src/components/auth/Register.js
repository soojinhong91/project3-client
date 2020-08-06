import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

import server from '../constants.js';

const SERVER_USERS_LOGIN = server('users/login');
const SERVER_USERS_REGISTER = server('users/register');

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [nickname, setNickname] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, nickname };
      await Axios.post(SERVER_USERS_REGISTER, newUser)
      const loginRes = await Axios.post(SERVER_USERS_LOGIN, {
        email,
        password,
      })
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      })
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  }

  return (
    <div className="page">
      <h2>Register</h2>
      { error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      ) }
      <form className="form" onSubmit={ submit }>
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          class="form-control"
          placeholder="test@ga.co"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          class="form-control"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          class="form-control"
          placeholder="Password Confirmation"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <label htmlFor="register-nickname">Nickname</label>
        <input
          id="register-nickname"
          type="text"
          class="form-control"
          onChange={(e) => setNickname(e.target.value)}
        />

        <input type="submit" value="Register" className="btn btn-info" />
      </form>
    </div>
  )
}
