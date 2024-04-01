import React, { useState } from 'react';
import "./Login.css";

import Axios from 'axios';
import {useNavigate } from 'react-router-dom';


function adminlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3000/api/auth/login", {
      email,
      password,
    })
      .then(response => {
        if (response.data.status) {
          navigate('/dashboard');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div className="login-page">
      <h1>Login</h1>
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
       
      </form>
    </div>
  );
}

export default adminlogin;
