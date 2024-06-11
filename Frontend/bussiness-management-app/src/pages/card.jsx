import React, { useState } from 'react';
import './card.css';
// import Displaymessage from './displaymessage';


export default function ReportProblemForm({onClose}) {
  const [formData, setFormData] = useState({
    sitePerformance: '',
    loggingError: '',
    feedbackDelay: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/reportProblem', {
      method: 'POST',
      headers: {
        
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response:', data);
        
        
        const message = data.message;
        const sitePerformance = data.sitePerformance;
        const loggingError = data.loggingError;
        const feedbackDelay = data.feedbackDelay;
        const responseMessage = data.response;

         const alertdata={
          
          sitePerformance,
          loggingError,
           feedbackDelay,
          responseMessage
         }
  
      
        const alertMessage = `${message}\n\nSite Performance: ${sitePerformance}\nLogging Error: ${loggingError}\nFeedback Delay: ${feedbackDelay}\n\n${responseMessage}`;
          
      //  <Displaymessage  message={alertdata}/>
        alert(alertMessage);

  
        
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.error('Error:', error);
       
      });
  };
  
 
  

  return (
    <div className="form-container">
       <button className="close-button" onClick={onClose}>X</button>
      <h2>Report a Problem</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sitePerformance">Site Performance:</label>
          <input
            type="text"
            id="sitePerformance"
            name="sitePerformance"
            value={formData.sitePerformance}
            onChange={handleChange}
            placeholder="Enter site performance details"
          />
        </div>
        <div className="form-group">
          <label htmlFor="loggingError">Logging Error:</label>
          <input
            type="text"
            id="loggingError"
            name="loggingError"
            value={formData.loggingError}
            onChange={handleChange}
            placeholder="Enter logging error details"
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedbackDelay">Feedback Delay:</label>
          <input
            type="text"
            id="feedbackDelay"
            name="feedbackDelay"
            value={formData.feedbackDelay}
            onChange={handleChange}
            placeholder="Enter feedback delay details"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
