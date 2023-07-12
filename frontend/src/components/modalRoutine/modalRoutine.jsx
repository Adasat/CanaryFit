import React from 'react'

function ModalRoutine({isVisible, onClose}) {
    if(!isVisible) return null
  return (
    <div className="fixed inset-0 bg-gray-dark bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-black text-3xl font-bold place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2">
          <h2>Title: </h2>
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <p>Target: </p>
              <p>Style: </p>
              <p>Time: </p>
              <p>Days: </p>
            </div>
            <div className='flex flex-col'>
                <or>
                    exercises
                </or>
                

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalRoutine