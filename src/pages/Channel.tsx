import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSupabase } from '../context/supabase'
import MessageList from '../components/MessageList'
import MessageInput from '../components/MessageInput'

export default function ChannelPage() {
  const { channelId } = useParams()
  const supabase = useSupabase()
  const [messages, setMessages] = useState([])
  const [channel, setChannel] = useState(null)

  useEffect(() => {
    const fetchChannel = async () => {
      const { data } = await supabase
        .from('channels')
        .select('*')
        .eq('id', channelId)
        .single()
      setChannel(data)
    }

    const fetchMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*, author:profiles(*)')
        .eq('channel_id', channelId)
        .order('created_at', { ascending: true })
      setMessages(data || [])
    }

    fetchChannel()
    fetchMessages()

    const subscription = supabase
      .channel(`messages:channel_id=eq.${channelId}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          setMessages((prev) => [...prev, payload.new])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(subscription)
    }
  }, [channelId, supabase])

  if (!channel) return <div>Loading...</div>

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center h-12 px-4 border-b border-discord-dark">
        <h2 className="font-semibold">#{channel.name}</h2>
      </div>
      <MessageList messages={messages} />
      <MessageInput channelId={channelId} />
    </div>
  )
}
