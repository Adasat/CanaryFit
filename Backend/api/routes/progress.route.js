const router = require("express").Router()
const {getOneProgress, getAllProgressByUser, addRegisterWeight, addExerciseRegister} = require('../controllers/progress.controller')
const {checkAuth} = require('../middleware/auth')


router.get('/user/:userId', checkAuth, getAllProgressByUser)
router.get('/:progressId', checkAuth, getOneProgress)
router.post('/', checkAuth, addRegisterWeight)
router.post('/new', checkAuth, addExerciseRegister)

module.exports = router;