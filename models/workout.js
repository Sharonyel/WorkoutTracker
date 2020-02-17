const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const workoutSchema = new Schema({
  exercises: {
    type: Array,
  },
  totalDuration: {
    type: Number,
  },
  day: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
