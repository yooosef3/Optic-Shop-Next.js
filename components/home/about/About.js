import Image from "next/image";
import React from "react";
import about from "../../../public/images/ezgif.com-gif-maker.jpg";
import bg from "../../../public/images/istockphoto-1187878655-612x612.jpg";

const About = () => {
  return (
    <div className="bg-white md:flex md:items-center">
      <div className="p-10 hidden md:block md:w-[40%]">
        <Image
          width={300}
          height={200}
          src={about}
          alt="aboutus"
          className="about"
        />
      </div>
      <div className="relative md:w-[60%]">
        <div
          style={{ backgroundImage: `url(${bg.src})` }}
          className="bg-no-repeat h-full absolute inset-0 opacity-5 bg-cover bg-center"
        ></div>
        <div className="text-center p-7 lg:p-10 xl:p-14 flex flex-col items-center">
          <h1 className="font-bold text-2xl lg:text-3xl mb-5">درباره ما</h1>
          <p className="text-gray-500 text-right font-medium lg:w-[450px] xl:w-[500px]">
            آیا همه افراد با استفاده از یک عینک مقرون به صرفه، شایسته ظاهری زیبا
            نیستند؟ بنابراین Optics Shop در منطقه خلیج سانفرانسیسکو متولد شد -
            یک شرکت‌ آینده‌اندیش و آگاه به فناوری.
            ماموریت واضح بود: به مردم عینکی بدهید که واقعاً می توانند بخرند، اما
            همچنان آنها را شبیه به یک میلیونر نشان دهید. این شرکت کوچک، یک
            شرکت کوچک با ایده های بزرگ شروع به کار کرد، اما به سرعت به یک پدیده
            تبدیل شد. شیک پوشان، مشتریان فهیم؛ همه دریافتند
            که می‌توانند با قیمت‌های Optics Shop، انتخابی
            را که سزاوار آن هستند، دریافت کنند.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
