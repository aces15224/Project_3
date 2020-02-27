var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var CompleteSchema = new Schema({
  category: {
    type: String, 
    enum: ['Career', 'Education', 'Fitness', 'Personal', 'Health', 'Chores'], 
  }

});

var Complete = mongoose.model("Complete", CompleteSchema);

module.exports = Complete;
