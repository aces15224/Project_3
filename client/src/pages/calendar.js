import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
var myEventsList = [];

//Function takes in GET Response
const resObject = (res) => {
  //loops through response & creates object
    res.forEach((obj, index) => {
      const eventObj={
          allDay: true,
          end: obj.dueDate,
          start: obj.createdOn,
          title: obj.taskItem,
        }
      //pushes results object into event array   
          myEventsList.push(eventObj);
    })

      console.log(myEventsList)        
};

//GET call that pulls from database
const getTasks = () => {
  axios.get("/api/tasks")
  .then(function (response) {
    var res=response.data;
    resObject(res)
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });

};
 
const CalendarPage = () => {
// class CalendarPage extends Component{
  
useEffect(() => {
    getTasks();
    
  }, []);
  
    return(
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    ) 
};
export default CalendarPage