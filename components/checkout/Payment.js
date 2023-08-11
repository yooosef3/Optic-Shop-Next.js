import "react-toastify/dist/ReactToastify.css";

import React, { useContext } from "react";

import AddressInfo from "./AddressInfo";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { CgBorderStyleDotted } from "react-icons/cg";
import { FaCcPaypal } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import PayInfo from "./PayInfo";
import PersonInfo from "./PersonInfo";
import { StepContext } from "./Checkout";

const Payment = () => {
  const { step } = useContext(StepContext);
  return (
    <div className="bg-gray-100 lg:w-[58%]">
      <div className="flex justify-center mt-20">
        <div
          className={`flex items-center text-3xl ${
            step.person ? "text-[#2fbf00]" : "text-gray-300"
          }`}
        >
          <div className={`border ${step.person ? 'animate-pulse ring-4 ring-green-300' : 'border-gray-300'} p-2 rounded-full`}>
            <FaUserTie />
          </div>
          <CgBorderStyleDotted />
          <CgBorderStyleDotted />
          <CgBorderStyleDotted />
        </div>
        <div
          className={`flex items-center text-3xl ${
            step.person && step.address ? "text-[#2fbf00]" : "text-gray-300"
          }`}
        >
          <div className={`border ${step.person && step.address ? 'animate-pulse ring-4 ring-green-300' : 'border-gray-300'} p-2 rounded-full`}>
            <BsFillHouseDoorFill />
          </div>
          <CgBorderStyleDotted />
          <CgBorderStyleDotted />
          <CgBorderStyleDotted />
        </div>
        <div
          className={`text-3xl ${
            step.pay ? "text-[#2fbf00]" : "text-gray-300"
          }`}
        >
          <div className={`border ${step.pay ? 'animate-pulse ring-4 ring-green-300' : 'border-gray-300'} p-2 rounded-full`}>
            <FaCcPaypal />
          </div>
        </div>
      </div>
      {!step.person ? (
        <PersonInfo />
      ) : step.address ? (
        <PayInfo />
      ) : (
        <AddressInfo />
      )}{" "}
    </div>
  );
};

export default Payment;
