'use client'
import ImageSection from '../../../components/imageSection/imageSection'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { signupUser  } from '../../../services/auth.services'
import { getAllUsers } from '../../../services/user.services'
import { redirect } from 'next/navigation'
import SignupForm from '@/components/SignupForm/signupForm'

export default function Signup() {
  const [users, setUsers] = useState([])
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [targetWeight, setTargetWeight] = useState('')
  const router = useRouter()

  const getUsers = async () => {
    const res = await getAllUsers()
    setUsers(res)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleFirstname = (e) => {
    setFirstname(e.target.value)
  }
  const handleLastname = (e) => {
    setLastname(e.target.value)
  }
  const handleEmail = (e) => {
    emailValidator(e.target.value) && setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    passValidator(e.target.value) && setPassword(e.target.value)
  }

  const handleHeight = (e) => {
    setHeight(e.target.value)
  }
  const handleWeight = (e) => {
    setWeight(e.target.value)
  }

  const handleTargetWeight = (e) => {
    setTargetWeight(e.target.value)
  }

  
  const passValidator = (password) => {
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{7,}$/
    return regex.test(password)
  }
  const emailValidator = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleClick = () => {
    const userExists = users.some((usuario) => usuario.email === email)
    if (userExists) {
      alert('User exists')
    } else {
     signupUser(firstname, lastname, email, password, height, weight,targetWeight)
     router.replace('/login')
    }
  }

  return (
       <main className="flex min-h-screen justify-center items-center">
      <section className="grid grid-cols-1 md:grid-cols-2 bg-white text-green-900 rounded-md">
        <ImageSection />
        <div className="h-1 p-5 ">
          <SignupForm
            handleFirstname={handleFirstname}
            handleLastname={handleLastname}
            handleEmail={handleEmail}
            handlePassword={handlePassword}
            handleHeight={handleHeight}
            handleWeight={handleWeight}
            handleTargetWeight={handleTargetWeight}
            handleClick={handleClick}
          />
        </div>
      </section>
    </main>
  )
  }
