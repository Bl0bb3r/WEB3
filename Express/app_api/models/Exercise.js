const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new mongoose.Schema({
  exerciseName: { type: String, required: true },
  description: { type: String, required: true },
  sets: { type: Number, max: 100, required: true },
  reps: { type: Number, max: 200, required: true },
  date: { type: Date, default: Date.now }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
