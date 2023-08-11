import React from "react";
import { SignIn } from "@clerk/nextjs";

export default function LoginForm() {
  return (
    <div className="py-20 mx-auto flex justify-center items-center lg:w-[50%]">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
