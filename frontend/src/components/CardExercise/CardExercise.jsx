import { gifExercises } from '@/services/exercise.services'
import { useEffect, useState } from 'react'

function CardExercise({ exercise }) {
  
  return (
    <>
      <div className="max-w-sm  bg-white border-primary shadow-xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
        <h5 className="mb-2 text-xl text-center font-bold i tracking-tight text-gray-900 dark:text-white">
          {exercise.title}
        </h5>
        <div className="flex flex-row self-end">
          <img
            src="https://edb-4rme8.ondigitalocean.app/image/IN6TqHOfMHwjtU"
            className="w-20 h-20 self-center"
          ></img>
          <p className="self-center ">
            <i>{exercise.muscle}</i>
          </p>
        </div>
      </div>
    </>
  )
}

export default CardExercise
