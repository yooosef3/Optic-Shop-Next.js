import React, { useContext } from "react";

import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { IconContext } from "../layout/Layout";

const RightSidebar = () => {
  const [icon, setIcon] = useContext(IconContext)
  return (
    <div className={`fixed shadow-xl z-20 top-0 h-full ${icon.menu ? 'right-0' : '-right-[250px]'} w-[250px] bg-[#106E80] duration-500 ease-linear`}>
      <div className="p-5 border-b border-gray-400">
        <CgClose onClick={() => setIcon({menu: !icon.menu})} className="text-2xl text-white hover:text-red-600 duration-200 cursor-pointer mr-auto" />
      </div>
      <div>
        <Link href='/'>
            <h1 className="text-white hover:bg-[#6CBFCC] duration-200 p-4 font-semibold text-xl">خانه</h1>
        </Link>
        <Link href='/products'>
            <h1 className="text-white hover:bg-[#6CBFCC] duration-200 p-4 font-semibold text-xl">محصولات</h1>
        </Link>
        <Link href='/repair'>
            <h1 className="text-white hover:bg-[#6CBFCC] duration-200 p-4 font-semibold text-xl">تعمیرات</h1>
        </Link>
        <Link href='/cart'>
            <h1 className="text-white hover:bg-[#6CBFCC] duration-200 p-4 font-semibold text-xl">سبد خرید</h1>
        </Link>
      </div>
    </div>
  );
};

export default RightSidebar;
