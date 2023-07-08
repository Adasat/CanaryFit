const router = require("express").Router();
const {getAllExercise,
  getOneExercise,
  createExercise,
  getAllExercisesByTypes} = require('../controllers/exercise.controller')

router.post('/', createExercise);
router.get("/", getAllExercise);
router.get("/:exerciseId", getOneExercise)
router.get('/type/:type', getAllExercisesByTypes)



module.exports = router