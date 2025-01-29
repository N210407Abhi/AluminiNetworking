import React from 'react'
export const Navbar = ({ showLoginHandler, showSignUpHandler, showAboutHandler }) => {
  return (
    <div className='Navsection'>
      <div className="components">
        <div className='logo'>ALUMINI ASSOCIATION</div>
        <ul className='navItems'>
          <li>Home</li>
          <li onClick={showAboutHandler}>About us</li>
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
  );
};
