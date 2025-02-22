import React from 'react'
import logo from '../../assets/PulsePing-Transparent-Logo.png'
import './Header.css'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-left'>
        <img src={logo} alt='PulsePing logo' className='header-logo' />
        <h1 className='header-title'>PulsePing</h1>
      </div>
      <div className='header-right'>
        <div className='header-theme-toggle'>
        <ThemeToggle />
        </div>
        <a href='/login' className='header-login-button'>Login</a>
        <a href='/signup' className='header-signup-button'>Sign up</a>
      </div>
    </div>
  )
}

export default Header