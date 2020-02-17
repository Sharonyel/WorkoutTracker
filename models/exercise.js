const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a workout name"
  },
  type: {
    type: String,
    trim: true,
    required: "Enter a workout type"

  },
  distance: {
    type: Number,
    required: "Enter the distance"

  },
  duration: {
    type: Number,
    required: "Enter the duration"

  },
  weight: {
    type: Number,
    required: "Enter the weight amount"

  },
  sets: {
    type: Number,
    required: "Enter the number of sets"

  },
  reps: {
    type: Number,
    required: "Enter the number of reps"

  },
  date: {
      type: Date,
      default: Date.now
  }

});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
