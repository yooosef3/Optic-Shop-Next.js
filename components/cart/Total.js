import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BiDollarCircle } from "react-icons/bi";
import Link from "next/link";
import { MdProductionQuantityLimits } from "react-icons/md";
import { clearCart } from "../redux/cartSlice";

const Total = () => {
  const [code, setCode] = useState("");
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalCost = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  return (
    <div className="bg-[#106E80] p-8 lg:w-[30%] xl:w-[25%] ">
      <div className="md:w-[70%] lg:w-full mx-auto">
        <h1 className="text-slate-50 text-xl lg:text-2xl font-bold border-b border-gray-400 pb-8">
          خلاصه سفارش
        </h1>
        <div className="border-b border-gray-400 py-8 flex flex-col gap-4">
          <div className="flex items-center gap-5">
            <div className="flex gap-2 items-center">
              <MdProductionQuantityLimits className="text-slate-300" />
              <h1 className="font-bold text-slate-100">تعداد کل محصولات:</h1>
            </div>
            <h1 className={`${totalQuantity > 0 ? 'text-green-400' : 'text-gray-300'} text-lg font-bold`}>{totalQuantity}</h1>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex gap-2 items-center">
              <BiDollarCircle className="text-slate-300" />
              <h1 className="font-bold text-slate-100">قیمت کل:</h1>
            </div>
            <h1 className={`${totalCost > 0 ? 'text-yellow-400' : 'text-gray-300'} text-lg font-bold`}>{totalCost.toLocaleString()} تومان</h1>
          </div>
          <div className="pr-6 my-5">
            <h1 className="font-bold text-slate-100 mb-2">کد تخفیف</h1>
            <input
              className="border h-12 rounded-lg p-3 outline-none focus:border-blue-500 mb-4"
              placeholder="کد خود را وارد کنید"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <h1 className="bg-sky-500 hover:bg-sky-600 cursor-pointer duration-200 text-white font-bold w-fit text-center rounded-md px-6 py-2">
              اعمال
            </h1>
          </div>
        </div>
        <div className="py-8">
          <div className="flex justify-between mb-8 items-center">
            <h1 className="font-semibold text-slate-50 text-lg">قیمت نهایی:</h1>
            <h1 className={`${totalCost > 0 ? 'text-yellow-400' : 'text-gray-300'} text-xl font-bold`}>
              {totalCost.toLocaleString()} تومان
            </h1>
          </div>
          {cartItems.length ? (
            <Link href="/checkout">
              <h1 className="bg-yellow-500 hover:bg-white text-white hover:text-slate-800 cursor-pointer duration-200 font-bold text-center rounded-md py-2">
                پرداخت
              </h1>
            </Link>
          ) : (
            <h1 className="bg-gray-300 cursor-not-allowed text-slate-700 border font-bold text-center rounded-md py-2">
              پرداخت
            </h1>
          )}
          <h1
            onClick={handleClearCart}
            className="bg-red-600 hover:bg-red-800 mt-2 text-white cursor-pointer duration-200 font-bold text-center rounded-md py-2"
          >
            حذف کل محصولات
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Total;
