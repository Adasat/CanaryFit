const router = require("express").Router()
const { getOneUser,
    updateWeight } = require('../controllers/user.controller')
const {checkAuth} = require('../middleware/auth')

router.get("/:userId", checkAuth, getOneUser);



module.exports = router;