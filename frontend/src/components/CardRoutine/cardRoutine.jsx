import { rubik } from '@/app/layout'
import { getOneUserbyId } from '@/services/user.services'
import React, { useEffect, useState } from 'react'
import HeartIcon from '../HeartIcon/HeartIcon'
import HeartFavIcon from '../HeartFavIcon/HeartFavIcon'

function CardRoutine({
  routine,
  handleOpenModal,
  handleFavClick,
  handleFavDeleteClick,
  refresh
}) {
  const [user, setUser] = useState('')
  const [isFav, setIsFav] = useState(false)

  const getUser = async () => {
    const res = await getOneUserbyId()
    setUser(res)
  }

  const findFavRoutine = (routine) => {
    if (user?.user?.favsRoutine) {
      const res = user.user.favsRoutine.some(
        (filter) => filter._id === routine._id
      )
      console.log(res)
      setIsFav(res)
    }
  }

  const handleRoutineForModal = (routine) => {
    return routine
  }

  const handleAddClick = () => {
    handleFavClick(routine._id)
  }

  const handleRemoveClick = () => {
    handleFavDeleteClick(routine._id)
  }

  useEffect(() => {
    findFavRoutine(routine)
  }, [user])

  useEffect(() => {
    getUser()

  }, [refresh])

  

  return (
    <>
      <div className="max-w-sm bg-white border-primary shadow-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          {isFav ? (
            <a className="cursor-pointer" onClick={handleRemoveClick}>
              <HeartIcon />{' '}
            </a>
          ) : (
            <a className="cursor-pointer" onClick={handleAddClick}>
              <HeartFavIcon />
            </a>
          )}
          <h5
            className={`${rubik.className} mb-2 text-2xl text-center tracking-tight text-gray-900 dark:text-white`}
          >
            {routine.title}
          </h5>
          <div className="my-4">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <b>Target:</b> <span>{routine.routineTarget} </span>
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <b>Type:</b> <span>{routine.styleRoutine} </span>
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <b>Days/week:</b> <span>{routine.dayPerWeek} </span>
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <b>Time:</b> <span>{routine.timeEstimate} min</span>
              </p>
            </div>
            <div className="flex justify-end items-end">
              <button
                href="routine"
                onClick={() => handleOpenModal(routine)}
                className={`${rubik.className} inline-flex items-center h-12 px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300`}
              >
                <b>Read more</b>
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardRoutine
