import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import { IoMdPhonePortrait } from "react-icons/io";
import Link from "next/link";
import { MdOutlineFax } from "react-icons/md";
import React from "react";
import { RiTwitterLine } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import background from "../../public/images/steve-jobs-minimalism-wallpaper-2560x1080_14.jpg";
import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background.src})` }}
      className="bg-cover bg-center h-[100vh]  md:h-[65vh] lg:h-[40vh] relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute inset-0 p-10">
        <Link href="/">
          <Image width={90} height={30} alt="logo" src={logo} />
        </Link>
        <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
          <div className="col-span-1">
            <h1 className="font-bold text-white text-lg mb-4">
              شبکه های اجتماعی
            </h1>
            <ul className="flex flex-col gap-1">
              <Link href="https://www.instagram.com/" target="_blank">
                <div className="flex items-center gap-1  ">
                  <AiOutlineInstagram className="text-xl text-orange-700" />
                  <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                    farangis.ghanaei
                  </h1>
                </div>
              </Link>
              <Link href="https://www.twitter.com/" target="_blank">
                <div className="flex items-center gap-1  ">
                  <RiTwitterLine className="text-xl text-blue-500" />
                  <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                    Far_gh
                  </h1>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank">
                <div className="flex items-center gap-1  ">
                  <FaLinkedin className="text-xl text-blue-700" />
                  <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                    Farangis Ghanaei
                  </h1>
                </div>
              </Link>
              <Link href="https://www.facebook.com/" target="_blank">
                <div className="flex items-center gap-1  ">
                  <GrFacebookOption className="text-xl text-blue-700" />
                  <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                    Faran
                  </h1>
                </div>
              </Link>
            </ul>
          </div>
          <div className="col-span-1">
            <h1 className="font-bold text-white text-lg mb-4">
              راه های ارتباطی
            </h1>
            <ul className="flex flex-col gap-1">
              <Link href="tel:09011317458">
                <div className="flex items-center gap-1  ">
                  <IoMdPhonePortrait className="text-xl text-black" />
                  <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                    0901-131-7458
                  </h1>
                </div>
              </Link>
              <Link href="mailto:ghanaei.farangis78@gmail.com">
                <div className="flex items-center gap-1  ">
                  <HiOutlineMail className="text-xl text-green-700" />
                  <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  ghanaei.farangis78@gmail.com
                  </h1>
                </div>
              </Link>
              <Link href="https://www.google.com/" target="_blank">
                <div className="flex items-center gap-1  ">
                  <TbWorldWww className="text-xl text-blue-200" />
                  <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                    Google
                  </h1>
                </div>
              </Link>
              <Link href="/">
                <div className="flex items-center gap-1  ">
                  <MdOutlineFax className="text-xl text-yellow-600" />
                  <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                    478251-254754
                  </h1>
                </div>
              </Link>
            </ul>
          </div>
          <div className="col-span-1">
            <h1 className="font-bold text-white text-lg mb-4">صفحات</h1>
            <ul className="pr-5 flex flex-col gap-2">
              <Link href="/">
                <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  خانه
                </h1>
              </Link>
              <Link href="/products">
                <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  محصولات
                </h1>
              </Link>
              <Link href="/repair">
                <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  تعمیرات
                </h1>
              </Link>
              <Link href="/cart">
                <h1 className="text-slate-200 hover:text-slate-300 duration-300">
                  سبد خرید
                </h1>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
