import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      toast.success("Welcome Admin.😁");
      navigate("/dashboard");
    };
  return (
    <div className="auth__form">
      <div className="auth__title">
        <h3>Welcome Back!👋</h3>
        <p>Please log in.😁</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="auth-input__group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" />
        </div>
        <div className="auth-input__group">
          <div className="auth-label__group">
            <label htmlFor="password">Password</label>
            <Link to={"/forgot-pwd"}>Forgot password?</Link>
          </div>
          <input type="password" name="password" id="" />
        </div>
        <button type="submit" className="auth__button">
          Sign in
        </button>
        <div className="auth__navigate">
          <p>
            Not Registered? <Link to={"/sign-up"}>Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm