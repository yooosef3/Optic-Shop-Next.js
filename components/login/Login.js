import LoginForm from "./LoginForm";
import LoginImage from "./LoginImage";
import React from "react";

const Login = () => {
  return (
    <div className="lg:flex">
      <LoginImage />
      <LoginForm />
    </div>
  );
};

export default Login;
