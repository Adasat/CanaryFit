require("dotenv").config();
const User = require("../models/user.model")
const Progress = require("../models/progress.model");
const Routine = require("../models/routine.model");

// GET ONE USER

const getOneUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId)
      .populate({
        path: "actualRoutine",
        model: "Routine",
      })
      .populate({
        path: "progress",
        model: "Progress",
      })
      .populate({
        path: "favsRoutine",
        model: "Routine",
      });

    if (!user) {
      return res.status(404).json("User not found");
    }

      const currentRoutine = user.actualRoutine ? await Routine.findById(user.actualRoutine._id).populate('exercises') : null;
    const progress = user.progress;
    const favsRoutines = user.favsRoutine;

    const response = { user };

    if (currentRoutine) {
      response.currentRoutine = currentRoutine;
    }

    if (progress && progress.length > 0) {
      response.progress = progress;
    }

    if (favsRoutines && favsRoutines.length > 0) {
      response.favsRoutines = favsRoutines;
    }

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("An error occurred!");
  }
};




module.exports = {
  getOneUser,
};
