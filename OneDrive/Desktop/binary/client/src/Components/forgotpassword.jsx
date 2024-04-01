import React, { useState } from 'react';
import "./Login.css";

import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function forgotpassword() {
  const [email, setEmail] = useState('');
  
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3000/api/auth/forgot-password", {
      email,
    })
      .then(response => {
        if (response.data.status) {
            alert("check your email for resetpassword link")
          navigate('/reset-password');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div className="login-page">
      <h1>FORGOT PASSWORD</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
       
        <button type="submit">Submit</button>
       

      </form>
    </div>
  );
}

export default forgotpassword;
