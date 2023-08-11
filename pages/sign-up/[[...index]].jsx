import React, { FC } from "react";

import Head from "next/head";
import SignUp from "../../components/signup/Signup";
import background from "../../public/images/Pattern.webp";

const signUp = () => {
  return (
    <>
      <Head>
        <title>ثبت نام</title>
      </Head>
      <div
        className="bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <SignUp />
      </div>
    </>
  );
};

export default signUp;