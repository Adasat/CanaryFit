import { gifExercises } from '@/services/exercise.services'
import { useEffect, useState } from 'react'

function CardExercise({ exercise, onExerciseSelect}) {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsSelected(isChecked);
    onExerciseSelect(exercise._id, isChecked);
  };
  
  return (
    <>
      <div className="max-w-sm  bg-white border-primary shadow-xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
        <div class="flex items-center mb-4">
        <input id="exercise-checkbox"   checked={isSelected} onChange={handleCheckboxChange} type="checkbox" value={exercise._id} class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"/>
        
      </div>
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
