import React from 'react'
// import axios from 'axios'
// import API from "../../../public/routes/api/taskRoutes";

import TaskList from '../TaskList/TaskList'

class TaskBank extends React.Component {
//   state = {
//     taskGroup: []
// }

// componentDidMount() {
//     API.getTasks()
//         .then(savedBooks => this.setState({ savedBooks: savedBooks }))
//         .catch(err => console.error(err));
// }

// const TaskBank = React.createClass({
  render () {
    const { task } = this.props;
    

    return <TaskList task={task}/>
      
}};




export default TaskBank;

// return (
//   <table className="table table-xs">
//     <thead className="thead-default">
//     <tr>
//       <th>To-do</th>
//       <th>Delete</th>
//     </tr>
//     </thead>
//     <tbody>
//     {todos
//         .filter((todo)=> {
//           return `${todo.task}`.indexOf(searchTerm) > -1;
//         })
//         .map((todo) => {
//           return (
//               <TodoList key={todo._id} todo={todo.task} todoId={todo._id} remove={remove}/>
//           )
//         })}
//     </tbody>
//   </table>
// )



{/* <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div> */}






// const TaskBank = React.createClass({
//   render () {
//     // const { tasks, remove } = this.props;
    

//     return (
//         <table className="table table-xs">
//           <thead className="thead-default">
//           <tr>
//             <th>Place Holder (add table headers)</th>
//           </tr>
//           </thead>
//           <tbody>
//           {tasks.map((task) => {
//                 return (
//                     <TaskList key={task._id} task={task.taskTitle} taskId={task._id} remove={remove}/>
//                 )
//               })}
//           </tbody>
//         </table>
//     )
//   }
// });




// export default TaskBank;