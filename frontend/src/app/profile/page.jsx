'use client'
import BarProgress from '@/components/BarProgress/BarProgress'
import { addNewWeightRegister } from '@/services/progress.services'
import { getOneUserbyId } from '@/services/user.services'
import { formatDate } from '@/validations/validations'
import React, { useEffect, useState } from 'react'

function Profile() {
  const [user, setUser] = useState()
  const [lastWeight, setLastWeight] = useState([])
  const [newWeight, setNewWeight] = useState('')
  const [newBmi, setNewBmi] = useState([])
  const [alert, setAlert] = useState('')

  const getUser = async () => {
    const res = await getOneUserbyId()
    setUser(res)
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    if (user && user.progress) {
      const weightProgress = user.progress.map((entry) => entry.weightProgress)

      const data = weightProgress.flatMap((entry) =>
        entry.map((item) => item.weight)
      )
      const dataBMI = weightProgress.flatMap((entry) =>
        entry.map((item) => item.bmi)
      )
      setLastWeight(data)
      setNewBmi(dataBMI)
    }
  }, [user])

  const handleWeight = (e) => {
    setNewWeight(e.target.value)
  }
  console.log(newBmi)

  const handleSubmit = async () => {
    if (newWeight < 300 && newWeight > 40) {
      setAlert(true)
      setTimeout(() => {
        addNewWeightRegister(newWeight)
        setAlert('')
      }, 3000)
    } else {
      setAlert(false)
      setTimeout(() => {
        setAlert('')
      }, 3000)
    }
  }

  return (
    <div className="flex flex-col text-green-900">
      <div className="absolute top-0 left-0">
        {' '}
        {alert === true ? (
          <div
            class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-200"
            role="alert"
          >
            <span class="font-medium">Weight register done!</span>
          </div>
        ) : alert === false ? (
          <div
            class="p-4 mb-4 text-sm text-red-700 rounded-lg bg-pink-100 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <span class="font-medium">Something went wrong!</span> Weight
            introduced is wrong! The weight must be between 40 and 300 kg
          </div>
        ) : null}
      </div>
      <p className="flex items-start ml-10 mt-4 text-green-900 font-bold sm:text-2xl md:text-4xl">
        Profile
      </p>

      <div className="flex sm:flex-col sm:p-8 sm:justify-center md:justify-start md:flex-row md:ml-8">
        {user !== undefined && (
          <div className="flex flex-col  sm:w-full sm:mr-10 md:w-1/3 bg-terciary p-5 rounded-xl shadow-2xl">
            <p className='sm:text-xl md:text-3xl font-bold'>
              {user.user.firstname} {user.user.lastname}
            </p>

            <p className='sm:text-lg md:text-xl'><b>Email</b>: {user.user.email}</p>
            <p className='sm:text-lg md:text-xl'><b>Weight</b>:{' '}
              {lastWeight.length !== 0
                ? lastWeight[lastWeight.length - 1]
                : user.user.weight}{' '}
              kg
            </p>
            <p className='sm:text-lg md:text-xl'><b>Height</b>: {' '}{user.user.height} cm</p>
            <p className='sm:text-lg md:text-xl'><b>Current BMI</b>: {' '}{newBmi.length !== 0
                ? newBmi[newBmi.length - 1]
                : null}{' '}</p>
            <div className="flex self-end justify-center items-center gap-4 mt-4">
              <label htmlFor="weight" className="text-center italic md:text-lg">
                New weight register:
              </label>
              <input
                type="number"
                id="weight"
                className="flex self-center rounded-md w-40"
                placeholder="80"
                required
                onChange={handleWeight}
              />
              <button
                className="flex justify-center md:text-lg w-auto mt-3  text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-col md:w-2/3  text-green-800">
          <p className="text-3xl font-bold text-green-800 mb-4">Register</p>
          <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-between bg-gray-100 shadow-lg rounded-lg p-4">
            <div className="flex flex-col justify-start md:p-3 sm:mt-12 max-h-64 overflow-y-auto md:mt-1 sm:w-full md:w-2/5">
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <p className="text-xl font-bold italic underline">
                    Weight Progress
                  </p>
                  <div className="flex flex-col  ">
                    {user && user.progress && user.progress.length > 0 ? (
                      <ul className="list-disc ml-5 mt-4">
                        {user.progress.map((progress) =>
                          progress.weightProgress.map((weight) => (
                            <div className="ml-4" key={weight.id}>
                              <li>Date: {formatDate(weight.date)}</li>
                              <p className="ml-5">
                                <b>Weight</b>: {weight.weight} - <b>BMI</b>:{' '}
                                {weight.bmi}
                              </p>
                            </div>
                          ))
                        )}
                      </ul>
                    ) : (
                      <p>There aren't weight progress registers.</p>
                    )}
                  </div>
                  <div className="flex flex-col"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start md:p-3 sm:mt-12 max-h-64 overflow-y-auto md:mt-1 sm:w-full md:w-2/5">
              <div className="flex flex-col ">
                <p className="text-xl font-bold italic underline">
                  Exercise Progress
                </p>
                <div className="">
                  {user && user.progress && user.progress.length > 0 ? (
                    <ul className="list-disc ml-5 mt-4">
                      {user.progress.map((progress) =>
                        progress.exerciseProgress.map((exercise) => (
                          <div className="ml-4" key={exercise.id}>
                            <li>Date: {formatDate(exercise.date)}</li>
                            <b className="ml-5">Exercise</b>:{' '}
                            {exercise.exercise.title} - <b>Muscle</b>:{' '}
                            {exercise.exercise.muscle}
                            <ul>
                              {exercise.sets.map((set, index) => (
                                <li key={index} className="ml-8">
                                  <b>Reps</b>: {set.reps} - <b>Weight used</b>:{' '}
                                  {set.weightUsed}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      )}
                    </ul>
                  ) : (
                    <p>There aren't exercise progress registers.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className="flex justify-center items-center sm:w-4/5 sm:h-auto md:w-1/2 md:h-2/3">
            <BarProgress />
          </div>
    </div>
  )
}

export default Profile
