import * as React from "react";
import axios from "axios";
import { Chart } from "react-google-charts";


class BarChart extends React.Component {
  // Setting the initial state of the Counter component
  constructor(props) {
    super(props);
    this.state = {
    careerTask:0,
    careerComplete:0,
    educationTask:0,
    educationComplete:0,
    fitnessTask:0,
    fitnessComplete:0,
    choreTask:0,
    choreComplete:0,
    healthTask:0,
    healthComplete:0,
    personalTask:0,
    personalComplete:0
  };
  
 //  function for checking how many tasks the user has completed 
    const completeCheck = (res) => {
      for(let i=0; i<res.length; i++){     
        switch (res[i].category){
          case "Career":
            this.setState({ careerComplete: this.state.careerComplete + 1 });
            console.log(this.state.careerComplete)
            break;
          case "Fitness":
            this.setState({ fitnessComplete: this.state.fitnessComplete + 1 });
            console.log(this.state.fitnessComplete)
            break;
          case "Education":
            this.setState({ educationComplete: this.state.educationComplete + 1 });
            console.log(this.state.educationComplete)
            break;
          case "Chore":
            this.setState({ choreComplete: this.state.choreComplete + 1 });
            console.log(this.state.choreComplete)
            break;
          case "Health":
            this.setState({ healthComplete: this.state.healthComplete + 1 });
            console.log(this.state.healthComplete)
            break;
          case "Personal":
            this.setState({ personalComplete: this.state.personalComplete + 1 });
            console.log(this.state.personalComplete)
            break;
        }
      }
    };

    // function for checking how many tasks the user has in progress
    const taskCheck = (task) => {
      for(let i=0; i<task.length; i++){
        switch (task[i].category){
          case "Career":
            this.setState({ careerTask: this.state.careerTask + 1 });
            console.log(this.state.careerTask)
            break;
          case "Fitness":
            this.setState({ fitnessTask: this.state.fitnessTask + 1 });
            console.log(this.state.fitnessTask)
            break;
          case "Education":
            this.setState({ educationTask: this.state.educationTask + 1 });
            console.log(this.state.educationTask)
            break;
          case "Chore":
            this.setState({ choreTask: this.state.choreTask + 1 });
            console.log(this.state.choreTask)
            break;
          case "Health":
            this.setState({ healthTask: this.state.healthTask + 1 });
            console.log(this.state.healthTask)
            break;
          case "Personal":
            this.setState({ personalTask: this.state.personalTask + 1 });
            console.log(this.state.personalTask)
            break;
        }
      }   

    };
    
    //get call for completed tasks
    
    const getCompleted = () => {
      axios.get("/api/completed")
      .then(function (response) {
        var res=response.data;
        console.log(res);
        completeCheck(res)
      })
      .catch(function (error) {
        console.log(error);
      });
    
    };

    // get call for current tasks
    const getTasks = () => {
      axios.get("/api/tasks")
      .then(function (response) {
        var task=response.data;
        console.log(task);
        taskCheck(task);
      })
      .catch(function (error) {
        console.log(error);
      });
  
    };

    getCompleted();
    getTasks();

}
  render() {
    return (
        <div className={"my-pretty-chart-container"}>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Category', 'Tasks in Progress', 'Tasks Completed'],
              ['Career', this.state.careerTask, this.state.careerComplete],
              ['Education', this.state.educationTask, this.state.educationComplete],
              ['Fitness', this.state.fitnessTask, this.state.fitnessComplete],
              ['Personal', this.state.personalTask, this.state.personalComplete],
              ['Health', this.state.healthTask, this.state.healthComplete],
              ['Chores', this.state.choreTask, this.state.choreComplete],
            ]}
            options={{
              title: 'See where you spend your time!',
              chartArea: { width: '50%' },
              isStacked: true,
              hAxis: {
                title: 'Total Tasks Per Category',
                minValue: 0,
              },
              vAxis: {
                title: 'Tasks',
              },
            }}
          />
        </div>
      );
  } 
};

export default BarChart;
