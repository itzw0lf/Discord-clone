import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import ChannelList from '../components/ChannelList'

export default function ServerPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChannelList />
      <Outlet />
    </div>
  )
}
