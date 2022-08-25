import React from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const inputEmail = (event) => {
    console.log(event.target.value);
  };
  const inputPass = (event) => {
    console.log(event.target.value);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.inputPass.value; 
    console.log(email);
  };
  return (
    <div>
      <div className="container w-50">
        <h2 className="my-3 text-primary">Please Login</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={inputEmail}
              className="py-3"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            onBlur={inputPass}
              className="py-3"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              className="py-3"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p>
            Already registered?<Link to="/login">Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
