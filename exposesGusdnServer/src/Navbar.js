import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";
import Logo from "./assets/smartcitylogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} />
      <Link to="/Home">Home</Link>
      <Link to="/Timer">Timer</Link>
      <Link to="/Counter">Counter</Link>
    </div>
  );
};

export default Navbar;
