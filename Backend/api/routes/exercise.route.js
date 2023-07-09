const router = require("express").Router();
const {getAllExercise,
  getOneExercise,
  createExercise,
  getAllExercisesByTypes} = require('../controllers/exercise.controller')
const {checkAuth} = require('../middleware/auth')



router.post('/', checkAuth, createExercise);
router.get("/", checkAuth, getAllExercise);
router.get("/:exerciseId", checkAuth, getOneExercise)
router.get('/type/:type', checkAuth, getAllExercisesByTypes)



module.exports = router