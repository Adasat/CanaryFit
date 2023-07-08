const router = require("express").Router()
const { getOneUser,
    updateWeight } = require('../controllers/user.controller')

router.get("/:id", getOneUser);
router.post('/', updateWeight)



module.exports = router;