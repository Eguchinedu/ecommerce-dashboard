import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Registration Successful.😁");
    navigate("/");
  };
  return (
    <>
      <div className="auth__form">
        <div className="auth__title">
          <h3>New Here?!</h3>
          <p>Create an account.😁</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="auth-input__group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className="auth-input__group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>
          <div className="auth-input__group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="" />
          </div>
          <button type="submit" className="auth__button">
            Sign up
          </button>
          <div className="auth__navigate">
            <p>
              Got an account? <Link to={"/"}>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
