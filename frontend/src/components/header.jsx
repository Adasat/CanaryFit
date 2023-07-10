import Image from 'next/image';
import CanaryFitImage from '../../public/icon.png'


export default function Header() {
  return (
    <nav class="bg-primary border-gray-200 dark:bg-gray-900">
      <div class=" flex flex-row items-center justify-around mx-3 p-4">
        <div className="flex flex-wrap md:space-x-4">
          <Image
            src={CanaryFitImage}
            width={60}
            height={20}
            className="flex items-center"
          />

          <span class="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
            Canary Fit
          </span>
        </div>

        <div class="flex md:order-2">
          <button
            type="button"
            class="text-white bg-error hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log out
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-large p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-pr md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 lg:text-2xl hover:text-white"
                aria-current="page"
              >
                Today
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 lg:text-2xl hover:text-white"
              >
                My routines
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 lg:text-2xl hover:text-white"
              >
                My profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
