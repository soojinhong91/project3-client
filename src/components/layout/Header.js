import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

import wave from  "../../assets/wave.svg";

export default function Header() {
  return (

    <nav class="navbar navbar-dark bg-dark" id="header">
      <div className="container">
        <Link to="/" id="title">
          <img src={ wave } id="logo-image" alt="wave logo"/>
          <h1 id="title-text">New South Waves</h1>
        </Link>
        <AuthOptions />
      </div>
    </nav>

  )
}
