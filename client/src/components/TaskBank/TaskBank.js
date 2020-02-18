// import React from 'react'
// // import axios from 'axios'
// import TaskList from '../TaskList/TaskList'

// class TaskBank extends React.Component {
//   render () {
//     const { task } = this.props;  
//     return <TaskList task={task}/>     
// }};

// export default TaskBank;
//////////Take out code above upon completion/////////////////


import React, {useState} from 'react'
import TaskList from '../TaskList/TaskList'

const TaskBank = () => {

  const [taskObject, setTaskObject] = useState({});
  return (
    <div>
    <TaskList taskObject={taskObject} setTaskObject={setTaskObject}/></div> 
  )
};




export default TaskBank;

