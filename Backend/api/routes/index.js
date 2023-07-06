const router = require("express").Router();

router.use("/profile", require("./user.route"));

module.exports = router;