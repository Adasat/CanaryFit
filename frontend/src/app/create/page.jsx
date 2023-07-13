'use client'

import CardExercise from '@/components/CardExercise/CardExercise'
import RoutineForm from '@/components/RoutineForm/RoutineForm'
import { getAllExercises } from '@/services/exercise.services'
import { createNewRoutine } from '@/services/routines.services'
import { getOneUserbyEmail } from '@/services/user.services'
import { filterTraining } from '@/validations/validations'
import { useEffect, useState } from 'react'

export default function Create() {
  const [formData, setFormData] = useState({
    title: '',
    target: '',
    weightTarget: '',
    trainingStyle: '',
    daysperWeek: '',
    gymTime: '',
    isPublic: true
  })
  const [allExercises, setAllExercises] = useState([])
  const [selectedExercises, setSelectedExercises] = useState([])
  const [user, setUser] = useState('')

  const getUserbyEmail = async () => {
      const email = await window.localStorage.getItem('email')
      const res = await getOneUserbyEmail(email)
      setUser(res)
    }

  

  const getExercises = async () => {
    const res = await getAllExercises()
    setAllExercises(res)
  }

  useEffect(() => {
    getExercises()
    getUserbyEmail()
  }, [])


  const handleFieldChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }))
  }

  const handleExerciseSelect = (exerciseId, isSelected) => {
    if (isSelected) {
      setSelectedExercises((prevSelectedExercises) => [...prevSelectedExercises, exerciseId]);
    } else {
      setSelectedExercises((prevSelectedExercises) => prevSelectedExercises.filter(id => id !== exerciseId));
    }
  }

  const handleClick = async() => {
    if(formData.title !== undefined && formData.trainingStyle !== undefined && user._id !== undefined && selectedExercises.length !== 0) {
      await createNewRoutine(formData.title, formData.trainingStyle, formData.daysperWeek, formData.target, formData.weightTarget, formData.gymTime, formData.isPublic, user._id, selectedExercises)
      alert('Routine created')
    }else {
      alert('Some error has ocurred!')
    }
  }
const coreExercises = allExercises.filter((exercise) => exercise.type.includes('Core'))
const pullExercises = allExercises.filter((exercise) => exercise.type.includes('Pull'));
const pushExercises = allExercises.filter((exercise) => exercise.type.includes('Push'));
const legsExercises = allExercises.filter((exercise) => exercise.type.includes('Legs'));
const fullExercises = allExercises.filter((exercise) => exercise.type.includes('Full'));
const upperExercises = allExercises.filter((exercise) => exercise.type.includes('Upper'));
const lowerExercises = allExercises.filter((exercise) => exercise.type.includes('Lower'));

const createExercisesByMuscles = (exercises) => {
  const exercisesByMuscles = {};

  exercises.forEach((exercise) => {
    const muscle = exercise.muscle;

    if (exercisesByMuscles[muscle]) {
      exercisesByMuscles[muscle].push(exercise);
    } else {
      exercisesByMuscles[muscle] = [exercise];
    }
  });
  return exercisesByMuscles;
};
const exercisesByMuscles = createExercisesByMuscles(allExercises);

