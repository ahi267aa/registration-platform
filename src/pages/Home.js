import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import HomeImg from './HomeImg'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-image">
        <HomeImg />
      </div>
      <div className="home-content">
        <h2 className="home-h2">Welcome to the User Management App</h2>
        <div className="home-links">
          <Link to="/register" className="home-link">Register</Link>
          <Link to="/login" className="home-link">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
