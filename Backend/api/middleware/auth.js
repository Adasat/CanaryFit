const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const checkAuth = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.JWT_SECRET, async (error, result) => {
    if (error) {
    console.log(error)
      return res.status(403).send(">> Token not valid!");
    }
    const user = await User.findOne({ email: result.email });

    if (!user) {
      return res.status(403).send(">> Token not valid2!");
    }

    res.locals.user = user;
    next();
  });
};

module.exports = { checkAuth };
