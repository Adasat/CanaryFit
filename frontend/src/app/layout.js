'use client'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'
import Head from 'next/head'
import './globals.css'
import { Sora, Fugaz_One, Gugi, Montserrat_Alternates, Urbanist} from 'next/font/google'
import { usePathname, useRouter } from 'next/navigation'

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

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()
  const user = window.localStorage.getItem('token')

  {
    
    if (pathname === '/login' || pathname === '/signup')
      return (
        <>
          <html lang="en">
              <title>Canary Fit</title>

            <body className={`${urbanist.className} bg-gray-200 `}>
              {children}
            </body>
          </html>
        </>
      )
    else if (pathname === '/'){
      

         
            return (
              <>
                <html lang="en">
                  <title>Canary Fit</title>

                  <body className={`${urbanist.className} bg-gray-200 mb-20`}>
                    <HeaderWelcome />
                    {children}
                  </body>
                </html>
              </>
            )
           
        
      }else{
        if(user !== null){
           return (
             <>
               <html lang="en">
                 <title>Canary Fit</title>

                 <body className={`${urbanist.className} bg-gray-200 mb-16`}>
                   <Header />
                   <div className="flex flex-col min-h-screen">
                     <div className="flex-grow">{children}</div>
                   </div>
                   <Footer className="relative min-h-0" />
                 </body>
               </html>
             </>
           )
          } else {
            router.replace('/')

          }

    }
    }
}
