import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    })
    localStorage.setItem("auth-token", "");
  }

  return (
    <nav className="auth-options">
      {userData.user ? (
        <>
        {console.log(userData.user)}
        <button
          onClick={ logout }
          type="button"
          class="btn btn-info btn-lg">Log out</button>
        </>
      ) : (
        <>
          <button
            onClick={ register }
            type="button"
            class="btn btn-info btn-lg">Register</button>
          <button
            onClick={ login }
            type="button"
            class="btn btn-info btn-lg">Log in</button>
        </>
      )}

    </nav>
  );
}
