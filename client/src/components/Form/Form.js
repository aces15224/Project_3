import React from "react";
import "./style.css";

const Form = props => {
    return (
        <form>
            <div className="form-group">
                <label className="taskAdd"><h3>Input Task</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="taskForm"
                    placeholder="Add a task"
                    onChange={props.handleInputChange}
                />
            </div>
            <select className="custom-select" id="priorityDropDown">
                <option selected>Priority Alerts</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default Form