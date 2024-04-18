import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <nav>
      <h1>ADO Technologies</h1>
      <div className='right'>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </nav>
  )
}
