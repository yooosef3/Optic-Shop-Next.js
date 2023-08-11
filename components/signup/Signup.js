import LoginImage from "../login/LoginImage";
import React from "react";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div className="lg:flex">
      <LoginImage />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
