import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
// import Wrapper from "./components/Wrapper";
// import TaskBank from "./components/TaskBank";
// import TaskList from "./components/TaskList";
import Calendar from "./pages/calendar";
// import Dashboard from "./pages/dashboard";
import taskBank from "./pages/taskBank";
import PomodoroTimer from "./pages/pomodoroTimer";
import UserStats from "./pages/userStats";
import './App.css';

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <NavBar />
            
            <Route exact path="/" component={Calendar} />
            {/* <Route exact path="/dashboard" component={Dashboard} /> */}
            <Route exact path="/tasks" component={taskBank} />
            <Route exact path="/timer" component={PomodoroTimer} />
            <Route exact path="/stats" component={UserStats} />

          
        </div>
      </Router>
    )
  };
};

export default App;