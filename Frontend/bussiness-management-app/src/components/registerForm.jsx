import React from 'react';
import logo from "./ASHIFY (1).png";
import axios from 'axios';

export default function registerForm({ onClose }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    axios.post('https://locahost:500/userregister', {key1: 'value1',key2: 'value2',
    }, {headers: {'Content-Type': 'application/json'},
    })
      .then(response => {console.log('Response:', response.data);
      })
      .catch(error => {console.error('Error:', error);
      });
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
