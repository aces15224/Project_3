
import React, { Component } from 'react';

import TaskBank from "../components/TaskBank/TaskBank";
import Form from "../components/Form/Form";



class taskBank extends Component {
  state={
    taskGroup:[]
  }



render () {
 return (
      <div>
        <h1>Task Bank</h1>
        <Form/>
        <TaskBank/>
        
      </div>
    ); 
}
}
  export default taskBank;



