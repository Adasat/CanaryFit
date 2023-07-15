'use client'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'
import './globals.css'
import { Inter } from 'next/font/google'
import {usePathname} from 'next/navigation'
import HeaderWelcome from '@/components/HeaderWelcome/HeaderWelcome'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname()
  
    {if (pathname === '/login' || pathname === '/signup') return (
     <>
      <html lang="en">
        <body className="bg-gray-200">
          {children}
        </body>
      </html>
    </>
    )
    else if (pathname === '/') return (
      <>
      <html lang="en">
        
        <body className="bg-gray-200">
          <HeaderWelcome/>
          {children}
        </body>
      </html>
    </>
    )
    else 
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
    
  
}
