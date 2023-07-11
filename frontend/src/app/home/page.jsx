'use client'
import CreateRoutines from '@/components/CreateRoutines/createRoutines'
import TodayBtn from '@/components/TodayButton/todayBtn'

export default function Home() {
  return (
    <main className=" flex justify-center mt-10 m-auto md:  min-h-full min-w-full flex-col justify-around">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <CreateRoutines className="col-start-1 col-span-2" />
        <div className="bg-gray-light rounded-md p-4 md:col-start-2 col-span-4">
          <div className="grid justify-center grid-cols-4">
            <p>Routina 1</p>
            <p>Routina 2</p>
            <p> Routina 3</p>
            <p> Routina 4</p>
          </div>
        </div>
        <TodayBtn className='row-start-1 row-span-2'/>
      </div>
    </main>
  )
}
