import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    allDay: false,
    end: new Date('February 18, 2020 11:13:00'),
    start: new Date('February 17, 2020 11:13:00'),
    title: 'hi',
  },
  {
    allDay: true,
    end: new Date('December 09, 2017 11:13:00'),
    start: new Date('December 09, 2017 11:13:00'),
    title: 'All Day Event',
  },
 ]
  //empty object for now
class CalendarPage extends Component{
  // constructor(){
  //  //We will populate this function later
  // }
  // componentDidMount(){
  //  //We will populate this function later
  // }
  render(){
    return(
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    )
  }
}
export default CalendarPage