import Image from 'next/image'
import React from 'react'
import CanaryFitImage from '../../../public/icon.png'

function TodayBtn() {
  return (
    <div className="flex relative flex-col justify-center items-center">
      <Image
        src={CanaryFitImage}
        width={900}
        height={400}
        className="flex items-center"
      />
      <div className="flex  absolute">
        <button
          type="button"
          class="flex shadow-2xl w-80 h-32 p-4 justify-center items-center self-center md:text-5xl w-4  text-black bg-gradient-to-r mt-10 from-primary via-terciary to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick="/Today"
        >
          Come on!
        </button>
      </div>
    </div>
  )
}

export default TodayBtn