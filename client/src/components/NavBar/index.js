import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav flex-column nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/dashboard"
          className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
        >
          Dashboard
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
    </ul>
  );
}

export default Navbar;
