import { getOneRoutineById } from '@/services/routines.services'
import React, { useEffect, useState } from 'react'
import HeartIcon from '../HeartIcon/HeartIcon'
import { getOneUserbyEmail } from '@/services/user.services'

function ModalRoutine({ isVisible, onClose, routine }) {
  const [showRoutine, setShowRoutine] = useState(routine)
    if (!isVisible) return null

  /*       const email = window.localStorage.getItem('email')
    console.log(email)
const getUser = async (email) => {
      const res = getOneUserbyEmail(email)
      setUser(res)
    }

  useEffect(() => {
    getUser(email)
  }, [])
  */

  return (
    <div className="fixed inset-0 bg-gray-dark bg-opacity-25 backdrop-blur-sm flex justify-center p-20">
      <div className="w-2/5 flex flex-col">
        <button
          className="text-black text-3xl font-bold place-self-end"
          onClick={onClose}
        >
          X
        </button>
        <div className="bg-white p-10">
          <HeartIcon/>
          <h2 className="text-black text-4xl text-center italic mb-4">
            {routine.title}{' '}
          </h2>
          <div className="flex flex-row justify-between p-2">
            <div className="flex flex-col gap-3 ml-6">
              <p className="text-black">
                <b>Target:</b> <span className='ml-2 italic'>{routine.routineTarget}</span>
              </p>
              <p className="text-black">
                <b>Style:</b> <span className='ml-2 italic'>{routine.styleRoutine}</span>{' '}
              </p>
              {routine && routine.owner && (
              <p className="text-black">
                <b>Owner:</b>{' '}
                <span className='ml-2 italic'>
                  {routine.owner.firstname}{' '}
                  {routine.owner.lastname}
                </span>
              </p>
              )}
              <p className="text-black">
                <b>Days per week:</b> <span className='ml-2 italic'>{routine.dayPerWeek} days</span>
              </p>
              <p className="text-black">
                <b>Time:</b> <span className='ml-2 italic'>{routine.timeEstimate} minutes</span>
              </p>
            </div>
            <div className="flex flex-col mr-10 w-40">
              <ol className="text-black list-disc mb-8">
                <b>Exercises:</b>
                {routine &&
                routine.exercises &&
                routine.exercises.length !== 0 ? (
                  routine.exercises.map((exercise) => (
                    <li key={exercise._id} className='italic ml-8'>
                      <span>
                        {exercise.title}
                        </span>
                        </li>
                  ))
                ) : (
                  <p>There are no exercises in this routine</p>
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalRoutine
