import React, { useState } from "react";
import {
  addItem,
  decreaseItem,
  increaseItem,
} from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import { AiFillMinusSquare } from "react-icons/ai";
import { BiAtom } from "react-icons/bi";
import { BsEyeglasses } from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWeightHanging } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { TbBrandBeats } from "react-icons/tb";
import { TbResize } from "react-icons/tb";

const SingleProduct = ({ product }) => {
  const [rating, setRating] = useState(4);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  const cartItem = items.find((item) => item.id === product.id);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleIncreaseItem = (itemId) => {
    dispatch(increaseItem(itemId));
  };

  const handleDecreaseItem = (itemId) => {
    dispatch(decreaseItem(itemId));
  };

  return (
    <div className="bg-white px-5 py-10 lg:w-[40%]">
      <div className="w-[90%] mx-auto md:w-[80%] lg:w-[90%]">
        <div>
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              className="text-2xl"
              key={value}
              style={{ color: value <= rating ? "gold" : "grey" }}
            >
              ★
            </span>
          ))}
          <h1 className="text-2xl lg:text-4xl mt-5 font-bold text-slate-700 mb-5">
            {product.name}
          </h1>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl md:text-4xl lg:text-2xl xl:text-4xl font-bold text-[#034a64]">
              {product.price.toLocaleString()} تومان
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold text-gray-400 line-through">
              {product.noOff.toLocaleString()} تومان
            </h1>
          </div>
          <p className="my-10 text-gray-700">{product.info}</p>
        </div>
        <div className="md:flex pt-8 md:justify-between md:items-center lg:flex-col lg:items-start">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <BsEyeglasses className="text-xl text-gray-500" />
              <h1 className="text-xl font-semibold">جزییات محصول</h1>
            </div>
            <div className="pr-2 flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <TbBrandBeats className="text-[#034a64]" />
                <h1 className="font-semibold text-slate-800">برند:</h1>
                <h1 className="text-gray-400 font-semibold">{product.brand}</h1>
              </div>
              <div className="flex items-center gap-4">
                <TbResize className="text-[#034a64]" />
                <h1 className="font-semibold text-slate-800">انداره:</h1>
                <h1 className="text-gray-400 font-semibold">{product.size}</h1>
              </div>
              <div className="flex items-center gap-4">
                <FaWeightHanging className="text-[#034a64]" />
                <h1 className="font-semibold text-slate-800">وزن:</h1>
                <h1 className="text-gray-400 font-semibold">
                  {product.weight}
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <BiAtom className="text-[#034a64]" />
                <h1 className="font-semibold text-slate-800">جنس:</h1>
                <h1 className="text-gray-400 font-semibold">
                  {product.material}
                </h1>
              </div>
            </div>
          </div>
          <div>
          <div className="my-6">
          <div className="flex gap-2 mb-3">
            <GiStarsStack className="text-[#034a64]"/>
            <h1 className="font-semibold text-slate-800">نظر شما:</h1>
          </div>
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                className="text-4xl cursor-pointer"
                key={value}
                style={{ color: value <= rating ? "gold" : "grey" }}
                onClick={() => handleStarClick(value)}
              >
                ★
              </span>
            ))}
          </div>
            <div className="flex justify-center items-center gap-10 mb-10">
              {cartItem ? (
                <div className="flex gap-2 items-center">
                  <BsFillPlusSquareFill
                    onClick={() => handleIncreaseItem(cartItem.id)}
                    className="text-green-600 text-2xl hover:text-green-700 rounded-sm cursor-pointer duration-200"
                  />
                  <span className="text-xl font-bold text-yellow-800">
                    {cartItem.quantity}
                  </span>
                  <AiFillMinusSquare
                    onClick={() => handleDecreaseItem(cartItem.id)}
                    className="text-red-600 text-3xl hover:text-red-700 rounded-full cursor-pointer duration-200"
                  />
                </div>
              ) : (
                <div>
                  <h1
                    onClick={() => handleAddItem(product)}
                    className="bg-[#034a64] hover:bg-[#033c51] duration-200 cursor-pointer rounded-md py-2 px-3 text-white font-semibold"
                  >
                    اضافه به سبد خرید
                  </h1>
                </div>
              )}
            </div>
            <div className="flex justify-center my-6 text-gray-400 text-xl gap-5">
              <FaLinkedinIn className="hover:text-blue-600 duration-200 cursor-pointer" />
              <FaTiktok className="hover:text-gray-900 duration-200 cursor-pointer" />
              <ImFacebook className="hover:text-blue-800 duration-200 cursor-pointer" />
              <ImTwitter className="hover:text-blue-500 duration-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
