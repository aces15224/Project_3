import React from "react";
import { Link } from "react-router-dom";
// import logo from "./checkMark.jpg"

function Navbar(props) {
  return (
    
    <ul className="nav flex-column nav nav-tabs">
      <li><img id="logo" alt="logo" src={props.image}/></li>
      <li className="nav-item">
        <Link
          to="/"
          className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Login Page
        </Link>
      </li>
      <li className="nav-item">
          <Link
            to="/register"
            className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
          >
            Register
          </Link>
        </li>
      <li className="nav-item">
        <Link to="/home" className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/tasks"
          className={window.location.pathname === "/tasks" ? "nav-link active" : "nav-link"}
        >
          Task Bank
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/timer"
          className={window.location.pathname === "/timer" ? "nav-link active" : "nav-link"}
        >
          Pomodoro Timer
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/stats"
          className={window.location.pathname === "/stats" ? "nav-link active" : "nav-link"}
        >
          User Stats
        </Link>
      </li>
        <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About Us
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
