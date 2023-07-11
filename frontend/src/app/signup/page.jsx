'use client'
import Image from "next/image";
import Gym from '../../../public/gym.jpg'
import Link from "next/link";
import { useState } from "react";


export default function Signup() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [targetWeight, setTargetWeight] = useState('')
  const [visibility, setVisibility] = useState(false)


const handleFirstname = (e) => {
  setFirstname(e.target.value)
}
const handleLastname = (e) => {
  setLastname(e.target.value);
};
const handleEmail = (e) => {
  setEmail(e.target.value)
}

const handlePassword = (e) => {
  setPassword(e.target.value);
};

const handleHeight= (e) => {
  setHeight(e.target.value);
};
const handleWeight = (e) => {
  setWeight(e.target.value);
};

const handleTargetWeight = (e) => {
  setTargetWeight(e.target.value)
}

const handleVisibility = (e) => {
  setVisibility(!visibility)
}

const handleClick = () => {

}

  return (
    <main className="flex min-h-screen justify-center items-center">
      <section className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-md">
        <div>
          <Image src={Gym} width={600} height={600} className="rounded-l-lg" />
        </div>
        <div className="h-1 p-5 ">
          <form className="flex flex-col bg-white gap-3 p-4">
            <p className="lg:text-5xl text-center ">Signup</p>
            <label for="firstname" class="text-center md:text-lg mt-2">
              First name:
            </label>
            <input
              type="text"
              id="firstname"
              className="flex self-center rounded-md w-96 "
              placeholder="John"
              required
              onChange={handleFirstname}
            ></input>
            <label for="lastname" class="text-center md:text-lg">
              Last name:
            </label>
            <input
              type="text"
              id="lastname"
              className="flex self-center rounded-md w-96 "
              placeholder="Doe"
              required
              onChange={handleLastname}
            ></input>
            <label for="email" class="text-center md:text-lg">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="flex self-center rounded-md w-96 "
              placeholder="email@canaryfit.com"
              required
              onChange={handleEmail}
            ></input>
            <label for="password" class="text-center md:text-lg">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="flex self-center rounded-md w-96 "
              placeholder="*******"
              required
              onChange={handlePassword}
            ></input>
            <div className="flex flex-row space-x-4 justify-center">
              <div className="flex flex-col ">
                <label for="height" class="text-center md:text-lg">
                  Height:
                </label>
                <input
                  type="number"
                  id="height"
                  className="flex self-center rounded-md w-40 "
                  placeholder="175"
                  required
                  onChange={handleHeight}
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="weight" class="text-center md:text-lg">
                  Weight:
                </label>
                <input
                  type="number"
                  id="weight"
                  className="flex self-center rounded-md w-40 "
                  placeholder="80"
                  required
                  onChange={handleWeight}
                ></input>
              </div>
            </div>
            <label for="weightTarget" class="text-center md:text-lg">
              Weight target:
            </label>
            <input
              type="number"
              id="weightTarget"
              className="flex self-center rounded-md w-40 "
              placeholder="73"
              required
              onChange={handleTargetWeight}
            ></input>
            <p className="md:text-lg mt-2">
              Have you got account?{" "}
              <Link href="/Login" className="md:text-green-500">
                Log in
              </Link>
            </p>

            <button
              type="button"
              class="flex justify-center self-center md:text-lg w-2/4  text-white bg-gradient-to-r mt-10 from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleClick}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
  
