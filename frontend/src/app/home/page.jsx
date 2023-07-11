'use client'
import CreateRoutines from '@/components/CreateRoutines/createRoutines'
import React, { useContext, useEffect, useState } from 'react'
import TodayBtn from '@/components/TodayButton/todayBtn'
import { userContext } from '@/context/context'
import { getAllPublicRoutines } from '../services/routines.services'


export default function Home() {
    const [routines, setRoutines] = useState([])
    const user = useContext(userContext) || {}
    console.log(user)

    const getAllRoutines = async () => {
      const res = await getAllPublicRoutines()
      setRoutines(res)
    }

    useEffect(() => {
      getAllRoutines()
    }, [])


  
 
  

 return (
    <>
      <main className="flex justify-center mt-10 m-auto md:min-h-full md:min-w-full flex-col justify-around">
        <p className="text-black">Hola {user.firstname}</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          {user ? (
            <CreateRoutines className="col-start-1 col-span-2" />
          ) : (
            <TodayBtn className="row-start-1 row-span-2" />
          )}
          <div className="bg-gray-light rounded-md p-4 md:col-start-2 col-span-4">
            <div className="grid justify-center grid-cols-4">
              {routines.length !== 0 && routines ? (
                routines.map((routine) => (
                  <div key={routine._id}>
                    <h3>{routine.title}</h3>
                    <p>{routine.routineTarget}</p>
                    <p>{routine.owner}</p>
                    <p>exercises:{ routine.exercises.map((exercise)=> (
                      <li key={exercise._id}>{exercise.title}</li>
                    ) )}</p>
                  </div>
                ))
              ) : (
                <p>"There aren't routines on our website"</p> // Faltaban comillas de cierre en el mensaje
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}