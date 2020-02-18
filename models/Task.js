var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  taskItem: {
    type: Array,
    required: true
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

  priority: [{
    type: String, 
    enum: ['Low', 'Medium', 'High'], 
    required: false}],
  
 
  user: [{
    type: Schema.Types.ObjectId,
    ref: "user"
  }],

  category: [{
    type: Schema.Types.ObjectId,
    ref: "category"
  }]
});

var Task = mongoose.model("task", TaskSchema);

module.exports = Task;
