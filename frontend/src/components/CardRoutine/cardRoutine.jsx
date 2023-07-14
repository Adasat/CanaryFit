import { getOneUserbyId } from '@/services/user.services'
import React, { useEffect, useState } from 'react'

function CardRoutine({ routine, handleOpenModal }) {
  const handleRoutineForModal = (routine) => {
    return routine 
  }
  
  return (
    <>
      <div className="max-w-sm bg-white border-primary shadow-xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <h5 className="mb-2 text-2xl text-center font-bold i tracking-tight text-gray-900 dark:text-white">
            {routine.title}
          </h5>
          <div className="my-4">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <b>Target:</b> <span>{routine.routineTarget} </span>
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <b>Type:</b> <span>{routine.styleRoutine} </span>
            </p>
            
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <b>Days/week:</b> <span>{routine.dayPerWeek} </span>
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <b>Time:</b> <span>{routine.timeEstimate} min</span>
              </p>
            </div>

            <button
              href="routine"
              onClick={() => handleOpenModal(routine)}
              className="inline-flex items-center h-12 px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <b>Read more</b>
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardRoutine