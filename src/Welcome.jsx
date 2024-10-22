import React from 'react';
import './welcome.css'; 

const SignInPage = () => {
  return (
    <div className="signin-container">
      <img src="logo.png" alt="Logo" className="logo" />
      
      <header className="header">
        <h1 className="title">CEBU INSTITUTE OF TECHNOLOGY - UNIVERSITY MARKET MATCH</h1>
      </header>
      <div className="">
        <img src="Leap.png" alt="Leap" className="banner-image" />
        <button  className="sign-in-btn">SIGN IN</button>
      </div>
    </div>
  );
};

export default SignInPage;