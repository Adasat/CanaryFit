import Image from 'next/image'
import CanaryFitImage from '../../../public/icon.png'
import { useRouter } from 'next/navigation'

function HeaderWelcome() {
  const router = useRouter()
  return (
    <div className=" bg-primary border-gray-200 ">
      <div className=" flex flex-row items-center justify-between mx-3  gap-7">
        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center gap-4">
            <Image
              src={CanaryFitImage}
              width={80}
              height={40}
              alt="Canary Fit Icon"
              className=" self-center "
            />

            <span className="self-center text-gray-900 sm:text-2xl md:text-4xl font-semibold whitespace-nowrap">
              Canary Fit
            </span>
          </div>
        </div>
        <div className="flex sm:flex-col md:flex-row justify-end items-center">
          <button
            type="button"
            className="flex justify-center sm:w-auto mt-2 md:text-lg w-1/4 text-black bg-white  border-white border-2  hover:border-secondary hover:bg-secondary hover:text-white rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-2xl"
            onClick={() => router.push('/login')}
          >
            Login
          </button>
          <button
            type="button"
            className="flex justify-center sm:w-auto mt-2 ml-4 md:text-lg w-1/4 text-black bg-terciary  border-terciary border-2 hover:bg-secondary hover:text-white hover:border-secondary rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-2xl"
            onClick={() => router.push('/signup')}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderWelcome
