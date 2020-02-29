import React, { Component } from "react";
// import paxton from "../../src/paxton.PNG";
// import robbie from "../../src/robbie.JPG";
// import harris from "../../src/harris.png";
// import anthony from "../../src/anthony.png";

import "./about.css";

 
class About extends Component {
    render () {
       return (
            <div class="card">
                <h5 id="aboutHeader" class="card-header">About Page</h5>
                    <div class="card-body">
                        <p className="about">
                            <b>Motivate Me</b> is Time Management App that was designed to list and schedule tasks,
                            and help the user manage their time and efforts more efficiently. In order to do this, 
                            the user has access to four key features: a task list, a calendar, an overview of user stats, and
                            a pomorodor timer.
                        </p>
                        <p className="about">
                            The <b>Task List</b> stores each task and lets the user organize them in to 1-6 categories
                            (Personal, Career, Health, Fitness, Chores, and Education). In addition, the user can specify each task's 
                            level of importance and schedule a due date.
                        </p>
                        <p className="about">
                            The <b>Calendar</b> provided is automatically updated with the user's task information whenever a new task is submitted.
                            The calendar shows when a task was created, when it is due to be competed, and helps the user keep track of their 
                            schedule.
                        </p>
                        <p className="about">
                            The <b>Pomodoro Clock</b> is a method of time management. It uses a timer to break work into intervals, each
                            ending with a short break. It is completely customizable to meet your productivity goals. Start by deciding
                            on a task you'd like to complete, set session and break times, then work until you are are notified to stop.
                            After a short break, get back to work!.
                        </p >
                        <p className="about">
                            Motivate Me gives its users access to individual stats. The <b>User Stats</b> page will bring you to a graph that will illustrate 
                            just how much time you've spent on each category of a task. See how many tasks have been completed, or not, and get a sense of where 
                            you focus your efforts.
                        </p>
                    </div>
            </div>




        // <div className="container">
        //     <div className="row">
        //         <div className="col-12">
        //             <p> Motivate Me is a task based management application
        //                 used to keep track of tasks currently being worked 
        //                 on and also keep track of completed or uncompleted
        //                 tasks. 
        //             </p>
        //             <p>The pomodoro timer helps users accomplish 
        //                 tasks in a timly manner while providing a break 
        //                 at the end of each task.
        //             </p>
        //             <p>
        //                 User stats dynamically updates tasks completed vs
        //                 uncompleted tasks.
        //             </p>
        //             <p> Tasks are created and dynamically stored in the 
        //                 calender, tasks are sorted by category into sorted
        //                 collapsable menus.</p>
        //         </div>
        //         <div className="row">
        //             <img src={paxton} id="paxton" />
                    
        //             <img src={robbie} id="robbie" />

        //             <img src={harris} id="harris" />

        //             <img src={anthony} id="anthony" />
        //         </div>
        //     </div>
        // </div>
       )
     }
   
   }
export default About;