import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './login.css'; // Import your CSS file for Login.js
import 'bootstrap/dist/css/bootstrap.min.css';
import  {useState } from 'react';

import axios from 'axios'; // Import Axios

// ... Other imports ...


  

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send data to the backend
      const response = await axios.post('/u/login', formData);

      // Handle the response from the backend as needed
      console.log('Response:', response.data);
      
      // You can also redirect the user or perform other actions based on the response
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // ... Rest of the component ...

  const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Implement your login logic here
      console.log('Login form submitted with values:', values);
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
          <br>
          </br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          
        <h2>Login</h2>
          <div className="form-group">
            <input
              type="text"
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
          <div className="form-group">
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
            <button type="submit" >Login</button>
          <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
          </div>
          
        </form>
       
      </div>
    </div>
  );
};

export default LoginForm;
