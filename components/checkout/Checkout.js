import React, { createContext, useState } from "react";

import Cart from "./Cart";
import Payment from "./Payment";

export const StepContext = createContext();
const Checkout = () => {
  const [step, setStep] = useState({
    person: false,
    address: false,
    pay: false
  });
  return (
    <StepContext.Provider value={{step, setStep}}>
      <div className="flex flex-col lg:flex-row">
        <Cart />
        <Payment />
      </div>
    </StepContext.Provider>
  );
};

export default Checkout;
