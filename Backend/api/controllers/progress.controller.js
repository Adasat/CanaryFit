const Progress = require("../models/progress.model")
const User = require('../models/user.model')



const getAllProgressByUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId).populate('progress');
    if (!user) {
      return res.status(400).send("User not found");
    }
      const progress = user.progress || []; // Manejar el caso en que no haya progresos
    res.status(200).json(progress);
  } catch (error) {
    res.status(400).json('An error occurred while searching progress by user!');
  }
};

const getOneProgress = async (req, res) => {
  const progressId = req.params.progressId;
  try {
    const user = await User.findOne({ progress: progressId }).populate('progress');
    if (!user) {
      return res.status(400).send("User's progress not found");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json('An error occurred searching progress by user!');
  }
};

const addRegisterWeight = async (req, res) => {
   
  const userId = req.body.userId
  try {
    const user = await User.findById(userId)
    if(!user){
      res.status(400).send('User not found')
    }
    const register = await Progress.create({
      date: new Date(),
      weightProgress: {
        weight: req.body.weight,
        bmi: calculateBMI(req.body.weight, user.height)
      }
    })

    user.progress.push(register);

    await user.save();

    res.status(200).json(register)
    
    
    
  } catch (error) {
          res.status(400).send('An error ocurred!')

    
  }
    
}

const addExerciseRegister = async (req, res) => {

}

const addProgressToUserId = async(req, res) => {
    const userId = req.body.userId

}


 function calculateBMI(weight, height) {
    var heightInMetters = parseInt(height, 10) / 100; 
    var imc = parseInt(weight, 10) / (heightInMetters * heightInMetters);
    return imc.toFixed(2); 
  }

module.exports = {
    getAllProgressByUser,
    getOneProgress,
    addRegisterWeight
}