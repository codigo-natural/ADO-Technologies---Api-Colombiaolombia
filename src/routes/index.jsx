import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '../components/pages/HomePage'
import { Login } from '../components/pages/Login.jsx'
import { Dashboard } from '../components/pages/Dashboard'
import { Search } from '../components/pages/Search.jsx'

export const RoutesApp = () => {
  const authUser = true
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/login" element={!authUser ? <Login /> : <Navigate to={'/dashboard'} />} />
      <Route path="/dashboard" element={authUser ? <Dashboard /> : <Navigate to={'/login'} />} />
      <Route path="/search" element={authUser ? <Search /> : <Navigate to='/login' />} />
    </Routes>
  )
}