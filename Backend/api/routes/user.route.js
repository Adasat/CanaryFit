const router = require("express").Router()
const { getOneUser,
  createUser,
  updateWeight } = require('../controllers/user.controller')

router.get("/:id", getOneUser);
router.post("/", createUser); 


module.exports = router;