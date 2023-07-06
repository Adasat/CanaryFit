const Progress = require("../models/progress.model")
const User = require('../models/user.model')

const getProgressByUser = async(req, res) => {
    const progressId = req.params.ProgressId
    try {
        const user = await User.findOne({ progress:  progressId}).populate('progress')
        if(!user){
            res.status(400).send("User's progress not found")
        }
        res.status(200).json(user)
        
    } catch (error) {
        res.status(400).json('An error ocurred searching progress by user!')
        
    }
}

const getAllProgressByUser = async (req, res) => {
  const userId = req.params.UserId;
  try {
    const user = await User.findById(userId).populate('progress');
    if (!user) {
      return res.status(400).send("User not found");
    }
    const progress = user.progress;
    res.status(200).json(progress);
  } catch (error) {
    res.status(400).json('An error occurred while searching progress by user!');
  }
};

module.exports = {
    getAllProgressByUser,
    getProgressByUser
}