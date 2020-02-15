import React, {useRef } from 'react';
import {DropDownDate} from "../DropdownDate/DropDownDate"
// import API from "../../utils/API";
import axios from "axios";


function Form () {

const taskRef = useRef();
const priorityRef = useRef();
const categoryRef = useRef();
    const handleFormSubmit = e => {
        e.preventDefault();
        // const object={
        //     taskItem: taskRef.current.value,
        //     priority:priorityRef.current.value,
        //     category: categoryRef.current.value}
        //     addTask(object)
        axios.post('/api/tasks/', 
            {   taskItem: taskRef.current.value,
                priority:priorityRef.current.value,
                category: categoryRef.current.value,
            }).then((res) => {
                console.log(res.config.data)
                }).catch(err => console.log(err));

                taskRef.current.value = "";
                priorityRef.current.value = "";
                categoryRef.current.value = "";
    };   
        return(
            <form className="form-group mt-5 mb-5" onSubmit={handleFormSubmit} >
            <div className="form-group">
                <label className="taskAdd"><h3>Input Task</h3></label>
                <br></br>
                <input className="col-12 form-control" ref={taskRef} type="text"
                // value="J"
                    name="taskForm"
                    placeholder="Add a task"
                    // onChange={handleInputChange}
                />
                <select className="custom-select" id="priorityDropDown"ref={priorityRef}  >
                    <option defaultValue>Add a Priority Alert</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="custom-select" id="categoryDropDown"ref={categoryRef} >
                    <option defaultValue>Select a Category</option>
                    <option value="Career">Career</option>
                    <option value="Education">Education</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Personal">Personal</option>
                    <option value="Health">Health</option>
                    <option value="Chores">Chores</option>
                </select>
                <DropDownDate/>
             </div>
            {/* new Date("<YYYY-mm-dd>") */}
            
            <button type="submit" className="submitBtn btn btn-primary"> 
                Submit
            </button>
        </form>
        )      
}

export default Form