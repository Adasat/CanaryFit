require("dotenv").config();
const User = require("../models/user.model")
const Progress = require("../models/progress.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();


const getOneUser = async (req, res) => {
  const userId = req.params.id
  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send("An error Ocurred!");
  }
};

/* const getOneUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId)
      .populate({
        path: 'actualRoutine',
        model: 'Routine'
      })
      .populate({
        path: 'progress',
        model: 'Progress'
      })
      .populate({
        path: 'favsRoutine',
        model: 'Routine'
      });

    if (!user) {
      return res.status(404).json('User not found')
    }

    const currentRoutine = user.actualRoutine
    const progress = user.progress;
    const favsRoutines = user.favsRoutine

    res.status(200).json({ user, currentRoutine, progress, favsRoutines })
  } catch (error) {
    res.status(400).send("An error occurred!")
  }
}; */

const createUser = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      height: req.body.height,
      weight: req.body.weight,
      weightTarget: req.body.weightTarget,
    });
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1y",
    });

    res.status(200).json({message: 'Profile created successfully!', 
    token: token})
  } catch (error) {
    console.log(error)
    res.status(404).send('An error ocurred!')
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
  createUser,
  updateWeight,
};
