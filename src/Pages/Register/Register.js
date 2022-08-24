import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="container w-50">
      <h2 className="my-3 text-primary">Please Login</h2>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="py-3" type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="py-3" type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control className="py-3" type="password" placeholder="Confirm Password" required />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>Already registered?<Link to='/login'>Login</Link></p>
    </Form>
    </div>
        </div>
    );
};

export default Register;