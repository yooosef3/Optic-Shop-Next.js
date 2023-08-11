import React, { createContext, useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import background from "../../public/images/Pattern.webp";

export const IconContext = createContext();
const Layout = ({ children }) => {
  const [icon, setIcon] = useState({
    menu: false,
    search: false,
    cart: false,
    user: false,
  });
  return (
    <IconContext.Provider value={[icon, setIcon]}>
      <div
        className="bg-no-repeat min-h-screen bg-cover "
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </IconContext.Provider>
  );
};

export default Layout;
