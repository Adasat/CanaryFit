const router = require("express").Router()
const { getOneUser, getAllUsers, getUserByEmail } = require("../controllers/user.controller");
const {checkAuth} = require('../middleware/auth')

router.get("/", getAllUsers);
router.get("/email", checkAuth, getUserByEmail)
router.get("/:userId", checkAuth, getOneUser);



module.exports = router;