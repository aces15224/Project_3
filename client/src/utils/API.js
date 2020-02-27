import axios from "axios";

export default {
  // Gets all tasks
  getTasks: function() {
    return axios.get("/api/tasks")
    .then(function (response) {
      var res=response.data;
      for(let i=0; i<res.data; i++){
        console.log(i)
      }
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  // Saves a task to the database
  postTask: function(taskData) {
    return axios.post("/api/tasks", taskData)
    .then(console.log(taskData))
    .catch(err => console.log(err));
  },
  postCategory: function(taskComplete) {
    return axios.post("/api/completed", taskComplete)
    .then(console.log(taskComplete))
    .catch(err => console.log(err));
  }
};

