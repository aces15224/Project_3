
import React, { useState } from 'react';
import TaskBank from "../components/TaskBank/TaskBank";
import Form from "../components/Form/Form";



const TaskBankHome = () => {
  // const [taskGroup, setTaskGroup] = useState([]);
  const [taskObject, setTaskObject] = useState({});
  console.log("Main Data:");
   console.log(taskObject)
  
  
 return (
      <div>
        <h1>Task Bank</h1>
        {taskObject.taskItem}
        <Form taskObject={taskObject} setTaskObject={setTaskObject} />
        <TaskBank/>
      </div>
    ); 
}

  export default TaskBankHome;



