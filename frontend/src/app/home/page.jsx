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

export default function Home() {
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
      {' '}
      <div className="inline-block items-start justify-start rounded-md border-2 ml-7 ">
        <div className="bg-secondary p-2 rounded-xl mt-2">
          <p className="text-black text-xl mt-4 mb-5">
            Welcome{'    '}
            <i>
              <b className={sora.className}>
                <span className="text-2xl ">
                  {user.firstname} {user.lastname}{' '}
                </span>
              </b>
            </i>
            {'   '}!
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col md:w-1/3'>
          <div>
            {user.actualRoutine === undefined ? (
              <div className='p-43'>
                <CreateRoutines />
              </div>
              ) : ( <TodayBtn />)}
          </div>
          <div className="flex justify-center items-center md:h-1/3 p-4">
            <BarProgress />
          </div>
        </div>
        <div className="flex flex-col md:w-2/3">
          <p
            className={`${sora.className} text-green-900 font-bold text-2xl ml-2`}
          >
            Public routines
          </p>
          <div className="bg-gray-200 rounded-md p-4 scroll-m-2 overflow-y-auto">
            <div>
              <div className="grid justify-center sm:grid-cols-1 md:grid-cols-3 gap-2 ">
                {routines && routines.length !== 0 ? (
                  routines.map((routine, i) => (
                    <CardRoutine
                      key={i}
                      routine={routine}
                      handleOpenModal={handleOpenModal}
                    />
                  ))
                ) : (
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
    </>
  )
}
