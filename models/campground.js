var mongoose = require("mongoose");

// CAMPGROUND SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

module.exports = mongoose.model("Campground", campgroundSchema);