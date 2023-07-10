const router = require("express").Router()
const { getOneUser, getAllUsers } = require("../controllers/user.controller");
const {checkAuth} = require('../middleware/auth')

router.get("/", getAllUsers);
router.get("/:userId", checkAuth, getOneUser);



module.exports = router;