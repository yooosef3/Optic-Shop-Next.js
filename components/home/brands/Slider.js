import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import React from "react";
import brand1 from '../../../public/images/Arnette-logo-design.jpg'
import brand2 from '../../../public/images/Carrera-logo-design.jpg'
import brand3 from '../../../public/images/Costa-Del-Mar-logo-design.jpg'
import brand4 from '../../../public/images/Etnia-Barcelona-logo-design.jpg'
import brand5 from '../../../public/images/Maui-Jim-logo-design.jpg'
import brand6 from '../../../public/images/Oakley-logo-design.jpg'
import brand7 from '../../../public/images/Revo-logo-design.jpg'
import brand8 from '../../../public/images/Serengeti-logo-design.jpg'
import brand9 from '../../../public/images/Vuarnet-logo-design.jpg'

const brands = [
    {id:1, image: brand1},
    {id:2, image: brand2},
    {id:3, image: brand3},
    {id:4, image: brand4},
    {id:5, image: brand5},
    {id:6, image: brand6},
    {id:7, image: brand7},
    {id:8, image: brand8},
    {id:9, image: brand9},
]
const Slider = ({ data }) => {
  return (
    <>
      <Swiper
        breakpoints={{
          350: {
            spaceBetween: 20,
            slidesPerView: 2,
          },

          500: {
            spaceBetween: 20,
            slidesPerView: 3,
          },

          998: {
            spaceBetween: 20,
            slidesPerView: 4,
          },

          1200: {
            spaceBetween: 20,
            slidesPerView: 6,
          },
        }}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 4000,
        }}
        modules={[Navigation, Autoplay]}
        className="blogs-swiper w-[85%] xl:w-[75%]"
      >
        {brands.map((blog) => (
          <SwiperSlide
            key={blog.id}
            className="shadow-lg group duration-300 cursor-pointer rounded-xl border overflow-hidden"
          >
            <div className="overflow-hidden">
              <Image
                className="w-full duration-200 lg:group-hover:scale-105"
                width={500}
                height={300}
                alt={blog.title}
                src={blog.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
