import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import React from "react";
import { TbEyeglass2 } from "react-icons/tb";

const Slider = ({ data }) => {
  return (
    <>
      <Swiper
        breakpoints={{
          350: {
            spaceBetween: 20,
            slidesPerView: 1,
          },

          500: {
            spaceBetween: 20,
            slidesPerView: 2,
          },

          998: {
            spaceBetween: 20,
            slidesPerView: 3,
          },

          1200: {
            spaceBetween: 20,
            slidesPerView: 4,
          },
        }}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Navigation, Autoplay]}
        className="blogs-swiper w-[90%] xl:w-[75%]"
      >
        {data.blogs.map((blog) => (
          <SwiperSlide
            key={blog.id}
            className="shadow-lg group duration-300 cursor-pointer rounded-xl border overflow-hidden"
          >
            <div className="overflow-hidden">
              <Image
                className="w-full duration-200 lg:group-hover:scale-105"
                width={300}
                height={500}
                alt={blog.title}
                src={blog.image}
              />
            </div>
            <div className="text-center h-40 bg-white">
              <h1 className="font-bold text-xl mb-3 bg-slate-300 py-2">{blog.title}</h1>
              <TbEyeglass2 className="mx-auto text-[#196F7F] text-xl mb-2"/>
              <p className="text-slate-600 text-sm font-medium px-4">{blog.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
