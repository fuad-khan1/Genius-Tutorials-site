import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
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
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>New to Here?<Link to='/register'>Register</Link></p>
    </Form>
    </div>
  );
};

export default Login;
