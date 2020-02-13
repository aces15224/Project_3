
const mongoose = require("mongoose");
const db = require("../models");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password1@ds035517.mlab.com:35517/heroku_fj6klq23";

mongoose.connect(MONGODB_URI,{  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

module.exports = function (app) {
  
};
