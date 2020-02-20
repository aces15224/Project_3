import React, {useEffect} from 'react'
import axios from "axios";

//Global Array for Unique Categories
const categoryArray = [];

//Tasklist Generates Tasks and corresponding categories//

const TaskList = (props) => {
  const taskObject = props.taskObject;
  const setTaskObject = props.setTaskObject;
 
// const taskPopulate = () =>{
//   setTaskObject(
//     //input results from get call
//     objectArray
// )

// console.log(taskObject)
// };      
  const objectArray = [];
   //arrayFunction sorts out duplicate values (CATEGORIES)//

  const arrayFunction = (preArray)=>{
    var m = {}
    for (var i=0; i<preArray.length; i++) {
      var v = preArray[i];
      if (!m[v]) {
        categoryArray.push({v});
        m[v]=true;
      }
    }
  };

  //Function takes in GET Response
  const resObject = (res) => {
    const preArray = []; 
    //loops through response & creates object
      res.forEach((obj, index) => {
        var eachTaskObj={
        taskItem: obj.taskItem,
        priority: obj.priority,
        category: obj.category,
        dueDate: obj.dueDate
      }
        //pushes results object into array for tasks & task categories    
        objectArray.push(eachTaskObj)
        preArray.push(obj.category)   
        console.log(preArray)
      })
        //pushes results objects into functions
        //one that sets state & and one that sorts out duplicates
        arrayFunction(preArray)
        setTaskObject(objectArray) 
        console.log(objectArray) 
        console.log(categoryArray) 
  };

  //Click handler that removes completed tasks
  const complete = () => {
    alert ("done")
  }
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
    useEffect(() => {
      getTasks();
      
    }, []);

    useEffect(() => {
        console.log(taskObject);
        
    }, [taskObject])
    
    
  return (        
    <div id="accordion">  
      {categoryArray.length && categoryArray.map((obj, i) => {
        console.log(obj)
        return(
          <div className="card" key={i}>
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" 
                aria-controls="collapseOne" >
                {/* onClick={taskPopulate}> */}
                  {obj.v}
                </button>
              </h5>
            </div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion" >
              <div className="card-body">
                <ul>
                  {taskObject.length && taskObject.map((obj, i) => {
                    return (
                      <div className="card" key={i}> Due: {obj.dueDate}  Priority Level: {obj.priority}
                          <div className="card-header">
                              Task: {obj.taskItem}<button className="btn btn-danger btn-xs" onClick={() => complete()}>Completed</button>
                          </div>
                      </div>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </div>        
  )
};

export default TaskList;

