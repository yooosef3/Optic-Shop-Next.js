import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Keyboard, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import slide1 from "../../../public/images/hero-A.jpg";
import slide2 from "../../../public/images/hero-B.jpg";
import slide3 from "../../../public/images/hero-C.jpg";

const slides = [
  {
    id: 1,
    subTitle: "با لنزهای",
    highlight: "باکیفیت",
    title: "ما دید شفاف را تجربه کنید!",
    image: slide1,
  },
  {
    id: 2,
    subTitle: "با عینک های",
    highlight: "شیک",
    title: "ما دنیا را در نوری جدید ببینید!",
    image: slide2,
  },
  {
    id: 3,
    subTitle: "با قاب های",
    highlight: "مد روز",
    title: "ما ظاهر و دید خود را ارتقا دهید!",
    image: slide3,
  },
];

const Slider = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
        className="top-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="mt-[75px]">
            <div className="relative">
              <Image alt="slide" width={1600} height={1500} src={slide.image} />
              <div className="absolute inset-0">
                <div className="w-52 md:w-56 lg:w-72 xl:w-[550px] mt-[4%] xl:mt-[8%] ml-2 sm:ml-8 md:ml-16 lg:ml-32 text-[#065064] font-bold text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl lg:leading-[50px] xl:leading-[70px] mr-auto">
                  <span>{slide.subTitle} </span>
                  <span className="text-white">{slide.highlight} </span>
                  <span>{slide.title}</span>
                  <Link href="/products">
                    <h1 className="border border-white  text-white hover:bg-white duration-300 w-fit rounded-md hover:text-[#065064] mt-[10%] lg:mt-[20%] mx-auto px-4 pt-1 lg:text-3xl ">
                      خرید
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
