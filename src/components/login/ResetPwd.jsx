import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ResetPwd = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Password reset successfully.😁");
        navigate('/')
    }

  return (
    <div className="auth__container">
      <div className="auth__form">
        <div className="auth__title">
          <h3>Check your email for code.📥</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="auth-input__group">
            <label htmlFor="code">Code</label>
            <input type="text" name="code" id="" />
          </div>
          <div className="auth-input__group">
            <label htmlFor="password">New Password</label>
            <input type="password" name="password" id="" />
          </div>
          <div className="auth-input__group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="" />
          </div>
          <button type="submit" className="auth__button">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPwd