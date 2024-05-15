import React from 'react'
import { useNavigate } from 'react-router-dom';


const ForgotPwd = () => {
    const navigate = useNavigate();
    const handleSubmit =(e)=> {
 e.preventDefault();
        
        navigate("/forgot-pwd/reset-pwd");
    }
  return (
    <div className="auth__container">
      <div className="auth__form ">
        <div className="auth__title">
          <h3>Forgot Password?!😓</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="auth-input__group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <button type="submit" className="auth__button">
            Send Code
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPwd