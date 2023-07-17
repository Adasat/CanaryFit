const Exercise = require("../models/exercise.model");
const Routine = require("../models/routine.model");
const User = require("../models/user.model");

// GET ALL PUBLIC ROUTINES

const getAllPublicRoutines = async (req, res) => {
  try {
    const routines = await Routine.find({ public: true })
      .populate("exercises")
      .populate("owner")
      .exec();
    if (routines.length === 0) {
      res.status(400).send("Not found public's routines");
    }
    res.status(200).json(routines);
  } catch (error) {
    console.log(error);
    res.status(400).send("An error ocurred!");
  }
};

// GET ALL ROUTINES WHAT USER CREATED

const getAllRoutinesCreated = async(req, res) => {
  try {
    const userId = res.locals.user._id;

    const routines = await Routine.find({owner: userId}).populate('exercises')

    if(routines.length === 0){
      res.status(400).send('This user didnt created any routines')
    }

    res.status(200).json(routines)
  } catch (error) {
    res.status(400).send('An error ocurred!')
    
  }
}

// GET THE CURRENT ROUTINE OF USER

const getCurrentRoutine = async (req, res) => {
  try {
    const userId = res.locals.user.id;
    console.log(userId)

    const user = await User.findById(userId).populate({
      path: "actualRoutine",
      model: "Routine",
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const currentRoutine = await Routine.findById(
      user.actualRoutine.id
    ).populate("exercises");

    res.status(200).json(currentRoutine);
  } catch (error) {
    console.log(error)
    res.status(400).send("An error ocurred!");
  }
};

// GET ROUTINE BY ID

const getRoutineById = async (req, res) => {
  try {
    const routineId = req.params.routineId;
    const routine = await Routine.findById(routineId).populate("exercises").populate('owner');

    if (!routine) {
      return res.status(404).json("Routine not found");
    }

    const sanitizedRoutine = routine.toJSON();
    res.status(200).json(sanitizedRoutine);
  } catch (error) {
    res.status(400).send("An error occurred while fetching routine");
  }
};


// CREATE NEW ROUTINE

const createRoutine = async (req, res) => {
  try {
    const exerciseIds = req.body.exercises;

    const userId = res.locals.user._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json("User not found");
    }

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
      weightTarget: req.body.weightTarget,
      timeEstimate: req.body.timeEstimate,
      owner: userId,
      exercises: validExerciseIds,
    });

    await User.findByIdAndUpdate(userId, {actualRoutine: routine._id})

    res
      .status(200)
      .json({ message: "Routine created successfully", id: routine.id });
  } catch (error) {
    console.log(error)
    res.status(400).send("An error occurred creating routine!");
  }
};


// ADD FAVOURITE ROUTINE TO THE PROFILE

const addFavRoutine = async (req, res) => {
  try {
    const routineId  = req.body.routineId
    const userId = res.locals.user._id
    const routine = await Routine.findById(routineId);
    if (!routine) {
      res.status(400).send("Routine not found");
    } else {
      const user = await User.findByIdAndUpdate(
        userId,
        { $push: { favsRoutine: routineId } },
        { new: true }
      );

      if (!user) {
        return res.status(400).send("User not found");
      }

      res
        .status(200)
        .json({ message: "Favorite routine added successfully", user });
    }
  } catch (error) {
    res.status(400).send("An error occurred!");
  }
};

// UPDATE CURRENT ROUTINE

const updateCurrentRoutine = async (req, res) => {
  try {
    const routineId  = req.body.routineId
    const userId = res.locals.user._id

    const routine = await Routine.findById(routineId);
    if (!routine) {
      res.status(400).send("Routine not found");
    } else {
      const user = await User.findByIdAndUpdate(userId, {
        actualRoutine: routineId,
      });

      if (!user) {
        res.status(400).send("User not found");
      }
      res.status(200).json({ message: "User updated successfully" });
    }
  } catch (error) {
    res.status(400).send("An error ocurred!");
  }
}

// UPDATE CREATED ROUTINE BY OWN USER

const updateRoutine = async (req, res) => {
  const routineId = req.body.routineId;
  const newExercises = req.body.newExercises;
  const userId = res.locals.user._id


  try {
    const routine = await Routine.findById(routineId)
    if (!routine) {
      return res.status(400).send('Routine not found!');
    }
    if (routine.owner.toString() !== userId.toString()) {
      return res.status(401).send('Unauthorized: User is not the owner of the routine');
    }

    let exerciseExists = false;

    for (let i = 0; i < newExercises.length; i++) {
      const exerciseId = newExercises[i];
      const exercise = await Exercise.findById(exerciseId);
      if (!exercise) {
        return('Exercise not found')
      }

      if (routine.exercises.includes(exercise._id)) {
        exerciseExists = true;
        break;
      }

      routine.exercises.push(exercise._id);
    }

    if (exerciseExists) {
      return(`Exercise already exists in the routine`);
    }

    await routine.save();

    res.status(200).json(routine);
  } catch (error) {
    console.log(error);
    res.status(400).send('An error occurred!');
  }
};

//DELETE ROUTINE FOR FAVS ROUTINE


const deleteFavRoutine = async (req, res) => {
  const routineId = req.body.routineId;
  const userId = res.locals.user._id;
  

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const index = user.favsRoutine.indexOf(routineId);

    if (index === -1) {
      return res.status(404).json({ error: 'Routine not found in favorites' });
    }

    user.favsRoutine.splice(index, 1);

    await user.save();

    res.status(200).json({ message: 'Routine removed from favorites' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

//  DELETE ROUTINE BY OWN USER

const deleteRoutine = async (req, res) => {
  const routineId = req.body.routineId;
  const userId = res.locals.user._id
  try {
    const routine = await Routine.findOne({ _id: routineId, owner: userId });
    if (!routine) {
      return res.status(404).json("Not authorized");
    }
    await Routine.deleteOne({ _id: routineId });
    res.status(200).json("Routine deleted successfully");
  } catch (error) {
    res.status(400).json("An error ocurred!");
  }
};


// DELETE EXERCISE FROM ROUTINE BY OWN USER

const deleteExerciseFromRoutine = async (req, res) => {
  const routineId = req.params.routineId;
  const exerciseId = req.body.exerciseId;
  const userId = res.locals.user._id

  try {
    const routine = await Routine.findOne({ _id: routineId, owner: userId });

    if (!routine) {
      return res.status(404).json("Routine not found or you are not authorized");
    }

    const exerciseIndex = routine.exercises.indexOf(exerciseId);

    if (exerciseIndex === -1) {
      return res.status(400).json("Exercise not found in the routine");
    }

    routine.exercises.splice(exerciseIndex, 1);
    await routine.save();

    res.status(200).json("Exercise removed from routine successfully");
  } catch (error) {
    res
      .status(500)
      .json("An error occurred while deleting exercise from routine");
  }
};



module.exports = {
  getAllPublicRoutines,
  getCurrentRoutine,
  getRoutineById,
  getAllRoutinesCreated,
  createRoutine,
  addFavRoutine,
  updateRoutine,
  updateCurrentRoutine,
  deleteFavRoutine,
  deleteRoutine,
  deleteExerciseFromRoutine,
};
