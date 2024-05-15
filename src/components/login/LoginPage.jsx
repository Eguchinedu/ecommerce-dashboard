import React from "react";
import bg from "../../assests/bg-main.jpeg";
import "./login.scss";
import { Outlet } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login__container">
      <div className="login-image__section">
        <img src={bg} alt="" />
      </div>
      <div className="login-form__section">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginPage;
