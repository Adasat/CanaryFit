'use client'
import Image from 'next/image'
import Bg2 from '../../../public/bg2.jpg'
import { useState } from 'react'
import Link from 'next/link'
import { userLogin } from '@/services/auth.services'
import { useRouter } from 'next/navigation'
import { montse, montseBold, rubik } from '../layout'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visibility, setVisibility] = useState(false)
  const [alert, setAlert] = useState('')
  const router = useRouter()

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleVisibility = () => {
    setVisibility(!visibility)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await userLogin(email, password)

    if (res) {
      setAlert(true)
      setTimeout(() => {
        setAlert('')
        router.replace('/home')
      }, 2000)
    } else {
      setAlert(false)
      setTimeout(() => {
        setAlert('')
      }, 3000)
    }
  }

  return (
    <>
      <main className="flex min-h-screen  justify-center items-center text-green-800 ">
        <div className="flex sm:flex-col sm:w-4/5 md:4/5 md:flex-row border-black ">
          <div className="flex flex-col sm:h-auto md:h-auto md:w-5/6 mr-10">
            <form className="flex flex-col items-center justify-center gap-3 p-5 md:h-screen w-100">
              <p className={`${montseBold.className} sm:text-2xl md:text-5xl text-black mb-15 text-center`}>
                Login
              </p>
              <div className="mt-">
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="email"
                    className={`${montse.className} mt-7 text-md sm:text-sm tracking-wide text-gray-600`}
                  >
                    E-Mail Address: 
                  </label>
                  <div className="relative">
                    <div className="flex items-center justify-center absolute h-full w-10 text-gray-400">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      placeholder="E-Mail Address"
                      onChange={handleEmail}
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="password"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Password: 
                  </label>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <span>
                        {visibility ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6 cursor-pointer"
                            onClick={handleVisibility}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6 cursor-pointer"
                            onClick={handleVisibility}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        )}
                      </span>
                    </div>

                    <input
                      id="password"
                      type={visibility ? 'text' : 'password'}
                      name="password"
                      className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      placeholder="Password"
                      onChange={handlePassword}
                    />
                  </div>
                </div>
              </div>
              <p className="md:text-lg mt-2">
                Don't have an account?
                <Link href="/signup" className="text-secondary">
                  {'    '}Sign up
                </Link>
              </p>
              <div className="absolute top-0 left-0">
                {' '}
                {alert === true ? (
                  <div
                    className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-200 dark:bg-gray-800 dark:text-green-400"
                    role="alert"
                  >
                    <span className="font-medium">Logged done!</span> You will be
                    redirectioned to Home.
                  </div>
                ) : alert === false ? (
                  <div
                    className="p-4 mb-4 text-sm text-red-700 rounded-lg bg-pink-100 dark:bg-gray-800 dark:text-blue-400"
                    role="alert"
                  >
                    <span class="font-medium">Something went wrong!</span>{' '}
                    Please, check the fields entered
                  </div>
                ) : null}
              </div>

              <button
                className={`${rubik.className} flex justify-center self-center md:text-lg w-1/4 mt-3  text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="sm:hidden md:flex justify-end items-start">
          <Image
            src={Bg2}
            width={3000}
            alt="Login photo"
            className="sm:h-56 sm:w-full md:h-full "
          />
        </div>
      </main>
    </>
  )
}
