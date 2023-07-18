
import Image from 'next/image'
import React from 'react'
import CanaryFitImage from '../../../public/icon.png'
import Pollo from '../../../public/pollo.png'
import { useRouter } from 'next/navigation'
import { rubik, sora } from '@/app/layout'

function TodayBtn() {
  const router = useRouter()


  return (
    <div className="flex relative flex-col justify-start items-center">
      <Image
        src={Pollo}
        width={800}
        height={400}
        alt="Canary Fit Icon"
        className="flex items-center sm:w-2/4 md:w-3/4"
      />
      <div className="flex absolute self-center md:pt-72">
        <button
          type="button"
          className={`${rubik.className} flex shadow-4xl border-4 brightness-90 border-secondary w-72 h-30 justify-center items-center self-center md:text-5xl w-4 animate-bounce text-black bg-yellow-200 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:brightness-110`}
          onClick={(e) => router.push('/today')}
          
        >
          Come on!
        </button>
      </div>
    </div>
  )
}

export default TodayBtn