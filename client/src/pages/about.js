import React, { Component } from "react";
import paxton from "../../src/paxton.PNG";
import robbie from "../../src/robbie.JPG";
import harris from "../../src/harris.png";
import anthony from "../../src/anthony.png";

import "./about.css";

 
class About extends Component {
    render () {
       return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p> Motivate Me is a task based management application
                        used to keep track of tasks currently being worked 
                        on and also keep track of completed or uncompleted
                        tasks. 
                    </p>
                    <p>The pomodoro timer helps users accomplish 
                        tasks in a timly manner while providing a break 
                        at the end of each task.
                    </p>
                    <p>
                        User stats dynamically updates tasks completed vs
                        uncompleted tasks.
                    </p>
                    <p> Tasks are created and dynamically stored in the 
                        calender, tasks are sorted by category into sorted
                        collapsable menus.</p>
                </div>
                <div className="row">
                    <img src={paxton} id="paxton" />
                    
                    <img src={robbie} id="robbie" />

                    <img src={harris} id="harris" />

                    <img src={anthony} id="anthony" />
                </div>
            </div>
        </div>
       )
     }
   
   }
export default About;