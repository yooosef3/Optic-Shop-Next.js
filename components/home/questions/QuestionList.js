import React, { useState } from "react";

import { FaChevronCircleLeft } from "react-icons/fa";

const questions = [
  {
    id: 1,
    title: "تجربه به یاد ماندنی",
    text: "هنگامی که به فروشگاه ما می آیید، همیشه با رفتاری گرم، دوستانه و صمیمی از شما استقبال می شود. بدون چهره خسته، بدون خدمات استرس‌زا یا عجله‌ای، و بدون اینکه ما «متشکرم» بگوییم، فروشگاه را ترک نکنید.",
  },
  {
    id: 2,
    title: "فروشندگان واجد شرایط",
    text: " فروشندگان ما همگی با تجربه، خلاق، دوستانه و قابل اعتماد هستند. ما در طرح‌های  مدرن و چشمگیر تخصص داریم و به شدت علاقه‌مند به کیفیت هستیم، از چشمان شما محافظت می‌کنیم و اطمینان می‌دهیم که مشتریان ما بسیار خوشحال هستند!",
  },
  {
    id: 3,
    title: "قیمت مقرون به صرفه",
    text: "فروشگاه ما مقرون به صرفه است و قیمت ما بسیار رقابتی است. ما معتقدیم که ظرافت نفس گیر باید با هر بودجه ای قابل دستیابی باشد! این نیز یکی از دلایلی است که مشتریان و شرکای دائمی ما برای فروشگاه گل ما ارزش قائل هستند.",
  },
];
const QuestionList = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <div className="shadow-lg w-[90%] mx-auto rounded-3xl overflow-hidden">
      {questions.map((question) => (
        <div key={question.id} className={`${question.id !==3 && 'border-b'} border-gray-300`}>
          <div
            onClick={() => setToggle(question.id)}
            className="flex justify-start items-center gap-5 cursor-pointer p-4 bg-white"
          >
            <FaChevronCircleLeft className={`text-lg duration-200 ${toggle === question.id ? 'text-green-600 -rotate-90' : 'text-gray-500'}`}/>
            <h1 className="text-lg lg:text-xl font-bold text-gray-700">{question.title}</h1>
          </div>
          <div className={`${ toggle === question.id ? "block" : "hidden"} p-5 bg-slate-50`}>
            <p className="text-gray-400 font-semibold">{question.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
