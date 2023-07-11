import { BrowserRouter } from 'react-router-dom'
import Context from '@/context/context'


export default function App() {
  const queryClient = new QueryClient()

  return (
    <Context>
      <BrowserRouter>
      
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          
        </main>
      
      </BrowserRouter>
    </Context>
  )
}

