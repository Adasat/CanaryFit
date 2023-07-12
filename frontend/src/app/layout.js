import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className="bg-gray-200">
          <Header />
          {children}
          <Footer className="relative min-h-0" />
        </body>
      </html>
    </>
  )
}
