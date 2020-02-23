import React from 'react';
import TaskBank from "../components/TaskBank/TaskBank";
import Form from "../components/Form/Form";

const TaskBankHome = () => { 

  return (
    <div className="card" id="taskCard">
      <div className="card-header">
        <h1>Task Bank</h1>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <div id="taskBank">
              <TaskBank/>  
            </div>
          </div>
          <div className="col-4">
            <Form /> 
          </div>
        </div>       
      </div>
    </div>  
  ); 
}

  export default TaskBankHome;



