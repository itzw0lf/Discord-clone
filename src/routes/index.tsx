import { Routes, Route } from 'react-router-dom'
import AuthPage from '../pages/Auth'
import ServerPage from '../pages/Server'
import ChannelPage from '../pages/Channel'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/servers/:serverId" element={<ServerPage />}>
        <Route path="channels/:channelId" element={<ChannelPage />} />
      </Route>
    </Routes>
  )
}
