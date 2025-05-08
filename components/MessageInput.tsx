import { useState } from 'react'
import { useSupabase } from '../context/supabase'

export default function MessageInput({ channelId }) {
  const supabase = useSupabase()
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message.trim()) return

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    await supabase.from('messages').insert({
      content: message,
      channel_id: channelId,
      author_id: user.id
    })

    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-discord-light">
      <div className="relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Message #${channelId}`}
          className="w-full p-2 pl-4 pr-12 rounded bg-discord-light focus:outline-none focus:ring-1 focus:ring-discord-blue"
        />
        <button
          type="submit"
          className="absolute right-0 flex items-center justify-center w-8 h-8 mr-2 text-gray-400 rounded-full top-1/2 -translate-y-1/2 hover:bg-discord-light/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}
