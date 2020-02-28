import React from "react";
import moment from "moment";
import './pomodoroTimer.css'

const quotes = 
["Either you run the day or the day runs you.", 
"Whether you think you can, or you think you can’t – you’re right.",
"Don’t wish it were easier. Wish you were better.",
"Do the hard jobs first. The easy jobs will take care of themselves.",
"The future depends on what you do today.", 
"The man who moves a mountain begins by carrying away small stones.",
"Things may come to those who wait, but only the things left by those who hustle.",
"To think too long about doing a thing often becomes its undoing.",
"You will never plough a field if you only turn it over in your mind.",
"Don't wait. The time will never be just right.",
"You don’t have to see the whole staircase, just take the first step.",
"You don’t have to see the whole staircase, just take the first step.",
"Happiness is the real sense of fulfillment that comes from hard work.",
"If you want to make an easy job seem mighty hard, just keep putting off doing it.",
"It does not matter how slowly you go, so long as you do not stop.",
"Amateurs sit and wait for inspiration, the rest of us just get up and go to work."
]

const Header = () => <h1 className="display-4" id="pomClock">Pomodoro Clock</h1>
const SetTimer = ({ type, value, handleClick }) => (
  <div className='SetTimer'>
    <div className="timerText" id={`${type}-label`}>{type === 'session' ? 'Session ' : 'Break '}Length</div>
    <div className='SetTimer-controls'>
      <button id={`${type}-decrement`} onClick={() => handleClick(false, `${type}Value`)}>&darr;</button>
      <h1 id={`${type}-length`}>{value}</h1>
      <button id={`${type}-increment`} onClick={() => handleClick(true, `${type}Value`)}>&uarr;</button>
    </div>
  </div>
)

const Timer = ({ mode, time}) => (
  <div className='Timer'>
    <h1 id='timer-label'>{mode === 'session' ? 'Session' : 'Break'}</h1>
    <h1 id='time-left'>{time}</h1>
  </div>
)

const Controls = ({ active, handleReset, handlePlayPause  }) => (
  <div className='Controls'>
    <button id='start_stop' onClick={handlePlayPause}>
      { active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span> }
    </button>
    <button id='reset' onClick={handleReset}>&#8635;</button>
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
      active: false,
      touched: false,
      quote:"Time to Get Motivated"
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.time === 0 && prevState.mode === 'session') {
      this.setState({ time: this.state.breakValue * 60 * 1000, mode: 'break' })
      this.audio.play()
    }
    if (prevState.time === 0 && prevState.mode === 'break') {
      this.setState({ time: this.state.sessionValue * 60 * 1000, mode: 'session'})
      this.audio.play()
    }
  }

  handleSetTimers = (inc, type) => {
    if(this.state[type] ===  60 && inc) return
    if(this.state[type] === 1 && !inc) return
    this.setState({ [type]: this.state[type] + (inc ? 1 : -1) })
  }

  handleReset = () => {
    this.setState({ 
      breakValue: 5, 
      sessionValue: 25, 
      time: 25 * 60 * 1000,
      mode: 'session',
      touched: false,
      active: false
     })
    clearInterval(this.pomodoro)
    this.audio.pause()
    this.audio.currentTime = 0
  }

  handlePlayPause = () => {
    if(this.state.active) {
      clearInterval(this.pomodoro)
      this.setState({ active: false })
    } else {
      if (this.state.touched) {
        this.pomodoro = setInterval(() => this.setState({ time: this.state.time - 1000}), 1000)
        this.setState({ active: true })
      } else {
        this.setState({ 
          time: this.state.sessionValue * 60 * 1000, 
          touched: true,
          active: true }, () => this.pomodoro = setInterval(() => this.setState({ time: this.state.time - 1000}), 1000))
        setInterval(()=>{
          var currentQuote=quotes[Math.floor(Math.random() * quotes.length)]
          this.setState({quote:currentQuote})
        }, 100000);
      }
    }
  }

   render() {
     return(
       <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4"><Header/></h1>
            <p className="lead">{this.state.quote}</p>
          </div>
        </div>
          <div class="card">
            <div class="card-body">
              <div className='settings'>
                <SetTimer type='break' value={this.state.breakValue} handleClick={this.handleSetTimers}/>
                <Timer mode={this.state.mode} time={moment(this.state.time).format('mm:ss')}/>
                <SetTimer type='session' value={this.state.sessionValue} handleClick={this.handleSetTimers}/>
                </div>  
                <Controls 
                  active={this.state.active} 
                  handlePlayPause={this.handlePlayPause}
                  handleReset={this.handleReset}/>
                  <audio 
                    id='beep' 
                    src='https://s3-us-west-1.amazonaws.com/benjaminadk/Data+synth+beep+high+and+sweet.mp3' 
                    ref={el => this.audio = el}
                />
            </div>
          </div>  
       </div>
     )
   } 
}

export default  PomodoroTimer;