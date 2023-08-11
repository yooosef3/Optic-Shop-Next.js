import React from "react";
import { SignUp } from "@clerk/nextjs";

export default function SignUpForm() {
  return (
    <div className="py-20 mx-auto flex justify-center items-center lg:w-[50%]">
      <SignUp path="/sign-up" routing="path" signUpUrl="/sign-in" />
    </div>
  );
}
