import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsChatSquareQuoteFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import person1 from "../../../public/images/user-7-62x62.jpg";
import person2 from "../../../public/images/user-8-62x62.jpg";
import person3 from "../../../public/images/user-5-62x62.jpg";

const reviews = [
  {
    id: 1,
    name: "رضا نوروزی",
    job: "پزشک",
    text: "من چند روز پیش یک عینک فلزی از شما خریدم که واقعا شگفت زده م کرد چون جنس بسیار محکمی داره!",
    image: person1,
  },
  {
    id: 2,
    name: "رعنا احمدی",
    job: "برنامه نویس",
    text: "بنظرم اگر دنبال کیفیت هستید و در عین حال قیمت مناسب را هم در نظر دارین, Optics shop بهترین انتخاب هست",
    image: person2,
  },
  {
    id: 3,
    name: "نادر محمودی",
    job: "وکیل",
    text: "فقط  میتونم تبریک بگم به تمام عوامل فروشگاه که توانستند با کمترین امکانات ممکن محصولات باکیفیتی در اختیار عموم قرار دهند",
    image: person3,
  },
];

const Slider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          350: {
            spaceBetween: 10,
            slidesPerView: 1,
          },

          640: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Pagination, Autoplay]}
        className="testimonal-swiper"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="text-center p-5 md:px-16 lg:px-24"
          >
            <div className="flex flex-col md:flex-row md:items-start md:border-b ">
              <BsChatSquareQuoteFill className="mx-auto md:w-[10%] text-[#3F8184] text-xl" />
              <p className="text-gray-400 my-5 font-semibold md:w-[90%]">
                {review.text}
              </p>
            </div>
            <div className="flex justify-center gap-5 md:pt-5">
              <Image
                width={70}
                height={70}
                alt={review.name}
                src={review.image}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <h1 className="text-[#2b5c5f] font-bold text-lg mt-2">
                  {review.name}
                </h1>
                <span className="text-gray-500 text-sm font-semibold">
                  {review.job}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
