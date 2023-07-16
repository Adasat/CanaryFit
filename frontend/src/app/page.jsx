'use client'
import Image from 'next/image'
import Logo from '../../public/bgCarrousel2.jpeg'

export default function App() {
  return (
    <>
      
        <div className="flex h-screen justify-center items-center bg-[url('/bgCarrousel2.jpeg')] bg-cover bg-center">
          <div className="bg-gray-300 opacity-95 rounded-lg">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <h1 className="mb-4 sm:text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                The time is now!
              </h1>
              <p className="mb-8 text-lg text-green-700 lg:text-2xl sm:px-16 lg:px-48">
                "Obstacles don’t have to stop you. If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it."
              </p>
              <p className='text-center md:text-xl mb-8 italic font-bold text-green-900'>Michael Jordan</p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a
                  href="/signup"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary opacity-100 hover:bg-secondary focus:ring-4 focus:ring-blue-300"
                >
                  Signup now
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
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
