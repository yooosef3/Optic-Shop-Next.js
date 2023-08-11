import Image from "next/image";
import QuestionList from "./QuestionList";
import React from "react";
import faq from "../../../public/images/1000_F_373514419_Mq5oisa8izs1TN8h8ozBPIJDJVcratbm.jpg";

const Questions = () => {
  return (
    <div className="py-14 lg:flex lg:items-center">
      <div className="lg:w-[60%]">
        <h1 className="mb-10 lg:mb-16 font-bold text-lg lg:text-3xl text-center">
          چرا فروشگاه ما؟
        </h1>
        <QuestionList />
      </div>
      <div className="p-10 lg:w-[40%] hidden lg:block">
        <Image
          width={800}
          height={600}
          src={faq}
          alt="faq"
          className="faq"
        />
      </div>
    </div>
  );
};

export default Questions;
