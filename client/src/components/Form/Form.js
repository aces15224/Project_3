import React, { Component, useRef } from 'react';
import DropDownDate from "../DropdownDate/DropDownDate"


function Form () {
    

    
    // constructor(props) {
    //     super(props);
    //     this.state = { date: null, selectedDate: Date()};
    // }
const titleRef = useRef();
const handleFormSubmit = e => {
    e.preventDefault();
//    console.log(this.state.selectedDate)
const object={title: titleRef.current.value}
console.log(object)
};   
    
    

        return(
            // onSubmit={handleFormSubmit}
            <form className="form-group mt-5 mb-5" onSubmit={handleFormSubmit} >
            <div className="form-group">
                <label className="taskAdd"><h3>Input Task</h3></label>
                <br></br>
                <input className="col-12 form-control" ref={titleRef} type="text"
                // value="J"
                    name="taskForm"
                    placeholder="Add a task"
                    // onChange={handleInputChange}
                />
                <select className="custom-select" id="priorityDropDown">
                    <option defaultValue>Add a Priority Alert</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="custom-select" id="categoryDropDown">
                    <option defaultValue>Select a Category</option>
                    <option value="Career">Career</option>
                    <option value="Education">Education</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Personal">Personal</option>
                    <option value="Health">Health</option>
                    <option value="Chores">Chores</option>
                </select>
                <DropDownDate/>
                {/* <DropdownDate 
                    selectedDate={this.state.selectedDate}
                    order={['year', 'month', 'day']}
                    onMonthChange={(month) => {console.log(month);}}
                    onDayChange={(day) => {console.log(day);}}             
                    onYearChange={(year) => {console.log(year);}}  
                    onDateChange={(date) => {console.log(date); this.setState({ date: date, selectedDate: formatDate(date)});
                    }} />                  */}
            </div>
            {/* new Date("<YYYY-mm-dd>") */}
            
            <button type="submit" className="submitBtn btn btn-primary"> 
                Submit
            </button>
        </form>
        )
    // }       
}

export default Form

