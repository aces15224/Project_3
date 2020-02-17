import React, {useEffect} from 'react'
import API from "../../utils/API";


const TaskList = ({setTaskObject, taskObject}) => {

const taskPopulate = () =>{
  setTaskObject(
    //input results from get call
    [{taskItem: "Do it",
    priority: "1",
    category: "Career",
    dueDate: "2025-02-16"
    },
    {taskItem: "Do that",
    priority: "1",
    category: "Education",
    dueDate: "2025-02-16"
    },
    {taskItem: "Do it too",
    priority: "1",
    category: "Career",
    dueDate: "2025-02-16"}]
)

console.log(taskObject)
};

const complete = () => {
  alert ("done")
}
  const getTasks = () => {
    API.getTasks()
    .then(res => {
      console.log(JSON.stringify(res))
      }).catch(err => console.log(err));
};
  useEffect(() => {
    getTasks();
  }, []);

    
  const task= {Category: "Coding", Tasks :["This", "That"]}


  return (
    <ul className="list-group">
          {taskObject.map(eachTask => (
            <li className="list-group-item">
              
            
    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" 
            aria-controls="collapseOne" onClick={taskPopulate}>
              {task.Category}
            </button>
          </h5>
        </div>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion" >
          <div className="card-body">
            <ul>
              {Object.entries(taskObject).map(([key, value], i) => {
           //////////////////revise conditional statement////////////////////////////////
                if(value.category==="Career")
          //////////////////revise conditional statement////////////////////////////////

                return (
                <div className="card"key={key}> Due: {value.dueDate}  Priority Level: {value.priority}
                    <div className="card-header">
                        Task: {value.taskItem}<button className="btn btn-danger btn-xs" onClick={() => complete()}>Completed</button>
                    </div>
                </div>
                )
              })}
           </ul>
          </div>
        </div>
      </div>
    </div> 
    </li>
          ))}
        </ul>
  )
  
}


export default TaskList;

