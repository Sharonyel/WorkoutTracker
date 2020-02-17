const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
  distance: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },

});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
