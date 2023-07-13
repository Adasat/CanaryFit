'use client'

import CardExercise from '@/components/CardExercise/CardExercise'
import RoutineForm from '@/components/RoutineForm/RoutineForm'
import { getAllExercises } from '@/services/exercise.services'
import { useEffect, useState } from 'react'
import ButtonCustom from '@/components/Button/ButtonCustom'

export default function Create() {
  const [formData, setFormData] = useState({
    title: '',
    target: '',
    weightTarget: '',
    trainingStyle: '',
    daysperWeek: '',
    gymTime: '',
    isPublic: true
  })
  const [allExercises, setAllExercises] = useState([])

  const getExercises = async () => {
    const res = await getAllExercises()
    setAllExercises(res)
  }

  useEffect(() => {
    getExercises()
  }, [])


  const handleFieldChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }))
  }


  return (
    <>
      <div className='flex flex-row justify-end p-4 items-center gap-3'>
        <p className='italic text-lg underline'>Don't push button before to choose exercises</p>
        <button className='bg-secondary text-xl w-32 h-14 rounded-xl hover:bg-terciary'>Create</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 p-4 gap-5 min-h-screen pb-24">
        <div className="md:col-span-2 bg-grey max-h-72">
          <RoutineForm formData={formData} onFormChange={handleFieldChange} />
        </div>
        <div className="md:col-start-3 col-span-4 p-7">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">

            {
            allExercises &&
              allExercises.length !== 0 &&
              allExercises.map((exercise) => (
                <CardExercise key={exercise._id} exercise={exercise} />
              ))}
          </div>
        </div>
        <div>
          <button>Crear</button>
        </div>
      </div>
    </>
  )
}
