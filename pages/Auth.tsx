import { useState } from 'react'
import { useSupabase } from '../context/supabase'
import { useNavigate } from 'react-router-dom'
import { FaDiscord } from 'react-icons/fa'

export default function AuthPage() {
  const supabase = useSupabase()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      navigate('/servers/1')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-discord-darker">
      <div className="w-full max-w-md p-8 rounded-md bg-discord-dark">
        <div className="flex items-center justify-center mb-6">
          <FaDiscord className="text-5xl text-discord-blue" />
        </div>
        <h1 className="mb-6 text-2xl font-bold text-center">Welcome back!</h1>
        
        {error && (
          <div className="p-3 mb-4 text-sm text-red-500 bg-red-500/10 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-discord-light border-discord-lighter focus:ring-2 focus:ring-discord-blue"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-discord-light border-discord-lighter focus:ring-2 focus:ring-discord-blue"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 font-medium text-white rounded bg-discord-blue hover:bg-discord-blueHover disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}
