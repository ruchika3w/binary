import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      if (response.data.status) {
        setLoggedIn(true);
        setUserId(response.data.userId); // Store user ID
        const sponserId=response.data.user.userId;
        localStorage.setItem("userSponserId",sponserId);
        navigate('/dashboard'); // Navigate to dashboard after successful login
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password); // Call handleLogin function with email and password
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
        <p>Don't Have an Account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}

export default Login;
