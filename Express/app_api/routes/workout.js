const router = require("express").Router();
const Exercise = require("../models/Exercise");
const Workout = require("../models/Workout");

router.post("/createworkout", async (req, res) => {
  const workout = new Workout({
    workoutName: req.body.workoutName,
    exercises: req.body.exercises.map(exercise => new Exercise(exercise))
  });
  try {
    console.log(req.body.exercises);
    const savedworkout = await workout.save();
    res.send({ savedworkout });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/allworkouts", async (req, res) => {
  const allWorkouts = await Workout.find();
  console.log(allWorkouts[0].exercises[0]);
  res.send(allWorkouts);
});

module.exports = router;
