import React, { useState } from 'react'
import '../../app/globals.css'

function ModalExercise({ isVisible, onClose, exercise }) {
  const [showExercise, setshowExercise] = useState(exercise)
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  if (!isVisible) return null

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className="fixed inset-0 bg-gray-dark bg-opacity-25 backdrop-blur-sm flex justify-center p-20">
      <div className="w-4/5 flex flex-col">
        <button
          className="text-black text-3xl font-bold place-self-end"
          onClick={onClose}
        >
          X
        </button>
        <div className="bg-white p-10 flex flex-col">
          <p className="text-center text-green-900 text-3xl italic">{exercise.title}</p>
          <div className="flex flex-row">
            <img src={exercise.gif} className="w-3/6"></img>
            <div className="flex flex-col mt-10 w-3/5">
              <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-2">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-green-700 border border-b-0 border-secondary focus:ring-4 focus:ring-terciary "
                    data-accordion-target="#accordion-collapse-body-2"
                    aria-expanded={open}
                    aria-controls="accordion-collapse-body-2"
                    onClick={() => setOpen(!open)}
                  >
                    <span classname="text-green-700">
                      Exercise's description
                    </span>
                    <svg
                      data-accordion-icon
                      className="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-2"
                  className={`${open ? '' : 'hidden'}`}
                  aria-labelledby="accordion-collapse-heading-2"
                >
                  <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <ol className='list-decimal bolder  ml-7'>

                    {exercise && exercise.description.length !== 0 && exercise.description.map((step, i) => (
                    <li key={i} className='italic text-gray-800'> {step}</li>
                    ))}
                    
                    </ol>
                  </div>
                </div>
                <h2 id="accordion-collapse-heading-3">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left  text-green-700 border  border-secondary focus:ring-4 focus:ring-terciary"
                    data-accordion-target="#accordion-collapse-body-3"
                    aria-expanded={open}
                    aria-controls="accordion-collapse-body-3"
                    onClick={() => setOpen2(!open2)}
                  >
                    <span>Recommendations</span>
                    <svg
                      data-accordion-icon
                      className="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-collapse-body-3"
                  className={`${open2 ? '' : 'hidden'}`}
                  aria-labelledby="accordion-collapse-heading-3"
                >
                  <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <ol className='list-disc ml-10 text-gray-800'>

                    {exercise && exercise.recommendation.length !== 0 && exercise.recommendation.map((recom) => (
                        <li>{recom}</li>
                        ))}
                        </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ModalExercise