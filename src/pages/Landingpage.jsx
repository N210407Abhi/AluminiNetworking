import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import MainBody from '../components/MainBody';

export const Landingpage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showMainBody, setShowMainBody] = useState(false);

  const showLoginHandler = () => {
    setShowNavbar(true);
    setShowLogin(true);
    setShowSignUp(false);
    setShowMainBody(false);
  };

  const showSignUpHandler = () => {
    setShowLogin(false);
    setShowNavbar(true);
    setShowSignUp(true);
    setShowMainBody(false);
  };

  const showAboutHandler = () => {
    setShowMainBody(true);
    setShowNavbar(true);
    setShowLogin(false);
    setShowSignUp(false);
  };

  return (
    <div className='landingSection'>
      {showNavbar && (
        <Navbar
          showLoginHandler={showLoginHandler}
          showSignUpHandler={showSignUpHandler}
          showAboutHandler={showAboutHandler}
        />
      )}
      {showLogin && <Login />}
      {showSignUp && <SignUp />}
      {showMainBody && <MainBody showLoginHandler={showLoginHandler} />}
    </div>
  );
};
