import React from 'react'

function MiniCardRoutine({routine}) {
  return (
    <div className="bg-white my-4 h-2/6 w-2/3 rounded-lg shadow-md p-3">
      <div>
        <p className="sm:text-lg md:text-xl font-bold">{routine.title}</p>
      </div>
      <div>
        <p className="md:text-lg italic">Details:</p>

        <div className="flex flex-row justify-between">
          <div>
            <p className="ml-4">
              <b>Style</b>: {routine.styleRoutine}
            </p>
            <p className="ml-4">
              <b>Target</b>: {routine.routineTarget}
            </p>
          </div>
          <div>
            <p className="mr-20">
              <b>Days per week:</b>: {routine.dayPerWeek}
            </p>
            <p className="mr-20">
              <b>Time:</b>: {routine.timeEstimate} minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniCardRoutine