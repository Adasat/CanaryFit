require("dotenv").config();
const User = require("../models/user.model")
const Progress = require("../models/progress.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();


const getOneUser = async (req, res) => {
  let userId = req.params.id;
  console.log(userId)
  try {
    const user = await User.findById(userId);
    console.log(user)
    res.status(200).json(user);
  } catch (error) {
    console.log(error)
    res.status(400).send("An error Ocurred!");
  }
};

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



async function updateWeight(userId, weight) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const latestProgressId = user.progress[user.progress.length - 1];
    const latestProgress = await Progress.findById(latestProgressId);

    if (!latestProgress) {
      throw new Error("Progreso no encontrado");
    }
    latestProgress.weightProgress.push(weight);
    await latestProgress.save();
    res.status(200).json("Peso actualizado exitosamente")

  } catch (error) {
    res.status(400).send("Error al actualizar el peso:", error.message);
  }
}

module.exports = {
  getOneUser,
  createUser,
  updateWeight,
};
