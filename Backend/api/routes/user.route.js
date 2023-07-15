const router = require("express").Router()
const { getOneUser, getAllUsers, getUserByEmail } = require("../controllers/user.controller");
const {checkAuth} = require('../middleware/auth')

router.get("/", checkAuth, getOneUser);
router.get("/all", getAllUsers);
router.get("/email", checkAuth, getUserByEmail)



module.exports = router;