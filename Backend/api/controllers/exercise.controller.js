const Exercise = require("../models/exercise.model");

// GET ALL EXERCISES

const getAllExercise = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    console.log(exercises)
    if (!exercises || exercises.length === 0) {
      return res.status(400).send("There aren't exercises")
    }else{
      res.status(200).json(exercises)
    }
  } catch (error) {
    res.status(400).send("An error ocurred!");
  }
}

// GET ONE EXERCISE

const getOneExercise = async (req, res) => {
  const exerciseId = req.params.exerciseId

  try {
    const exercise = await Exercise.findById(exerciseId)
            console.log(exercise)

    if(!exercise){
      res.status(400).send('Exercise not found');
    }else{
      res.status(200).json(exercise)
    }
  } catch (error) {
     res.status(400).send("An error ocurred!");
  }
}

// GET ALL EXERCISES BY TYPES OR MUSCLES

const getAllExercisesByTypes = async (req, res) => {
  const type = req.params.type;
  try {
    const exercises = await Exercise.find({
      type: { $elemMatch: { $eq: type } },
    });
    if (exercises.length === 0) {
      return res.status(404).json("No exercises found for the specified type");
    }
    res.status(200).json(exercises);
  } catch (error) {
    res.status(400).send("An error occurred!");
  }
};

// CREATE NEW EXERCISE

const createExercise = async (req, res) => {
  try {
    const exercise = await Exercise.create({
      title: req.body.title,
      type: req.body.type,
      muscle: req.body.muscle,
      description: req.body.description, 
      recommendation: req.body.recommendation

    })
    res.status(200).json(exercise)
  } catch (error) {

    res.status(400).send('An error ocurred!');
  }

}



module.exports = {
  getAllExercise,
  getOneExercise,
  getAllExercisesByTypes,
  createExercise
};
