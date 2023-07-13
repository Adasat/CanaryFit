'use client'

import RoutineForm from '@/components/RoutineForm/RoutineForm'
import { useState } from 'react'

export default function Create() {
  const [formData, setFormData] = useState({
    title: '',
    target: '',
    weightTarget: '',
    trainingStyle: '',
    daysperWeek: '',
    gymTime: '',
    isPublic: true,
  })

  const handleFieldChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }))
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-5 p-4 gap-5">
      <div className="md:col-span-2 bg-grey rounded-lg border-black border-2">
        <RoutineForm formData={formData} onFormChange={handleFieldChange} />
      </div>
      <div className="md:col-start-3 col-span-4 bg-terciary">
        <div>{formData.title}</div>
        <div>{formData.trainingStyle}</div>
        <div>{formData.weightTarget}</div>
        <div>{formData.daysperWeek}</div>
        <div>{formData.target}</div>
        <div>{formData.gymTime}</div>
        <div>{formData.isPublic}</div>
      </div>
    </div>
  )
}
