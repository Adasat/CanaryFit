'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { signupUser  } from '../../services/auth.services'
import { getAllUsers } from '../../services/user.services'
import SignupForm from '@/components/SignupForm/signupForm'
import Gym from '../../../public/gym.jpg';
import Image from 'next/image'

export default function Signup() {
  const [users, setUsers] = useState([])
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [targetWeight, setTargetWeight] = useState('')
  const [alert, setAlert] = useState('')

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

  const searchUser = (param) => {
    if (param.length !== 0) {
      const userExists = param.find((usuario) => usuario.email === email);
      if(userExists === undefined){
        return false
      }else{
        console.log(userExists)
        return userExists;
      }
      
    } else {
      return false;
    }
  };

  const handleClick = () => {
    if (searchUser(users) !== false) {
      setAlert(false);
      setTimeout(() => {
        setAlert('');
      }, 3000);
    } else if (
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      weight === '' ||
      password === '' ||
      height === ''
    ) {
      setAlert(false);
      setTimeout(() => {
        setAlert('');
      }, 3000);
    } else {
      signupUser(firstname, lastname, email, password, height, weight, targetWeight);
      setAlert(true);
      setTimeout(() => {
        setAlert('');
        router.replace('/login');
      }, 2000);
    }
  };


  return (
    <>

       <main className="flex min-h-screen sm:items-center sm:justify-center md:justify-around items-center text-green-800 ">
         
         <section className="flex sm:flex-col sm:w-4/5 md:4/5 md:flex-row border-black ">
        <div className="flex flex-col sm:h-auto md:h-auto md:w-5/6 mr-10">
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
                    <span className="font-medium">Something went wrong!</span>{' '}
                    Please, check the fields entered
                  </div>
                ) : null}
              </div>
       <div className='sm:hidden md:flex justify-end items-start'>
      <Image src={Gym} width={3000} alt='Gym' className="sm:h-56 sm:w-full md:h-full md-" />
    </div>
    
    </main>
  </>
  )
  }
