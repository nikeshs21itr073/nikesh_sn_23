import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './login1.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
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
        const response = await axios.post('http://localhost:3002/u/login', { // Change the endpoint URL
          email,
          password,
        });

        if (response.status === 200) {
          console.log(response.data.message);
          // Optionally, you can redirect the user to a different page after successful login.
        } else if (response.status === 401) {
          console.log(response.data.message);
          // Handle incorrect username or password.
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
    // JSX code for the login form
    <div className='row' style={{ backgroundColor: 'skyblue' }}>
    <center>
      <div className='col-md-3' style={{ marginTop: '10%' }}>
        <h3>Login</h3>
        <br></br>

        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email'id='email' placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            {errors.email && <span style={{ color: 'red' }}><br></br>{errors.email}</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"name='password' id='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            { errors.password && <span style={{ color: 'red' }}><br></br>{errors.password}</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
         
        </Form>
        <br></br>
        <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
      </div>
    </center>
  </div>
    // ...
  );
};

export default Loginform;
