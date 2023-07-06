const router = require("express").Router()
const {getProgressByUser, getAllProgressByUser} = require('../controllers/progress.controller')


router.get('/all/:userId', getAllProgressByUser)
router.get('/:id', getProgressByUser)

module.exports = router;