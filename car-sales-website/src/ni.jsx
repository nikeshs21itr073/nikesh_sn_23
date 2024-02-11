

// L.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './L3.css';

function L() {
  const [formData, setFormData] = useState({
    umail: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { umail, password } = formData;

    if (!umail || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    const requestData = {
      umail: umail,
      upassword: password,
      action: 'login',
    };

    try {
      const response = await axios.post('https://backend-carsales.onrender.com/uu/user/search', requestData);
      const { success, message, user } = response.data;

      if (success) {
        toast.success('Login successful');
      } else {
        toast.error('Login failed: ' + message);
      }
    } catch (error) {
      console.error('Error uploading data:', error);
      toast.error('Error uploading data: ' + error.message+' Email or password is incorrect');
    }
  }

  return (
    <div className="auth-container">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <div className="auth-card login">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="text"
                name="umail"
                placeholder="Your Mail Id"
                value={formData.umail}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="action">
            <button type="submit">Submit</button>
          </div>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default L;
