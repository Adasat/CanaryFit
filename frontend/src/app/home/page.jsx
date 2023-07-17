'use client'
import CreateRoutines from '@/components/CreateRoutines/CreateRoutines'
import React, { useEffect, useState } from 'react'
import TodayBtn from '@/components/TodayButton/todayBtn'
import { getAllPublicRoutines } from '../../services/routines.services'
import { getOneUserbyEmail } from '@/services/user.services'
import CardRoutine from '@/components/CardRoutine/cardRoutine'
import ModalRoutine from '@/components/modalRoutine/modalRoutine'
import BarProgress from '@/components/BarProgress/BarProgress'
import { sora } from '../layout'

export default function Home () {
  const [routines, setRoutines] = useState([])
  const [user, setUser] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedRoutine, setSelectedRoutine] = useState(null)

  const getAllRoutines = async () => {
    const res = await getAllPublicRoutines()
    setRoutines(res)
  }

  const getUserbyEmail = async () => {
    const email = await window.localStorage.getItem('email')
    const res = await getOneUserbyEmail(email)
    setUser(res)
  }

  useEffect(() => {
    getAllRoutines()
    getUserbyEmail()
  }, [])

  const handleOpenModal = (routine) => {
    setSelectedRoutine(routine)
    setShowModal(true)
  }

  return (
    <>
      <div className='flex justify-start items-center ml-20 my-4 sm:m-auto'>
        <div className='flex items-center justify-center w-96 mt-3 border-b-primary rounded-md border-2 ml-7 mb-4'>
          <p className='text-black text-xl '>
            Welcome{'    '}
            <i>
              <b className={sora.className}>
                <span className='text-2xl '>
                  {user.firstname} {user.lastname}{' '}
                </span>
              </b>
            </i>
            {'   '}!
          </p>
        </div>
      </div>

      <div className='flex sm:flex-col md:flex-row justify-evenly ml-4'>
        {user.actualRoutine === undefined
          ? (
            <CreateRoutines className='flex flex-col' />
            )
          : (
            <TodayBtn />
            )}
        <div className='flex flex-col md:w-2/3'>
          <p className={`${sora.className} text-green-900 font-bold text-2xl`}>Public routines</p>
          <div className='bg-gray-200 rounded-md p-4 scroll-m-2 md:col-start-2 col-span-4   max-h-96 overflow-y-auto'>
            <div>
              <div className='grid justify-center sm:grid-cols-1 md:grid-cols-4 gap-2 '>
                {routines && routines.length !== 0
                  ? (
                      routines.map((routine, i) => (
                        <CardRoutine
                      key={i}
                      routine={routine}
                      handleOpenModal={handleOpenModal}

                    />
                      ))
                    )
                  : (
                    <p>"There aren't routines on our website"</p>
                    )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalRoutine
        isVisible={showModal}
        onClose={() => {
          setSelectedRoutine(null)
          setShowModal(false)
        }}
        routine={selectedRoutine}
      />
      <div className='flex flex-row items-center justify-center'>
        <div className='flex justify-center items-center sm:w-4/5 sm:h-auto md:w-1/2 md:h-2/3'>
          <BarProgress />
        </div>
      </div>
    </>
  )
}