console.log(exercisesByMuscles)
  return (
    <>
      <div className='flex flex-row justify-end p-4 items-center gap-3'>
        <p className='italic text-green-800 text-lg underline'>Don't push button before to choose exercises</p>
        <button onClick={handleClick} className='bg-secondary text-xl w-32 h-14 rounded-xl hover:bg-terciary'>Create</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 p-4 gap-5 min-h-screen pb-24">
        <div className="md:col-span-2 bg-grey max-h-72">
          <RoutineForm formData={formData} onFormChange={handleFieldChange} />
        </div>
        <div className="md:col-start-3 col-span-4 p-7">

           {
  allExercises &&
  allExercises.length !== 0 && (formData.trainingStyle === 'Pull, Push and Legs') ? (
  <>
    <div className='col-span-4'>
      <div className='bg-primary text-lg p-2 rounded-md mb-2'>
          <h2>Core Exercises</h2>
          </div>
      <div className='grid grid-cols-4 gap-4'>
      {coreExercises.map((exercise) => (
        <CardExercise key={exercise._id} exercise={exercise} />
      ))}

      </div>
    </div>
    <div>
      <div className='bg-primary text-lg p-2 rounded-md my-2'>
          <h2>Pull Exercises</h2>
          </div>
      <div className='grid grid-cols-4 gap-4 max-h-96 overflow-y-auto'>

      {pullExercises.map((exercise) => (
        <CardExercise key={exercise._id} exercise={exercise} />
        ))}
        </div>
    </div>

    <div>
      <div className='bg-primary text-lg p-2 rounded-md my-2'>
          <h2>Push Exercises</h2>
          </div>
      <div className='grid grid-cols-4 gap-4 max-h-96 overflow-y-auto'>

      {pushExercises.map((exercise) => (
        <CardExercise key={exercise._id} exercise={exercise} />
        ))}
        </div>
    </div>

    <div className='col-span-4' >
       <div className='bg-primary text-lg p-2 rounded-md my-2 max-h-96 overflow-y-auto'>
          <h2>Legs Exercises</h2>
          </div>
      <div className='grid grid-cols-4 gap-4'>

      {legsExercises.map((exercise) => (
        <CardExercise key={exercise._id} exercise={exercise} />
        ))}
        </div>
    </div>
  </>
) : formData.trainingStyle === 'Upper and Lower Body' ? (
  <>
  <div className='col-span-4'>
      <div className='bg-primary text-lg p-2 rounded-md mb-2'>
          <h2>Core Exercises</h2>
          </div>
      <div className='grid grid-cols-4 gap-4'>

      {coreExercises.map((exercise) => (
        <CardExercise key={exercise._id} exercise={exercise} />
        ))}
        </div>
    </div>
  <div className='col-span-4' >
<div className='bg-primary text-lg p-2 rounded-md mb-2 mt-2 '>
          <h2>Upper Body Exercises</h2>
          </div>
    <div className='grid grid-cols-4 gap-4 max-h-96 overflow-y-auto'>
    {upperExercises.map((exercise) => (
      <CardExercise key={exercise._id} exercise={exercise} />
      ))}
      </div>
  </div>

      <div className='col-span-4'>
        <div className='bg-primary text-lg p-2 rounded-md mb-2 mt-2'>
          <h2>Lower Body Exercises</h2>
          </div>
        <div className='grid grid-cols-4 gap-4 max-h-96 overflow-y-auto'>

        {lowerExercises.map((exercise) => (
          <CardExercise key={exercise._id} exercise={exercise} />
          ))}
          </div>
      </div>
          </>
    ) : formData.trainingStyle === 'Full Body' ? (
    <>
    <div className='col-span-4'>
        <div className='bg-primary text-lg p-2 rounded-md mb-2'>
          <h2>Core Exercises</h2>
          </div>
      <div className='grid grid-cols-4 gap-4'>
      {coreExercises.map((exercise) => (
        <CardExercise key={exercise._id} exercise={exercise} />
      ))}
      </div>
    </div>
    <div className='col-span-4 mt-4'>
        <div className='bg-primary text-lg p-2 rounded-md mb-2'>
          <h2>Full Body Exercises</h2>
          </div>
        <div className='grid grid-cols-4 gap-4 max-h-96 overflow-y-auto'>
        {fullExercises.map((exercise) => (
          <CardExercise key={exercise._id} exercise={exercise} />
          ))}
      </div>

        </div>
          </>

    )
    : formData.trainingStyle === 'By muscles' ? (
   <>
      {Object.keys(exercisesByMuscles).map((muscle) => (
        <div key={muscle}>
          <div className='bg-primary text-lg p-2 rounded-md mb-2'>
          <h2>{muscle}</h2>
          </div>
          <div className="max-h-56 overflow-x-scroll">
            <div className="grid grid-cols-4 gap-4">
              {exercisesByMuscles[muscle].map((exercise) => (
                <CardExercise key={exercise._id} exercise={exercise} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
 : (<div className='grid grid-cols-4 gap-4 '>

    {allExercises.map((exercise) => (
      <CardExercise key={exercise._id} exercise={exercise} />
    ))}
    </div>)}
           
          </div>
        </div>
        <div className='flex flex-col items-end justify-end p-4 items-center gap-3'>
        <button className='bg-secondary text-xl w-32 h-14 rounded-xl hover:bg-terciary'>Create</button>
      </div>
    </>
  )
}