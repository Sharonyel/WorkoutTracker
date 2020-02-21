const router = require("express").Router();
const Workout = require("../models/workout.js");

// const Exercise = require("../models/exercise.js");


router.post("/api/workouts", ({ body }, res) => {
    console.log("created workout")
  Workout.create(body)
    .then(dbWorkout => {
        console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
        console.log(err)
      res.status(400).json(err);
    });
});


router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.updateOne({_id: params.id}, {$push: {exercises: body}})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
//   router.put("/api/workouts/range", ({ body, params }, res) => {
//     Workout.find({_id: params.id}, {$push: {exercises: body}})
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

module.exports = router;
