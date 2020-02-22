var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  taskItem: {
    type: String,
    required: "A Task is Required"
  },
  completed: {
    type: Boolean,
    default: false
  },
  saved: {
    type: Boolean,
    default: false
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date,
    default: Date.now
  },
  priority: {
    type: String, 
    enum: ['Daily', 'Weekly', 'Monthly']
  },
    
  category: {
    type: String, 
    enum: ['Career', 'Education', 'Fitness', 'Personal', 'Health', 'Chores'], 
    required: "A Category is Required"
  }

});

var Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
