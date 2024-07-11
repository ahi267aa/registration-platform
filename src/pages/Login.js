// pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful');
    } catch (error) {
      setMessage(`Error: ${error.response.data.error}`);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-h2">Login</h2>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
            required
          />
          <label className='login-checkbox'>
            <input type="checkbox" />  Remember Me
          </label>
          <button type="submit">Login</button>
        </form>
        <p>{message}</p>
      </div>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
