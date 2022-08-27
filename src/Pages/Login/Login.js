import { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import auth from "../../firebase.init";

const Login = () => {
  const [confirmError, setConfirmError] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  //******** Handle Input Field *************
  const handleUserInfo = (event) => {
    userInfo[event.target.name] = event.target.value;
  };

  if (user) {
    navigate(from, { replace: true });
  }
  let Error;
  if (error) {
    Error = <p className="text-danger">{error?.message}</p>;
  }

  const [loginUser, loginloading, loginerror] = useAuthState(auth);

  //**** Handle Submit Button ************
  const handleLogin = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(userInfo.email, userInfo.password);
    console.log(userInfo);
  };
  // ************Handle Reset Password ***************
  const resetPassword = async () => {
    if (userInfo.email) {
      await sendPasswordResetEmail(userInfo.email);
      toast("Email Sent");
    } else {
      toast("Enter email address");
    }
  };

  return (
    <div className="container">
      <form className="w-50 mx-auto" onSubmit={handleLogin}>
        <h2 className="text-primary my-4">Login</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onBlur={(event) => handleUserInfo(event)}
            type="email"
            className="form-control py-3"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onBlur={(event) => handleUserInfo(event)}
            type="password"
            name="password"
            className="form-control py-3"
            id="exampleInputPassword1"
            placeholder="Enter Password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-50 my-3">
          Login
        </button>
        <p>
          New to Here? <Link to="/register">Register</Link>
        </p>
        <p>
          Forgot Password?
          <button onClick={resetPassword} className="btn btn-link">
            Reset Password
          </button>
        </p>
        <p className="text-danger">{confirmError}</p>

        {user && <p className="text-success">User Login Successfully</p>}
      </form>
      {Error}
      <ToastContainer />
    </div>
  );
};

export default Login;
