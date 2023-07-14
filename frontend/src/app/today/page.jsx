'use client'

import { getCurrentRoutine } from '@/services/routines.services'
import { useEffect, useState } from 'react'
import ShowExercise from '@/components/ShowExercise/showExercise'
import ModalExercise from '@/components/modalExercise/ModalExercise'

export default function Today () {
  const [currentRoutine, setCurrentRoutine] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedRoutine, setSelectedRoutine] = useState(null)
  const [selectedOption, setSelectedOptions] = useState('')

  const getUserNCurrentRoutine = async () => {
    const res = await getCurrentRoutine()
    setCurrentRoutine(res)
  }

  const style = 'Pull, Push and Legs'

  const handleOpenModal = (routine) => {
    setSelectedRoutine(routine)
    setShowModal(true)
  }

  const handleClickSelection = (value) => {
    setSelectedOptions(value)
  }

  useEffect(() => {
    getUserNCurrentRoutine()
  }, [])

  let coreExercises = []
  let pullExercises = []
  let pushExercises = []
  let legsExercises = []
  let fullExercises = []
  let upperExercises = []
  let lowerExercises = []
  let allExercises = []

  if (
    currentRoutine &&
    currentRoutine.exercises &&
    currentRoutine.exercises.length > 0
  ) {
    allExercises = currentRoutine.exercises

    coreExercises = currentRoutine.exercises.filter((exercise) =>
      exercise.type.includes('Core')
    )
    pullExercises = currentRoutine.exercises.filter((exercise) =>
      exercise.type.includes('Pull')
    )
    pushExercises = currentRoutine.exercises.filter((exercise) =>
      exercise.type.includes('Push')
    )
    legsExercises = currentRoutine.exercises.filter((exercise) =>
      exercise.type.includes('Legs')
    )
    fullExercises = currentRoutine.exercises.filter((exercise) =>
      exercise.type.includes('Full')
    )
    upperExercises = currentRoutine.exercises.filter((exercise) =>
      exercise.type.includes('Upper')
    )
    lowerExercises = currentRoutine.exercises.filter((exercise) =>
      exercise.type.includes('Lower')
    )
  }

  const createExercisesByMuscles = (exercises) => {
    const exercisesByMuscles = {}

    exercises.forEach((exercise) => {
      const muscle = exercise.muscle

      if (exercisesByMuscles[muscle]) {
        exercisesByMuscles[muscle].push(exercise)
      } else {
        exercisesByMuscles[muscle] = [exercise]
      }
    })
    return exercisesByMuscles
  }
  let exercisesByMuscles = {}

  if (
    currentRoutine &&
    currentRoutine.exercises &&
    currentRoutine.exercises.length > 0
  ) {
    exercisesByMuscles = createExercisesByMuscles(currentRoutine.exercises)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {currentRoutine && currentRoutine.title && (
        <div>
          <p className='sm:text-xl md:text-4xl text-green-900 my-5 italic'>{currentRoutine.title}</p>
        </div>
      )}
      {currentRoutine && style && style === 'Upper and Lower Body' ? (
        <div className="flex sm:flex-wrap md:flex-row  gap-3 ">
          <div
            className={`${
              selectedOption === 'Core'
                ? 'flex w-60 h-20 justify-center items-center text-2xl rounded-lg border-2 border-primary bg-primary cursor-pointer transition-colors ease-linear delay-300'
                : 'flex w-60 h-20 text-green-900 justify-center items-center text-2xl rounded-lg border-2 border-primary cursor-pointer transition-colors ease-linear delay-100'
            }`}
            onClick={() => handleClickSelection('Core')}
          >
            Core
          </div>
          <div
            className={`${
              selectedOption === 'Upper'
                ? 'flex w-60 h-20 justify-center items-center text-2xl rounded-lg border-2 border-primary bg-primary cursor-pointer transition-colors ease-linear delay-300'
                : 'flex w-60 h-20 text-green-900 justify-center items-center text-2xl rounded-lg border-2 border-primary cursor-pointer transition-colors ease-linear delay-100'
            }`}
            onClick={() => handleClickSelection('Upper')}
          >
            Upper Body
          </div>
          <div
            className={`${
              selectedOption === 'Lower'
                ? 'flex w-60 h-20 justify-center items-center text-2xl rounded-lg border-2 border-primary bg-primary cursor-pointer transition-colors ease-linear delay-300'
                : 'flex w-60 h-20 text-green-900 justify-center items-center text-2xl rounded-lg border-2 border-primary cursor-pointer transition-colors ease-linear delay-100'
            }`}
            onClick={() => handleClickSelection('Pull')}
          >
            Lower
          </div>
        </div>
      ) : style === 'Pull, Push and Legs' ? (
        <div className="flex sm:flex-wrap md:flex-row  gap-3">
          <div
            className={`${
              selectedOption === 'Core'
                ? 'flex w-60 h-20 justify-center items-center text-2xl rounded-lg border-2 border-primary bg-primary cursor-pointer transition-colors ease-linear delay-300'
                : 'flex w-60 h-20 text-green-900 justify-center items-center text-2xl rounded-lg border-2 border-primary cursor-pointer transition-colors ease-linear delay-100'
            }`}
            onClick={() => handleClickSelection('Core')}
          >
            Core
          </div>
          <div
            className={`${
              selectedOption === 'Pull'
                ? 'flex w-60 h-20 justify-center items-center text-2xl rounded-lg border-2 border-primary bg-primary cursor-pointer transition-colors ease-linear delay-300'
                : 'flex w-60 h-20 text-green-900 justify-center items-center text-2xl rounded-lg border-2 border-primary cursor-pointer transition-colors ease-linear delay-100' 
            }`}
            onClick={() => handleClickSelection('Pull')}
          >
            Pull
          </div>
          <div
            className={`${
              selectedOption === 'Push'
                ? 'flex w-60 h-20 justify-center items-center text-2xl rounded-lg border-2 border-primary bg-primary cursor-pointer transition-colors ease-linear delay-300'
                : 'flex w-60 h-20 text-green-900 justify-center items-center text-2xl rounded-lg border-2 border-primary cursor-pointer transition-colors ease-linear delay-100'
            }`}
            onClick={() => handleClickSelection('Push')}
          >
            Push
          </div>
          <div
            className={`${
              selectedOption === 'Legs'
                ? 'flex w-60 h-20 justify-center items-center text-2xl rounded-lg border-2 border-primary bg-primary cursor-pointer transition-colors ease-linear delay-300'
                : 'flex w-60 h-20 text-green-900 justify-center items-center text-2xl rounded-lg border-2 border-primary cursor-pointer transition-colors ease-linear delay-100'
            }`}
            onClick={() => handleClickSelection('Legs')}
          >
            {' '}
            Legs
          </div>
        </div>
      ) : style === 'Full Body' ? (
        <div className="flex sm:flex-wrap md:flex-row  gap-3">
          <div
            className={`${
              selectedOption === 'Core'
                ? 'flex w-60 h-20 justify-center items-center text-2xl rounded-lg border-2 border-primary bg-primary cursor-pointer transition-colors ease-linear delay-300'
                : 'flex w-60 h-20 text-green-900 justify-center items-center text-2xl rounded-lg border-2 border-primary cursor-pointer transition-colors ease-linear delay-100'
            }`}
            onClick={() => handleClickSelection('Core')}
          >
            Core
          </div>
          <div
            className={`${
              selectedOption === 'Full Body'
                ? 'flex w-60 h-20 justify-center items-center text-2xl rounded-lg border-2 border-primary bg-primary cursor-pointer transition-colors ease-linear delay-300'
                : 'flex w-60 h-20 text-green-900 justify-center items-center text-2xl rounded-lg border-2 border-primary cursor-pointer transition-colors ease-linear delay-100'
            }`}
            onClick={() => handleClickSelection('Full Body')}
          >
            Full Body
          </div>
        </div>
      ) : style === 'By muscles' ? (
        <div className="flex sm:flex-wrap md:flex-row  gap-3">
          <div
            className={`${
              selectedOption === 'Core'
                ? 'flex w-60 h-20 justify-center items-center text-2xl rounded-lg border-2 border-primary bg-primary cursor-pointer transition-colors ease-linear delay-300'
                : 'flex w-60 h-20 text-green-900 justify-center items-center text-2xl rounded-lg border-2 border-primary cursor-pointer transition-colors ease-linear delay-100'
            }`}
            onClick={() => handleClickSelection('Core')}
          >
            Core
          </div>
          <div
            className={`${
              selectedOption === 'By muscles'
                ? 'flex w-60 h-20 justify-center items-center text-2xl rounded-lg border-2 border-primary bg-primary cursor-pointer transition-colors ease-linear delay-300'
                : 'flex w-60 h-20 text-green-900 justify-center items-center text-2xl rounded-lg border-2 border-primary cursor-pointer transition-colors ease-linear delay-100'
            }`}
            onClick={() => handleClickSelection('By muscles')}
          >
            {' '}
            Muscles
          </div>
        </div>
      ) : null}

      <div className="self-start ml-10">
        <ul className="list-disc text-green-900 mt-2">
          <b>Instructions</b>
          <li>5 minutes of warm up's cardio</li>
          <li>3 set of core exercises</li>
          <li>1 exercise of muscle of 3 sets with 12 repetitions each</li>
        </ul>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-4 text-green-900 ">
        {currentRoutine &&
        currentRoutine.exercises.lenght !== 0 &&
        selectedOption === 'Pull'
          ? pullExercises.map((exercise) => (
              <ShowExercise
                key={exercise._id}
                exercise={exercise}
                handleOpenModal={handleOpenModal}
              />
            ))
          : selectedOption === 'Push'
          ? pushExercises.map((exercise) => (
              <ShowExercise
                key={exercise._id}
                exercise={exercise}
                handleOpenModal={handleOpenModal}
              />
            ))
          : selectedOption === 'Core'
          ? coreExercises.map((exercise) => (
              <ShowExercise
                key={exercise._id}
                exercise={exercise}
                handleOpenModal={handleOpenModal}
              />
            ))
          : selectedOption === 'Legs'
          ? legsExercises.map((exercise) => (
              <ShowExercise
                key={exercise._id}
                exercise={exercise}
                handleOpenModal={handleOpenModal}
              />
            ))
          : selectedOption === 'Upper'
          ? upperExercises.map((exercise) => (
              <ShowExercise
                key={exercise._id}
                exercise={exercise}
                handleOpenModal={handleOpenModal}
              />
            ))
          : selectedOption === 'Lower'
          ? lowerExercises.map((exercise) => (
              <ShowExercise
                key={exercise._id}
                exercise={exercise}
                handleOpenModal={handleOpenModal}
              />
            ))
          : selectedOption === 'Full Body'
          ? fullExercises.map((exercise) => (
              <ShowExercise
                key={exercise._id}
                exercise={exercise}
                handleOpenModal={handleOpenModal}
              />
            ))
          : allExercises.map((exercise) => (
              <ShowExercise
                key={exercise._id}
                exercise={exercise}
                handleOpenModal={handleOpenModal}
              />
            ))}
      </div>
      <ModalExercise
        isVisible={showModal}
        onClose={() => {
          setSelectedRoutine(null)
          setShowModal(false)
        }}
        exercise={selectedRoutine}
      />
    </div>
  )
}
