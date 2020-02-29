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