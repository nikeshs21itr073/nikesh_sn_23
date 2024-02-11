import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './login1.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signupform = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!fullName) {
      errors.fullName = 'Full name is required.';
    }
    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address.';
    }
    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    }

    if (Object.keys(errors).length === 0) {
      try {
        const requestData = { fullName, email, password }; // Store data in a variable

        const response = await axios.post('http://localhost:3002/u/signup', requestData); // Send the data to the backend

        if (response.status === 200) {
          console.log('Data sent to the backend:', requestData); // Log the data being sent
          console.log(response.data.message);
          // Optionally, you can redirect the user to a different page after successful signup.
        }
      } catch (error) {
        console.error(error);
        // Handle server error or display an error message to the user.
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className='row' style={{ backgroundColor: 'skyblue' }}>
      <center>
        <div className='col-md-3' style={{ marginTop: '10%' }}>
          <h3>Signup</h3>
          <br></br>

          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFullName">
              <Form.Label>Enter your Full name</Form.Label>
              <Form.Control type="name" placeholder="Name" name='name' value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              {errors.fullName && <span style={{ color: 'red' }}><br></br>{errors.fullName}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' id='email' placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              {errors.email && <span style={{ color: 'red' }}><br></br>{errors.email}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' id='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              {errors.password && <span style={{ color: 'red' }}><br></br>{errors.password}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign UP
            </Button>
          </Form>
          <br></br>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </center>
    </div>
  );
};

export default Signupform;
