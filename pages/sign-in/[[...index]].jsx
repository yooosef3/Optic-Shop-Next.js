import Head from "next/head";
import Login from "../../components/login/Login";
import React from "react";
import background from "../../public/images/Pattern.webp";

const login = () => {
  return (
    <>
      <Head>
        <title>ورود</title>
      </Head>
      <div
        className="bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <Login />
      </div>
    </>
  );
};

export default login;

// login.getLayout = function PageLayout(page: FC) {
//   return (
//     <>
//       {page}
//       <Footer />
//     </>
//   );
// };
