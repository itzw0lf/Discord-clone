import { format } from 'date-fns'

export default function MessageList({ messages }) {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {messages.map((message) => (
        <div key={message.id} className="flex mb-4 group">
          <div className="flex-shrink-0 w-10 h-10 mr-3 rounded-full bg-discord-light"></div>
          <div>
            <div className="flex items-baseline">
              <span className="font-semibold">{message.author?.username}</span>
              <span className="ml-2 text-xs text-discord-textMuted">
                {format(new Date(message.created_at), 'MM/dd/yyyy h:mm a')}
              </span>
            </div>
            <p className="text-discord-text">{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
