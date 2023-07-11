import React from 'react'

function createRoutines() {
  return (
    <div className="box-border border-width-8 border-black shadow-xl flex bg-primary p-4 rounded-lg">
      <p className='text-lg'>Do you want to create a new routine?</p>
      <button
        type="button"
        class="flex justify-center self-center md:text-lg w-2/4  text-black bg-gradient-to-r mt-10 from-yellow-400 via-terciary to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick="/createRoutines"
      >
        Create Routine
      </button>
    </div>
  )
}

export default createRoutines