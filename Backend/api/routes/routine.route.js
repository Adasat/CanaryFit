const router = require("express").Router();
const {
  getAllPublicRoutines,
  getCurrentRoutine,
  getRoutineById,
  getAllRoutinesCreated,
  createRoutine,
  addFavRoutine,
  updateRoutine,
  updateCurrentRoutine,
  deleteRoutine,
  deleteExerciseFromRoutine,
} = require("../controllers/routine.controller");

router.get('/', getAllPublicRoutines)
router.get('/:routineId', getRoutineById)
router.get('/current/:userId', getCurrentRoutine)
router.get('/created/:userId', getAllRoutinesCreated)

router.post("/", createRoutine)
router.post('/favs', addFavRoutine)

router.patch('/', updateCurrentRoutine)
router.patch('/update', updateRoutine)

router.delete('/', deleteRoutine)
router.delete('/:routineId', deleteExerciseFromRoutine)

module.exports = router
