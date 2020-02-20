import React from "react";

const Header = () => <h1>Pomodoro Clock</h1>

const SetTimer = ({ type, value }) => (
  <div class='SetTimer'>
    <div id={`${type}-label`}>{`${type} Length`}</div>
    <div class="SetTimer-controls">
      <button id={`${type}-decrement`}>&darr;</button>
      <div id={`${type}-length`}>{value}</div>
      <button id={`${type}-increment`}>&uarr;</button>
    </div>
  </div>
)


class PomodoroTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakValue: 5,
      sessionValue: 25
    }
  }
   render() {
     return(
       <div>
         <Header/>
         <div class="settings">
           <SetTimer type='Break' value={this.state.breakValue}/>
           <SetTimer type='Session' value={this.state.sessionValue}/>
         </div>
       </div>
     )
   } 
}

export default  PomodoroTimer;