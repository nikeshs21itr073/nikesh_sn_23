// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      
<h1>Dream Car Motors</h1>
   
    <div className="navbar">
        <div className="user-links left">
        <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
      <div className="top-center">
      <h1></h1>
      </div>
      
      
      <div className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/car">Cars</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><a href="#last">Contact Us</a></li>
        </ul>
      </div>
      <div className="user-links right">
        <ul>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default NavBar;
