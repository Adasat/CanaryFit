import '../globals.css'

export default function AuthLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex justify-center bg-primary'>
        {children}
      </body>
    </html>
  )
}
