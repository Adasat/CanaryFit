const Progress = require("../models/progress.model");
const User = require("../models/user.model");
const Execirse = require("../models/exercise.model");


// GET ALL PROGRESS BY USER

const getAllProgressByUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId).populate("progress");
    if (!user) {
      return res.status(400).send("User not found");
    }
    const progress = user.progress || []; // Manejar el caso en que no haya progresos
    res.status(200).json(progress);
  } catch (error) {
    res.status(400).json("An error occurred while searching progress by user!");
  }
};

// GET ONE USER PROGRESS 

const getOneProgress = async (req, res) => {
  const progressId = req.params.progressId;
  try {
    const user = await User.findOne({ progress: progressId }).populate(
      "exercises"
    );
    if (!user) {
      return res.status(400).send("User's progress not found");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json("An error occurred searching progress by user!");
  }
};


// ADD NEW WEIGTH REGISTER

const addRegisterWeight = async (req, res) => {
  const userId = res.locals.user._id;
  console.log(userId)
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).send("User not found");
    }
    const register = await Progress.create({
     
      weightProgress: {
        date: new Date(),
        weight: req.body.weight,
        bmi: calculateBMI(req.body.weight, user.height),
      },
    });

    user.weight = req.body.weight

    user.progress.push(register);

    await user.save();

    res.status(200).json(register);
  } catch (error) {
    res.status(400).send("An error ocurred!");
  }
};


// ADD NEW EXERCISE REGISTER

const addExerciseRegister = async (req, res) => {
  const userId = res.locals.user._id;
  const exerciseId = req.body.exerciseId;
  try {
    const user = await User.findById(userId);
    const exercise = await Execirse.findById(exerciseId);
    if (!user || !exercise) {
      res.status(400).send("User or exercise not found");
    }
    const register = await Progress.create({
      
      exerciseProgress: {
        date: new Date(),
        exercise: exercise._id,
        sets: {
          reps: req.body.reps,
          weightUsed: req.body.weightUsed,
        },
      },
    });

    user.progress.push(register);

    await user.save();

    res.status(200).json(register);
  } catch (error) {
    console.log(error);
    res.status(400).send("An error ocurred!");
  }
};


//FUNCTION BMI CALCULATE

function calculateBMI(weight, height) {
  var heightInMetters = parseInt(height, 10) / 100;
  var imc = parseInt(weight, 10) / (heightInMetters * heightInMetters);
  return imc.toFixed(2);
}

module.exports = {
  getAllProgressByUser,
  getOneProgress,
  addRegisterWeight,
  addExerciseRegister,
};
