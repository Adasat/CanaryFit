'use client'

import CreateRoutines from '@/components/CreateRoutines/CreateRoutines'
import { deleteAFavRoutine, getCurrentRoutine } from '@/services/routines.services'
import { getOneUserbyEmail, getOneUserbyId } from '@/services/user.services'
import { useEffect, useState } from 'react'
import { formatDate } from '@/validations/validations'
import MiniCardRoutine from '@/components/MiniCardRoutine/MiniCardRoutine'
import { rubik } from '../layout'

export default function myRoutines() {
  const [user, setUser] = useState('')
  const [currentRoutine, setCurrentRoutine] = useState('')
  const [alert, setAlert] = useState('')
  const [refresh, setRefresh] = useState(false)

  const getUserbyEmail = async () => {
    const routine = await getCurrentRoutine()
    const res = await getOneUserbyId()
    setUser(res)
    setCurrentRoutine(routine)
  }

  const handleClick = async (id) => {
    if(id !== null) {
      setAlert(true)
      await deleteAFavRoutine(id)
      setTimeout(() => {
        setAlert('')
        setRefresh(!refresh)
      }, 2000)
    } else {
      setAlert(false)
      setTimeout(() => {
        setAlert('')
      }, 2000)

    }
    
  }

  useEffect(() => {
    getUserbyEmail()
  }, [refresh])

  return (
    <div className="flex sm:flex-col md:flex-row justify-between text-green-900 mt-10">
      <div className="flex flex-col gap-5 ml-8">
        <CreateRoutines />
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
          {currentRoutine ? (
            <h5 className={`${rubik.className} mb-2 text-2xl font-bold tracking-tight text-center text-gray-800`}>
              {currentRoutine.title}
            </h5>
          ) : (
            <h5 className=" text-2xl font-bold tracking-tight text-gray-800">
              Not found current routine
            </h5>
          )}
          {currentRoutine ? (
            <div>
              <p className="my-3 font-normal text-gray-700">
                <b>Target:</b> {currentRoutine.routineTarget}
              </p>
              <p className="mb-3 font-normal text-gray-700">
                <b>Type:</b> {currentRoutine.styleRoutine}
              </p>
              <p className="mb-3 font-normal text-gray-700">
                <b>Days per week:</b> {currentRoutine.dayPerWeek}
              </p>
              <p className="mb-3 font-normal text-gray-700">
                <b>Training's time:</b> {currentRoutine.timeEstimate}
              </p>
              <p className="mb-3 font-normal text-gray-700">
                <b>Weight Target: </b>
                {currentRoutine.weightTarget} kg
              </p>
            </div>
          ) : (
            <p className="mb-3 font-normal text-gray-700">
              Is good moment for creating <a href={'/create'}> new routine</a>
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col w-4/6 mr-9 max-h-88 overflow-y-auto">
        <p className='font-bold md:text-xl mb-3'>
          Favourite Routines
        </p>
        {user && user.user && user.user.favsRoutine.lenght !== 0 ? (
          user.user.favsRoutine.map((fav) => (
            <MiniCardRoutine key={fav.id} routine={fav} handleClick={handleClick} />
          ))
        ) : (
          <div>There aren't favourite routine</div>
        )}
      </div>

      <div className="absolute top-0 left-0">
                {' '}
                {alert === true ? (
                  <div
                    class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-200 dark:bg-gray-800 dark:text-green-400"
                    role="alert"
                  >
                    <span class="font-medium">Remove routine successfully!</span>
                  </div>
                ) : alert === false ? (
                  <div
                    class="p-4 mb-4 text-sm text-red-700 rounded-lg bg-pink-100 dark:bg-gray-800 dark:text-blue-400"
                    role="alert"
                  >
                    <span class="font-medium">Something went wrong!</span>{' '}
                    Please, try again.
                  </div>
                ) : null}
              </div>
    </div>
  )
}
