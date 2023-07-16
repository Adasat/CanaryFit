'use client'

import CreateRoutines from '@/components/CreateRoutines/CreateRoutines'
import { getCurrentRoutine } from '@/services/routines.services'
import { getOneUserbyEmail, getOneUserbyId } from '@/services/user.services'
import { useEffect, useState } from 'react'
import { formatDate } from '@/validations/validations'

export default function myRoutines() {
  const [user, setUser] = useState('')
  const [currentRoutine, setCurrentRoutine] = useState('')

  const getUserbyEmail = async () => {
    const routine = await getCurrentRoutine()
    const res = await getOneUserbyId()
    setUser(res)
    setCurrentRoutine(routine)
  }
  console.log(user)

  useEffect(() => {
    getUserbyEmail()
  }, [])

    
  
  return (
    <div className="flex sm:flex-col md:flex-row justify-between text-green-900 mt-10">
      <div className="flex flex-col gap-5 ml-8">
        <CreateRoutines />
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          {currentRoutine ? (
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-800">
              {currentRoutine.title}
            </h5>
          ) : (
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
              Not found current routine
            </h5>
          )}
          {currentRoutine ? (
            <div>
              <p className="my-3 font-normal text-gray-700">
                <b>Target:</b> {currentRoutine.routineTarget}
              </p>
              <p className="mb-3 font-normal text-gray-700">
               <b>Type:</b> {currentRoutine.styleRoutine}
              </p>
              <p className="mb-3 font-normal text-gray-700">
                <b>Days per week:</b> {currentRoutine.dayPerWeek}
              </p>
              <p className="mb-3 font-normal text-gray-700">
                <b>Training's time:</b> {currentRoutine.timeEstimate}
              </p>
              <p className="mb-3 font-normal text-gray-700">
                <b>Weight Target: </b>{currentRoutine.weightTarget} kg
              </p>
            </div>
          ) : (
            <p className="mb-3 font-normal text-gray-700">
              Is good moment for creating <a href={'/create'}> new routine</a>
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col w-4/6 bg-gray-50 mr-9 p-5 max-h-88 overflow-y-auto">
        <p className="text-3xl font-bold text-green-800 mb-4">Register</p>
        <div className="flex flex-col">
          {user && user.progress && user.progress.length > 0 ? (
            <div>
              <p className="text-xl font-bold italic underline">Weight Progress</p>
              {user.progress.map((progress) => (
                <div key={progress.id}>
                  <ul className="list-disc ml-5 mt-4">
                    {progress.weightProgress.length > 0 &&
                      progress.weightProgress.map((weight) => (
                        <div className="ml-4" key={weight.id}>
                          <li>Date: {formatDate(weight.date)}</li>
                          <p className="ml-5">
                            <b>Weight</b>: {weight.weight} - <b>BMI</b>: {weight.bmi}
                          </p>
                        </div>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p>There aren't weight progress registers.</p>
          )}
        </div>
        {user && user.progress && user.progress.length > 0 ? (
          <div>
            <p className="text-xl font-bold italic underline">Exercise Progress</p>
            {user.progress.map((progress) => (
              <div key={progress.id}>
                <ul className="list-disc ml-5 mt-4">
                  {progress.exerciseProgress.length > 0 &&
                    progress.exerciseProgress.map((exercise) => (
                      <div className="ml-4" key={exercise.id}>
                        <b>Exercise</b>: {exercise.exercise.title} - <b>Muscle</b>: {exercise.exercise.muscle}
                        <ul>
                          {exercise.sets.length > 0 &&
                            exercise.sets.map((set, index) => (
                              <li key={index}>
                                <b>Reps</b>: {set.reps} - <b>Weight used</b>: {set.weightUsed}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>There aren't exercise progress registers.</p>
        )}
      </div>
    </div>
  )
}