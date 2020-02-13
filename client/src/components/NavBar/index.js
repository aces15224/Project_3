import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav nav-tabs">
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
      <li className="nav-item">
        <form>
          <div className="form-group">
              <label className="taskAdd"><h3>Input Task</h3></label>
              <br></br>
              <input className="col-12 form-control"
                  // value={props.search}
                  type="text"
                  name="taskForm"
                  placeholder="Add a task"
                  // onChange={props.handleInputChange}
              />
          </div>
          <select className="custom-select" id="priorityDropDown">
              <option selected>Priority Alerts</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
          </select>
          <button type="submit" className="submitBtn btn btn-primary">
              Submit
          </button>
          {/* onClick={props.handleFormSubmit} */}
        </form>
      </li>
    </ul>
  );
}

export default Navbar;
