import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from 'axios';
import ErrorNotice from "../misc/ErrorNotice";

import server from '../constants.js';

const SERVER_USERS_LOGIN = server('users/login');

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(SERVER_USERS_LOGIN, loginUser)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
      })
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  }

  return (
    <div className="page">
      <h2>Log in</h2>
      { error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      ) }
      <form className="form" onSubmit={ submit }>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          class="form-control"
          placeholder="test@ga.co"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          class="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Log in" className="btn btn-info" />
      </form>
    </div>
  )
}
