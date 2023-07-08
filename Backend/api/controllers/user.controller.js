require("dotenv").config();
const User = require("../models/user.model")
const Progress = require("../models/progress.model");
const Routine = require("../models/routine.model");


const getOneUser = async (req, res) => {
  const userId = req.params.id;

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

    const currentRoutine = await Routine.findById(user.actualRoutine._id).populate('exercises');
    const progress = user.progress;
    const favsRoutines =  user.favsRoutine;

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




const  updateWeight = async(req, res) => {
  const { userId, weight } = req.body
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const latestProgressId = user.progress[user.progress.length - 1];
    const latestProgress = await Progress.findById(latestProgressId);

    if (!latestProgress) {
      throw new Error("Progress not found");
    }
    latestProgress.weightProgress.push(weight);
    await latestProgress.save();
    res.status(200).json("Weight actualized succesfully!")

  } catch (error) {
    res.status(400).send("Error to actualize weight:", error.message);
  }
}

module.exports = {
  getOneUser,
  updateWeight,
};
