import React from 'react';
import './signup.css'; 

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form">
          <input type="text" placeholder="Student ID no." className="signup-input" />
          <input type="text" placeholder="First Name" className="signup-input" />
          <input type="text" placeholder="Last Name" className="signup-input" />
          <input type="text" placeholder="Course" className="signup-input" />
          <input type="email" placeholder="Institutional Email" className="signup-input" />
          <input type="password" placeholder="Password" className="signup-input" />
          <button type="submit" className="signup-button">SIGN IN</button>
        </form>
      </div>

      <div className="logo-container">
        <img src="logo.png" alt="Cebu Institute of Technology - University Logo" className="logo" />
        <p className="university-title">CEBU INSTITUTE OF TECHNOLOGY - UNIVERSITY MARKET MATCH</p>
      </div>
    </div>
  );
};

export default Signup;