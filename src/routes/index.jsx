import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '../components/pages/HomePage/HomePage.jsx'
import { Dashboard } from '../components/pages/Dashboard/Dashboard.jsx'
import { Search } from '../components/pages/Search.jsx'
import { NotFound } from '../components/pages/NotFound/NotFound.jsx'
import { AuthPage } from '../components/pages/Auth/Auth.jsx'
import { useSelector } from 'react-redux'
import { Atractions } from '../components/pages/Atractions/Atractions.jsx'

export const RoutesApp = () => {
  const authUser = useSelector((state) => state.auth.user)
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/auth-user" element={!authUser ? <AuthPage /> : <Navigate to={'/dashboard'} />} />
      <Route path="/dashboard" element={authUser ? <Dashboard /> : <Navigate to={'/auth-user'} />} />
      <Route path="/atractions" element={authUser ? <Atractions /> : <Navigate to={'/auth-user'} />} />
      <Route path="/search" element={authUser ? <Search /> : <Navigate to='/auth-user' />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}