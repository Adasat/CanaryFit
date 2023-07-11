import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
    
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Principal
      </main>
    
    </BrowserRouter>
  )
}

