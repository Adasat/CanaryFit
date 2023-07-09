const router = require("express").Router();


router.use('/profile', require('./user.route'))
router.use('/progress', require('./progress.route'));
router.use('/exercise', require('./exercise.route'))
router.use("/routine", require("./routine.route"));
router.use('/auth', require('./auth.route'))




module.exports = router;