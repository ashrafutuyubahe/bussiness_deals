import React from 'react';
import facebook from './facebook.jpg'
import google from './google.png'
import logo from "./ASHIFY (1).png";

export default function LoginForm({ onClose }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2><img src={logo} alt="logo" /></h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="social-login-buttons">
          <button onClick={handleGoogleLogin}>
            <img src={facebook} alt="Google" />
            
            Login with Facebook
          </button>
          <button onClick={handleFacebookLogin}>
            <img src={google} alt="Facebook" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
