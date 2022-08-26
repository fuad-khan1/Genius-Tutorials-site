import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();



    const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);
  const [inputValue, setInputValue] = useState({
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
  });
  const [confirmError, setConfirmError] = useState("");

  const handleInputField = (event) => {
    inputValue[event.target.name]= event.target.value;
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const ConfirmPassword = event.target.confirmPassword.value;
    if (password !== ConfirmPassword) {
      setConfirmError('Password not matched!');
      return;
    } else {
      createUserWithEmailAndPassword(email, password);
       setConfirmError('');
    }
  };
  let errorElement;

  if (googleError ) {
    
    errorElement = <p className='text-danger'>Error: {googleError?.message}</p>
}

if (googleUser) {
  console.log(googleUser);
    navigate('/');
}
  return (
    <div>
      <div className="container w-50">
        <h2 className="my-3 text-primary">Please Register</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleInputField}
              className="py-3"
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handleInputField}
              className="py-3"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onBlur={handleInputField}
              className="py-3"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <p className="text-danger">{confirmError} </p>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p>
            Already registered?<Link to="/login">Login</Link>
          </p>
          {error && <p className="text-danger">{error.message}</p>}
          {user ? <p className="text-success">User Created</p> : <p></p>}
        </Form>
        <button onClick={()=>signInWithGoogle()}>Google SignUp</button>
      </div>
    </div>
  );
};

export default Register;
