'use client'
import BarProgress from '@/components/BarProgress/BarProgress'
import { addNewWeightRegister } from '@/services/progress.services'
import { getOneUserbyId } from '@/services/user.services'
import { formatDate } from '@/validations/validations'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { sora } from '../layout'

function Profile() {
  const [user, setUser] = useState()
  const [lastWeight, setLastWeight] = useState([])
  const [newWeight, setNewWeight] = useState('')
  const [newBmi, setNewBmi] = useState([])
  const [alert, setAlert] = useState('')
  const [refresh, setRefresh] = useState(false)
  const inputWeight = useRef()

  const router = useRouter()

  const getUser = async () => {
    const res = await getOneUserbyId()
    setUser(res)
  }

  useEffect(() => {
    getUser()
  }, [refresh])

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
  }, [user, refresh])

  const handleWeight = (e) => {
    setNewWeight(e.target.value)
  }

  const handleSubmit = async () => {
    if (newWeight < 300 && newWeight > 40) {
      setAlert(true)

      await addNewWeightRegister(newWeight)
      setTimeout(() => {
        setAlert('')
      }, 3000)
      setRefresh(!refresh)
      inputWeight.current.value = ''
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
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-200"
            role="alert"
          >
            <span class="font-medium">Weight register done!</span>
          </div>
        ) : alert === false ? (
          <div
            className="p-4 mb-4 text-sm text-red-700 rounded-lg bg-pink-100 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <span class="font-medium">Something went wrong!</span> Weight
            introduced is wrong! The weight must be between 40 and 300 kg
          </div>
        ) : null}
      </div>

      <div className="flex flex-col">
        <div className="flex sm:flex-col md:flex-row md:justify-around gap-10 p-7">
          <div className="flex flex-col">
            <p className="flex items-start text-green-900 font-bold sm:text-xl md:text-3xl mt-5">
              Profile
            </p>
            {user !== undefined && (
              <div className="flex flex-col  sm:mr-10  bg-terciary p-5 rounded-xl shadow-2xl  max-h-72">
                <p className={`${sora.className} sm:text-xl md:text-3xl font-bold mb-2`}>
                  {user.user.firstname} {user.user.lastname}
                </p>

                <p className="sm:text-lg md:text-xl">
                  <b>Email</b>: {user.user.email}
                </p>
                <p className="sm:text-lg md:text-xl">
                  <b>Weight</b>:{' '}
                  {lastWeight.length !== 0
                    ? lastWeight[lastWeight.length - 1]
                    : user.user.weight}{' '}
                  kg
                </p>
                <p className="sm:text-lg md:text-xl">
                  <b>Height</b>: {user.user.height} cm
                </p>
                <p className="sm:text-lg md:text-xl">
                  <b>Current BMI</b>:{' '}
                  {newBmi.length !== 0 ? newBmi[newBmi.length - 1] : null}{' '}
                </p>
                <div className="flex self-end justify-center items-center gap-4 mt-4">
                  <label
                    htmlFor="weight"
                    className="text-center italic md:text-lg"
                  >
                    New weight register:
                  </label>
                  <input
                    type="number"
                    id="weight"
                    className="flex self-center rounded-md w-40"
                    placeholder="ex: 80"
                    ref={inputWeight}
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
          </div>
          <div className="flex flex-col md:w-1/3">
            <p className="flex items-start text-green-900 font-bold sm:text-xl md:text-2xl mt-5">
              Weight registers
            </p>
            <div className="flex flex-col bg-gray-50 sm:mr-10 p-5 rounded-xl shadow-2xl max-h-72 overflow-y-auto">
              {user && user.progress && user.progress.length > 0 ? (
                <ul className="list-disc ml-5 mt-1">
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
          </div>
          <div className="flex flex-col md:w-1/3 ">
            <p className="flex items-start  text-green-900 font-bold sm:text-xl md:text-2xl mt-5">
              Exercise regiters
            </p>
            {user && user.progress && user.progress.length > 0 ? (
              <div className="flex flex-col bg-gray-50 sm:mr-10 p-5 rounded-xl shadow-2xl max-h-72 overflow-y-auto">
                <ul className="list-disc ml-5 mt-1">
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
              </div>
            ) : (
              <p>There aren't exercise progress registers.</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:w-full sm:w-4/5 sm:h-auto md:w-1/2 md:h-2/3">
        <BarProgress />
      </div>
    </div>
  )
}

export default Profile
