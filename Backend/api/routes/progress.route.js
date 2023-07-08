const router = require("express").Router()
const {getOneProgress, getAllProgressByUser, addRegisterWeight} = require('../controllers/progress.controller')


router.get('/user/:userId', getAllProgressByUser)
router.get('/:progressId', getOneProgress)
router.post('/', addRegisterWeight)

module.exports = router;