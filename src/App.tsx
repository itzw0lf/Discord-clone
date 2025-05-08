import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { SupabaseProvider } from './context/supabase'

export default function App() {
  return (
    <SupabaseProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SupabaseProvider>
  )
}
