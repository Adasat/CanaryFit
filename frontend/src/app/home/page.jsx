'use client'
import CreateRoutines from '@/components/CreateRoutines/createRoutines'
import React, { useEffect, useState } from 'react'
import TodayBtn from '@/components/TodayButton/todayBtn'
import { getAllPublicRoutines } from '../../services/routines.services'
import { getOneUserbyEmail } from '@/services/user.services'
import CardRoutine from '@/components/CardRoutine/cardRoutine'
import ModalRoutine from '@/components/modalRoutine/modalRoutine'


export default function Home() {
    const [routines, setRoutines] = useState([])
    const [user, setUser] = useState('')
    const [showModal, setShowModal] = useState(false)
    

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

    const handleOpenModal = () => {
      setShowModal(true)
    }
    

  
 
  

 return (
   <>
     <div className="flex justify-start items-center ml-20 my-4">
       <div className="flex items-center justify-center w-96 h-20 rounded-2xl border-4 border-primary ">
         <p className="text-black text-2xl ">
           Welcome{'    '}
           <i>
             <b>
               <span className="text-3xl">
                 {user.firstname} {user.lastname}{' '}
               </span>
             </b>
           </i>
           {'   '}!
         </p>
       </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
       {user.actualRoutine === undefined ? (
         <CreateRoutines className="col-start-1 col-span-2" />
       ) : (
         <TodayBtn className="row-start-1 row-span-2" />
       )}
       <div className="bg-gray-200 rounded-md p-4 scroll-m-2 md:col-start-2 col-span-4 ">
         <div className="grid justify-center md:grid-cols-4 gap-2">
           {routines.length !== 0 ? (
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
     <ModalRoutine isVisible={showModal} onClose={()=>setShowModal(false)}/>
   </>
 )
}