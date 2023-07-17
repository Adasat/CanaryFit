'use client'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'
import './globals.css'
import { Sora, Fugaz_One, Gugi, Montserrat_Alternates, Urbanist} from 'next/font/google'
import { usePathname } from 'next/navigation'
import HeaderWelcome from '@/components/HeaderWelcome/HeaderWelcome'

export const sora = Sora({ subsets: ['latin'] })
export const gugi = Gugi({ subsets: ['latin'], weight: '400'})
export const rubik = Fugaz_One({ subsets: ['latin'], weight: '400' })
export const montse = Montserrat_Alternates({subsets: ['latin'], weight: '400'})
export const montseBold = Montserrat_Alternates({
  subsets: ['latin'],
  weight: '500'
})
export const urbanist = Urbanist({subsets: ['latin']})

console.log(sora)

export default function RootLayout({ children }) {
  const pathname = usePathname()

  {
    if (pathname === '/login' || pathname === '/signup')
      return (
        <>
          <html lang="en">
            <body className={`${urbanist.className} bg-gray-200 `}>
              {children}
            </body>
          </html>
        </>
      )
    else if (pathname === '/')
      return (
        <>
          <html lang="en">
            <body className={`${urbanist.className} bg-gray-200 `}>
              <HeaderWelcome />
              {children}
            </body>
          </html>
        </>
      )
    else
      return (
        <>
          <html lang="en">
            <body className={`${urbanist.className} bg-gray-200 `}>
              <Header />
              <div className="flex flex-col min-h-screen">
                <div className="flex-grow">{children}</div>
              </div>
              <Footer className="relative min-h-0" />
            </body>
          </html>
        </>
      )
  }
}
