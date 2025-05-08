import { Link, useParams } from 'react-router-dom'
import { useSupabase } from '../context/supabase'
import { useEffect, useState } from 'react'

export default function ChannelList() {
  const { serverId } = useParams()
  const supabase = useSupabase()
  const [channels, setChannels] = useState([])

  useEffect(() => {
    const fetchChannels = async () => {
      const { data } = await supabase
        .from('channels')
        .select('*')
        .eq('server_id', serverId)
        .order('created_at', { ascending: true })
      setChannels(data || [])
    }

    fetchChannels()
  }, [serverId, supabase])

  return (
    <div className="w-60 bg-discord-dark p-2">
      <div className="px-2 py-4 border-b border-discord-light">
        <h2 className="font-bold text-white">Server Name</h2>
      </div>
      <div className="mt-2 space-y-1">
        {channels.map((channel) => (
          <Link
            key={channel.id}
            to={`/servers/${serverId}/channels/${channel.id}`}
            className="block px-2 py-1 text-sm rounded hover:bg-discord-light/50"
          >
            # {channel.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
