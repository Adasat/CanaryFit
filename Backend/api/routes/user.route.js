const router = require("express").Router()
const { getOneUser, getAllUsers, getUserByEmail } = require("../controllers/user.controller");
const {checkAuth} = require('../middleware/auth')

router.get("/", getAllUsers);
router.get("/:userId", checkAuth, getOneUser);
router.get("email/:userEmail", getUserByEmail)



module.exports = router;