export default function Header() {
  return (
    <>
      <footer className="fixed bottom-0 left-0 w-full bg-primary rounded-t-sm shadow m3 mt-auto">
        <div className='container mx-auto py-4 px-6 flex items-center justify-between'>
          <span className="text-md sm:text-center">
            © 2023{' '}
            <a href="https://github.com/Adasat" className="hover:underline">
              Adasat Bonilla
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-md font-medium">
            <li>
              <a href="" className=" mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
