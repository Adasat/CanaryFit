export default function Header() {
  return (
    <>
      <footer className="fixed bottom-0  w-full bg-primary rounded-lg shadow m3 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-md sm:text-center">
            © 2023{' '}
            <a href="https://github.com/Adasat" className="hover:underline">
              Adasat Bonilla
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-md font-medium">
            <li>
              <a href="/about" className=" mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
