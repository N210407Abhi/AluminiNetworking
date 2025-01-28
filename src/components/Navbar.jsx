import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = ({showLoginHandler,showSignUpHandler}) => {
  return (
    <div className='Navsection'>
      <div className="components">
        <div className='logo'>ALUMINI ASSOCIATION</div>
        <ul className='navItems'>
          <li>Home</li>
           {/* <li><Link to='/aboutus'>About us</Link></li>  */}
           <li>About us</li>
          <li>Events</li>
          <li>Alumini</li>
          <li>Contact</li>
          <li className='auth-buttons'>
            <button className='login-btn' onClick={showLoginHandler}>Login</button>
            <button className='signup-btn' onClick={showSignUpHandler}>SignUp</button>
          </li>
        </ul>
      </div>
    </div>
  )
} 