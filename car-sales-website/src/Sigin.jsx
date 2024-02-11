// Sigg.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './L3.css';

function Sigg() {
  const [formData, setFormData] = useState({
    name: '',
    umail: '',
    password: '',
    phone: '',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, umail, password, phone } = formData;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(umail);
    const isPhoneValid = /^\d{10}$/.test(phone);

    if (!name || !umail || !password || !phone) {
      toast.error('Please fill in all fields.');
    } else if (!isEmailValid) {
      toast.error('Please enter a valid email address.');
    } else if (!isPhoneValid) {
      toast.error('Phone number must have exactly 10 digits.');
    } else {
      const requestData = {
        uname: name,
        umail: umail,
        upassword: password,
        phone: phone,
      };

      try {
        const response = await axios.post('https://backend-carsales.onrender.com/uu/user/insertion', requestData);
        if (response.data.user) {
          toast.success('Welcome ' + response.data.user.uname + '✌️✌️');
        } else {
          toast.error('Fill all the fields');
        }
      } catch (error) {
        console.error('Error uploading data:', error);
        toast.error('Error uploading data: ' + error.message+' Email Already exists');
      }
    }
  };

  return (
    < div className="auth-container">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <div className="auth-card signup">
        < form onSubmit={handleSubmit}>
          
          <h1>Register</h1>
          
          <div className="content">
            <div className="input-field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <div className="email-input">
                <input
                  type="text"
                  name="umail"
                  placeholder="Your Mail Id"
                  value={formData.umail}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="action">
            <button type="submit">Submit</button>
            <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          </div>
         
          </div>
         
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Sigg;