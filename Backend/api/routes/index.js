const router = require("express").Router();

router.use("/profile", require("./user.route"));
router.use('/progress', require('./progress.route'))

module.exports = router;