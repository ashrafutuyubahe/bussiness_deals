import React from 'react';
import logo from "./ASHIFY (1).png";

export default function registerForm({ onClose }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2><img src={logo} alt="logo" /></h2>
        <form onSubmit={handleSubmit}>
           <div>
           <label>Full Name:</label>
           <input type="email" name="email" required />
           </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">Register</button>
        </form>
        
      </div>
    </div>
  );
}
