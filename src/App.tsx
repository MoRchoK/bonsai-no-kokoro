import * as React from 'react'
import Box from '@mui/material/Box'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Lenta from './components/Lenta/Lenta'
import Knowledge from './components/Knowledge/Knowledge'
import Community from './components/Community/Community'
import Contests from './components/Contests/Contests'
import Profile from './components/Profile/Profile'
import AuthModal from './components/Auth/AuthModal'
import './App.css'

const App: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lenta" element={<Lenta />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contests" element={<Contests />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <AuthModal />
    </Box>
  )
}

export default App
