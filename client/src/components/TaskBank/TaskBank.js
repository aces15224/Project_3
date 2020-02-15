import React from 'react'
// import axios from 'axios'
// import API from "../../../public/routes/api/taskRoutes";

import TaskList from '../TaskList/TaskList'

class TaskBank extends React.Component {

  render () {
    const { task } = this.props;
    

    return <TaskList task={task}/>
      
}};




export default TaskBank;

