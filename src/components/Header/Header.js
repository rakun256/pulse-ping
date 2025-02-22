import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-left'>
        <h1>PulsePing</h1>
      </div>
      <div className='header-right'>
        <a href='/login'>Login</a>
        <a href='/signup'>Sign up</a>
      </div>
    </div>
  )
}

export default Header