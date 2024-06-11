import React, { useState } from "react";
import logo from "./ASHIFY (1).png";
import LoginForm from "../pages/login";
import RegisterForm from "./registerForm";

export default function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);


  const handleLoginClick = (event) => {
    event.preventDefault();
    setShowLoginForm(true);
  
  };

  const handleRegisterClick = (event) => {
    event.preventDefault();
   setShowRegisterForm(true)
  
  };
  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };
  const handleCloseRegisterform = () => {
    setShowRegisterForm(false);
  };


  return (
    <div>
      <nav className="navbar-container">
        <div className="subnavbar">
          <p id="nav-p">
            Your guide to optimizing software costs and enhancing security with identity
          </p>
          <li id="nav-link">
            <a className="register-link" href="#"  onClick={handleRegisterClick}>Register Now <span>--</span></a>
            <a className="nav-link-login" href="#" onClick={handleLoginClick}>
              Login
            </a>
          </li>
          <div className="globe"></div>
        </div>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="other-contents">
           </div>
        </div>
      </nav>
      {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}
      {showRegisterForm && <RegisterForm onClose={handleCloseRegisterform} />}
      
    </div>
  );
}
