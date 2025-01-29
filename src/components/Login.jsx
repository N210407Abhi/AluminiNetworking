import React, { useState } from 'react';

const Login = ({ isSignedUp, handleSignUpAlert }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignedUp) {
      alert('Login successful!');
    } else {
      handleSignUpAlert();
    }
  };

  if (!isVisible) return null;

  return (
    <div className='loginSection'>
      <form className='authForm' onSubmit={handleSubmit}>
        <div className="close-btn" onClick={() => setIsVisible(false)}>X</div>
        <h6>Log in</h6>
        <div className="form-group">
          <label>User Type</label>
          <select 
            value={userRole} 
            onChange={(e) => setUserRole(e.target.value)}
            className="role-select"
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="alumni">Alumni</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email' 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password' 
          />
        </div>
        <div className="btnSubmit">
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
