import { FaDiscord } from 'react-icons/fa'
import { BsPlus } from 'react-icons/bs'

export default function Sidebar() {
  return (
    <div className="w-16 h-full bg-discord-darkest">
      <div className="flex flex-col items-center py-3 space-y-2">
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-discord-blue hover:rounded-2xl transition-all duration-200">
          <FaDiscord className="text-2xl text-white" />
        </button>
        <div className="w-8 h-0.5 bg-discord-light/20"></div>
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-discord-light hover:rounded-2xl hover:bg-discord-blue transition-all duration-200">
          <BsPlus className="text-2xl text-discord-text" />
        </button>
      </div>
    </div>
  )
}
