const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require("./Exercise").schema;
//inspired by https://mongoosejs.com/docs/populate.html

const workoutSchema = Schema({
  workoutName: { type: String, required: true },
  date: { type: Date, default: Date.now },
  exercises: [Exercise]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
