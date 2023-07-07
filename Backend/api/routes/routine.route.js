const router = require("express").Router();
const {
  getAllPublicRoutines,
  getFavsRoutinesByUser,
  getCurrentRoutine,
  getRoutineById,
  createRoutine,
  updateRoutine,
  deleteRoutine,
  deleteExerciseFromRoutine,
} = require("../controllers/routine.controller");

router.post("/", createRoutine);

module.exports = router
