import React, {useRef } from 'react';
import DropDownDate from "../DropdownDate/DropDownDate"
import API from "../../utils/API";
// import axios from "axios";

const Form = ({setTaskObject, taskObject}) => {
const taskRef = useRef();
const newDate = useRef(); 
const priorityRef = useRef();
const categoryRef = useRef();



    const handleFormSubmit = e => {
        e.preventDefault();

        //format date from DropDown Selector//

        var d = new Date(newDate.current),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        const date1=[year, month, day].join('-');
   
// create object using form data & dropdown
var taskData = {
    taskItem: taskRef.current.value,
    priority:priorityRef.current.value,
    category: categoryRef.current.value,
    dueDate:date1 
}
console.log(taskData)

setTaskObject({
    taskItem: taskRef.current.value,
    priority:priorityRef.current.value,
    category: categoryRef.current.value,
    dueDate:date1 
})
               
//post Info to API
API.postTask(taskData)
.then(console.log(taskData))
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
                    <option value='Career'>Career</option>
                    <option value='Education'>Education</option>
                    <option value='Fitness'>Fitness</option>
                    <option value='Personal'>Personal</option>
                    <option value='Health'>Health</option>
                    <option value='Chores'>Chores</option>
                </select>
                <DropDownDate newDate={newDate} />

             </div>
            {/* new Date("<YYYY-mm-dd>") */}
            
            <button type="submit" className="submitBtn btn btn-primary"> 
                Submit
            </button>
        </form>
        )      
}

export default Form