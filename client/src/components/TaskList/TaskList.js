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

    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" onClick={taskPopulate}>
              {task.Category}
            </button>
          </h5>
        </div>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion" >
          <div className="card-body">
            <ul>
              {taskObject.taskItem}
             {/* {task.Tasks.map((value, index) => {
               return <li key={index}>{value}</li>
             })} */}
           </ul>
          </div>
        </div>
      </div>
    </div> 
     
      )
  
}


export default TaskList;

////////////Take out code below upon completion/////////////////


{/* // <td><button className="btn btn-danger btn-xs" onClick={() => {inProgress(taskId)}} >In Progress</button></td> */}
        // {/* <td><button className="btn btn-danger btn-xs" onClick={() => add} >x</button></td>
        // <td><button className="btn btn-danger btn-xs" onClick={() => add} >x</button></td> */}

