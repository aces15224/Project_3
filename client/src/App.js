import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
// import Wrapper from "./components/Wrapper";
// import TaskBank from "./components/TaskBank";
// import TaskList from "./components/TaskList";
import CalendarPage from "./pages/calendar";
// import Dashboard from "./pages/dashboard";
import taskBank from "./pages/TaskBankHome";
import PomodoroTimer from "./pages/pomodoroTimer";
import UserStats from "./pages/userStats";
import './App.css';
import Header from "./components/Header";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div class= "container">
          <Header />
            <NavBar />
            
            <Route exact path="/" component={CalendarPage} />
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