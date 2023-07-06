const Routine = require('../models/routine.model')
const User = require('../models/user.model')

const getAllPublicRoutines = (req, res) => {


}
const getFavsRoutinesByUser = async (req, res) => {

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
        const userId = req.user
        const routine = await Routine.create({
            title: req.body.title,
            styleRoutine: req.body.styleRoutine,
            dayPerWeek: req.body.dayPerWeek,
            routineTarget: req.body.routineTarget,
            timeEstimate: req.body.timeEstimate,
            owner: userId,

            // exercises : []

        })
        res.status(200).json('Routine created successfully' + routine);
        
    } catch (error) {
        res.status(400).send('An error ocurred creating routine!')   
    }
}

const updateRoutine = async (req, res) => {

}

const deleteRoutine = async (req, res) => {
    const routineId = req.params.routineId
    const userId = req.userId
    try {
        const routine = await Routine.findOne({ _id: routineId, owner: userId })
        if (!routine) {
            return res.status(404).json('Routine not found')
        }
        await Routine.deleteOne({ _id: routineId })
        res.status(200).json('Routine deleted successfully')
    } catch (error) {
        res.status(400).json('An error ocurred!')   
    }
}

module.exports = {
    getAllPublicRoutines,
    getFavsRoutinesByUser,
    getCurrentRoutine,
    getRoutineById,
    createRoutine,
    updateRoutine,
    deleteRoutine
    
}