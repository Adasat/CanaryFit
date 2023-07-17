import { gifExercises } from '@/services/exercise.services'
import { useEffect, useState } from 'react'

function CardExercise ({ exercise, onExerciseSelect }) {
  const [isSelected, setIsSelected] = useState(false)

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked
    setIsSelected(isChecked)
    onExerciseSelect(exercise._id, isChecked)
  };

  return (
    <>
      <div className='max-w-sm bg-white border-primary shadow-xl rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-4'>
        <div className='flex items-center mb-4'>
          <input id='exercise-checkbox' checked={isSelected} onChange={handleCheckboxChange} type='checkbox' value={exercise._id} className='w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-primary' />

        </div>
        <h5 className='mb-2 text-xl text-center font-bold i tracking-tight text-gray-900 dark:text-white'>
          {exercise.title}
        </h5>

        <div className='flex flex-row self-end'>
            {(exercise.gif && (
          <img
            src={exercise.gif}
            className='w-20 h-20 self-center'
          >
          </img>
        ))}
            <p className='self-center text-green-900 ml-6 '>
            <b>muscle</b>: <i>{exercise.muscle}</i>
          </p>
          </div>
      </div>
    </>
  )
}

export default CardExercise
