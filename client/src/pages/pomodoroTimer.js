import React from "react";
import moment from "moment";

const Header = () => <h1>Pomodoro Clock</h1>

const SetTimer = ({ type, value, handleClick }) => (
  <div class='SetTimer'>
    <div id={`${type}-label`}>{`${type} Length`}</div>
    <div class='SetTimer-controls'>
      <button id={`${type}-decrement`} onClick={() => handleClick(false, `${type}Value`)}>&darr;</button>
      <div id={`${type}-length`}>{value}</div>
      <button id={`${type}-increment`} onClick={() => handleClick(true, `${type}Value`)}>&uarr;</button>
    </div>
  </div>
)

const Timer = ({ mode, time }) => (
  <div class='Timer'>
    <h1 id='timer-label'>{mode === 'session' ? 'Session' : 'Break'}</h1>
    <h1 id='time-left'>{time}</h1>
  </div>
)

const Controls = ({ active }) => (
  <div class='Controls'>
    <button id='start_stop'>
      { active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span> }
    </button>
    <button id='reset'>&#8635;</button>
  </div>
)

class PomodoroTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakValue: 5,
      sessionValue: 25,
      mode: 'session',
      time: 25 * 60 * 1000,
      active: false
    }
  }

  handleSetTimers = (inc, type) => {
    this.setState({ [type]: this.state[type] + (inc ? 1 : -1) })
  }

   render() {
     return(
       <div>
         <Header/>
         <div class='settings'>
           <SetTimer type='break' value={this.state.breakValue} handleClick={this.handleSetTimers}/>
           <SetTimer type='session' value={this.state.sessionValue} handleClick={this.handleSetTimers}/>
         </div>
         <Timer mode={this.state.mode} time={moment(this.state.time).format('mm:ss')}/>
         <Controls active={this.state.active}/>
       </div>
     )
   } 
}

export default  PomodoroTimer;