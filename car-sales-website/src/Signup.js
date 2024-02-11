import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './login.css'  // Import your CSS file for Signup.js
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from 'react';

import axios from 'axios'; // Import Axios

// ... Other imports ...


  

  // ... Rest of the component ...

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send data to the backend
      const response = await axios.post('/u/user/insertion', formData);

      // Handle the response from the backend as needed
      console.log('Response:', response.data);
      
      // You can also redirect the user or perform other actions based on the response
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Implement your signup logic here
      console.log('Signup form submitted with values:', values);
    },
  });

  return (
    <div className="auth-container">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
      <div className="auth-card">
        
        <form onSubmit={formik.handleSubmit}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <h2>Sign Up</h2>
          < div className={`form-group ${formik.touched.username && formik.errors.username ? 'has-error' : ''}`}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className={`form-group ${formik.touched.email && formik.errors.email ? 'has-error' : ''}`}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={`form-group ${formik.touched.password && formik.errors.password ? 'has-error' : ''}`}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className={`form-group ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'has-error' : ''}`}>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="error">{formik.errors.confirmPassword}</div>
            ) : null}
            <button type="submit">Sign Up</button>
          <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <br></br>
          </div>
          
        </form>
       
      </div>
    </div>
  );
};

export default SignupForm;
