var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  categoryTitle: {
    type: String,
    unique: true,
    required: true,
    min: 1,
    max: 30
  },
   
  user: [{
    type: Schema.Types.ObjectId,
    ref: "user"
  }],

  task: [{
    type: Schema.Types.ObjectId,
    ref: "task"
  }]
});

var Category = mongoose.model("category", CategorySchema);

module.exports = Category;
