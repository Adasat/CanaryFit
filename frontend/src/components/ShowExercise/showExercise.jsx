'use client'
import React from 'react'

function ShowExercise({ exercise, handleOpenModal }) {
  return (
    <>
      <div className="max-w-sm h-56 bg-white border-primary shadow-xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
        <h5 className="mb-2 text-xl text-center font-bold i tracking-tight text-gray-900 dark:text-white">
          {exercise.title}
        </h5>

        <div className="flex flex-row self-end">
          {exercise.gif && (
            <img src={exercise.gif} className="w-32  self-center"></img>
          )}
          <div>
            <p className="self-center">
              <i>
                <b>{exercise.muscle}</b>
              </i>
            </p>
            <button
              href="exercise"
              onClick={() => handleOpenModal(exercise)}
              className=" flex justify-end self-end items-end px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <b>Read info</b>
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

export default ShowExercise