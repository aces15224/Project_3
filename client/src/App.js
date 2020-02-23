import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import CalendarPage from "./pages/calendar";
import taskBank from "./pages/TaskBankHome";
import PomodoroTimer from "./pages/pomodoroTimer";
import UserStats from "./pages/userStats";
import './App.css';

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <NavBar />
            <div className="container" id="mainDisplay">
              <Route exact path="/" component={CalendarPage} />
              <Route exact path="/tasks" component={taskBank} />
              <Route exact path="/timer" component={PomodoroTimer} />
              <Route exact path="/stats" component={UserStats} />
            </div>  
        </div>
      </Router>
    )
  };
};

export default App;
