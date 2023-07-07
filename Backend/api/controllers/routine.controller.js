const Exercise = require('../models/exercise.model')
const Routine = require('../models/routine.model')
const User = require('../models/user.model')

const getAllPublicRoutines = (req, res) => {
    try {
      const routines = Routine.find({ public: True });
      if(routines.length === 0){
        res.status(400).send("Not found public's routines")
      }
      res.status(200).json(routines)      
    } catch (error) {
      res.status(400).send('An error ocurred!')
    }
}

const getFavsRoutinesByUser = async (req, res) => {
     return "";
}

const getCurrentRoutine = async (req, res) => {
  try {
    const userId = req.params.UserId

    const user = await User.findById(userId).populate({
      path: 'actualRoutine',
      model: 'Routine'
    });

    if (!user) {
      return res.status(404).json('Usuario no encontrado')
    }

    const currentRoutine = user.actualRoutine
    res.status(200).json(currentRoutine)
  } catch (error) {
    res.status(400).json('Error al obtener la rutina actual del usuario: ' + error.message)
  }
}

const getRoutineById = async (req, res) => {
    const routineId = req.params.id 
    try {
        const routine = Routine.findById(routineId)
        if(!routine){
            res.status(400).send('Routine not found!')
        }
        res.status(200).json(routine)
    } catch (error) {
        res.status(400).send('An error ocurred!')
        
    }

}

const createRoutine = async (req, res) => {
  try {
    const userId = req.user;
    const exerciseIds = req.body.exercises

    const validExerciseIds = await Exercise.find({
      _id: { $in: exerciseIds },
    }).distinct("_id");
    if (validExerciseIds.length !== exerciseIds.length) {
      return res.status(400).json("One or more exercises do not exist");
    }

    const routine = await Routine.create({
      title: req.body.title,
      styleRoutine: req.body.styleRoutine,
      dayPerWeek: req.body.dayPerWeek,
      routineTarget: req.body.routineTarget,
      timeEstimate: req.body.timeEstimate,
      owner: userId,
      exercises: validExerciseIds, 
    });

    res.status(200).json({message: "Routine created successfully",
    id: routine.id});
  } catch (error) {
    console.log(error)
    res.status(400).send("An error occurred creating routine!");
  }
};


const updateRoutine = async (req, res) => {
    return "";
}

const deleteRoutine = async (req, res) => {
    const routineId = req.params.routineId
    const userId = req.userId
    try {
        const routine = await Routine.findOne({ _id: routineId, owner: userId })
        if (!routine) {
            return res.status(404).json('Not authorized')
        }
        await Routine.deleteOne({ _id: routineId })
        res.status(200).json('Routine deleted successfully')
    } catch (error) {
        res.status(400).json('An error ocurred!')   
    }
}


const deleteExerciseFromRoutine = async (req, res) => {
  const routineId = req.params.routineId;
  const exerciseId = req.body.exerciseId;
  const userId = req.userId;

  try {
    const routine = await Routine.findOneAndUpdate(
      { _id: routineId, owner: userId },
      { $pull: { exercises: exerciseId } },
      { new: true }
    );

    if (!routine) {
      return res.status(404).json("Not authorized");
    }

    res.status(200).json("Exercise removed from routine successfully");
  } catch (error) {
    res
      .status(500)
      .json("An error occurred while deleting exercise from routine");
  }
};

module.exports = {
  getAllPublicRoutines,
  getFavsRoutinesByUser,
  getCurrentRoutine,
  getRoutineById,
  createRoutine,
  updateRoutine,
  deleteRoutine,
  deleteExerciseFromRoutine,
}