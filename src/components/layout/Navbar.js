import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav nav-pills" id="main-nav">
      <Link to="/" className="nav-item"><h5 className="navbar-tab nav-link">Home</h5></Link>
      <Link to="/products" className="nav-item"><h5 className="navbar-tab nav-link">Booking</h5></Link>
      <Link to="/mycart" className="nav-item"><h5 className="navbar-tab nav-link">My Cart</h5></Link>
    </nav>
  )
}
