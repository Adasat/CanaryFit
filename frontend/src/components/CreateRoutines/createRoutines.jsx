import Link from 'next/link'
import React from 'react'
import ModalRoutine from '../modalRoutine/modalRoutine'

function createRoutines() {
  return (
    <>
      <div className="box-border border-width-8 border-black shadow-xl flex flex-col bg-terciary p-4 rounded-lg">
        <p className="text-lg">Do you want to create a new routine?</p>
        <div className="flex flex-row mt-4 justify-end">
          <b>
            <span className="text-xl ">Create Routine</span>
          </b>
          <Link href={'/create'}>
            <svg
              className="w-8 h-8 ml-4 text-gray-800 dark:text-white cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
              >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
            </svg>
          </Link>
        </div>
      </div>
  </>
  )
}

export default createRoutines