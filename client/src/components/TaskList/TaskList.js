import React from 'react'
class TaskList extends React.Component {

  render () {
    // const { task, remove, taskId } = this.props;
  const task= {Category: "Coding", Tasks :["This", "That"]}
  // const task= [{Category: "Coding", Tasks :["This", "That"]},{Category: "Coding", Tasks :["This", "That"]}]


    return (

    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              {task.Category}
            </button>
          </h5>
        </div>
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            <ul>
             {task.Tasks.map((value, index) => {
               return <li key={index}>{value}</li>
             })}
           </ul>
          </div>
        </div>
      </div>
    </div> 
     
      )
  }}


export default TaskList;

{/* // <td><button className="btn btn-danger btn-xs" onClick={() => {inProgress(taskId)}} >In Progress</button></td> */}
        // {/* <td><button className="btn btn-danger btn-xs" onClick={() => add} >x</button></td>
        // <td><button className="btn btn-danger btn-xs" onClick={() => add} >x</button></td> */}

