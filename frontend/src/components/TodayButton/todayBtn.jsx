
import Image from 'next/image'
import React from 'react'
import CanaryFitImage from '../../../public/icon.png'
import { useRouter } from 'next/navigation'

function TodayBtn() {
  const router = useRouter()


  return (
    <div className="flex relative flex-col justify-center items-center">
      <Image
        src={CanaryFitImage}
        width={1000}
        height={400}
        alt="Canary Fit Icon"
        className="flex items-center"
      />
      <div className="flex absolute self-center pt-40">
        <button
          type="button"
          className="flex shadow-4xl border-4 brightness-90 border-primary w-72 h-30 justify-center items-center self-center md:text-5xl w-4  text-black bg-secondary border-black rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:brightness-110"
          onClick={(e) => router.push('/today')}
        >
          Come on!
        </button>
      </div>
    </div>
  )
}

export default TodayBtn