import React, {useRef, useState, useEffect } from 'react';
import DropDownDate from "../DropdownDate/DropDownDate"
import API from "../../utils/API";

const Form = (props) => {
    const [taskForm, setTaskForm] = useState({
       taskItem: "",
        createdOn:"",
        priority:"",
        dueDate:"",
        category: ""
    });

    const taskRef = useRef();
    const newDate = useRef(); 
    const priorityRef = useRef();
    const categoryRef = useRef();

    useEffect(() => {
        console.log(taskForm);
        
    }, [taskForm]);

//Form Submit Function

    const handleFormSubmit = e => {
        e.preventDefault();

        //format date from DropDown Selector//

        var d = new Date(newDate.current),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        let date1=[year, month, day].join('-');

        // format current date//
        var currentDate = new Date (Date.now()),
        currentMonth = '' + (currentDate.getMonth() + 1),
        currentDay = '' + currentDate.getDate(),
        currentYear = currentDate.getFullYear();
        if (currentMonth.length < 2) currentMonth = '0' + currentMonth;
        if (currentDay.length < 2) currentDay = '0' + currentDay;
        let date2=[currentYear, currentMonth, currentDay].join('-');

        // creFormusing form data & dropdown
        var taskData = {
            taskItem: taskRef.current.value,
            completed:false,
            saved: false,
            createdOn: date2,
            priority: priorityRef.current.value,
            dueDate: date1,
            category: categoryRef.current.value            
        }
        
        setTaskForm(taskData)     
        
        API.postTask(taskData)
        .then(console.log(taskData))
            taskRef.current.value = "";
            priorityRef.current.value = "";
            categoryRef.current.value = "";
        
        //repeat get call and reload to display//

        API.getTasks()
        window.location.reload()
        };  

    return(         
        <form className="form-group" onSubmit={handleFormSubmit} >
            <div className="form-group">
                <label className="taskAdd"><h3>Input Task</h3></label>
                <br></br>
                <input className="col-12 form-control" ref={taskRef} type="text"
                    name="taskForm"
                    placeholder="Add a task"
                />
                <select className="custom-select" id="priorityDropDown"ref={priorityRef}  >
                    <option defaultValue>Add a Priority Alert</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
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
            <button type="submit" className="submitBtn btn btn-primary"> 
                Submit
            </button>
        </form>
    )      
}

export default Form