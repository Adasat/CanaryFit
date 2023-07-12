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
  deleteFavRoutine,
  deleteRoutine,
  deleteExerciseFromRoutine,
} = require("../controllers/routine.controller");

const {checkAuth} = require('../middleware/auth')


router.get('/', checkAuth, getAllPublicRoutines)
router.get('/created', checkAuth, getAllRoutinesCreated)
router.get('/current', checkAuth, getCurrentRoutine)
router.get('/:routineId', checkAuth, getRoutineById)



router.post("/", checkAuth, createRoutine)
router.post('/favs', checkAuth, addFavRoutine)

router.patch('/', checkAuth, updateCurrentRoutine)
router.patch('/update', checkAuth, updateRoutine)

router.delete('/', checkAuth, deleteRoutine)
router.delete('/remove', checkAuth, deleteFavRoutine)
router.delete('/:routineId', checkAuth, deleteExerciseFromRoutine)

module.exports = router
