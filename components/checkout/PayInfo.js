import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { checkout, clearCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import { StepContext } from "./Checkout";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const PayInfo = () => {
  const { step, setStep } = useContext(StepContext);
  const router = useRouter();

  const cartItems = useSelector((state) => state.cart.items);

  const totalCost = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();

  const notify = () =>
    toast.success("!پرداخت با موفقیت انجام شد", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ name, card, expire, cvv2 }) => {
    notify();
    dispatch(clearCart())
    reset();
    setStep({ ...step, pay: true });
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-20 bg-white p-5 rounded-xl shadow-lg">
      <h1 className="text-xl text-slate-700 font-bold">اطلاعات پرداخت</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-5 mt-10"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-400 font-bold">
            نام روی کارت
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="نام روی کارت"
            className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600"
            {...register("name", {
              required: "لطفا نام روی کارت را وارد کنید!",
            })}
          />
          {errors.name && (
            <div className="text-red-500 ">{errors.name.message}</div>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="card" className="text-gray-400 font-bold">
            شماره کارت
          </label>
          <input
            type="text"
            name="card"
            id="card"
            placeholder="شماره کارت"
            className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
            {...register("card", {
              minLength: {
                value: 12,
                message: "شماره کارت باید 12 کاراکتر باشد!",
              },
              maxLength: {
                value: 12,
                message: "شماره کارت باید 12 کاراکتر باشد!",
              },
              required: "لطفا شماره  کارت را وارد کنید!",
            })}
          />
          {errors.card && (
            <div className="text-red-500 ">{errors.card.message}</div>
          )}
        </div>
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="expire" className="text-gray-400 font-bold">
              تاریخ انقضا
            </label>
            <input
              type="text"
              name="expire"
              id="expire"
              placeholder="سال/ماه"
              className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
              {...register("expire", {
                minLength: {
                  value: 5,
                  message: "تاریخ انقضا بجز / باید 4 عدد باشد!",
                },
                maxLength: {
                  value: 5,
                  message: "تاریخ انقضا بجز / باید 4 عدد باشد!",
                },
                required: "لطفا تاریخ انقضا را وارد کنید!",
              })}
            />
            {errors.expire && (
              <div className="text-red-500 ">{errors.expire.message}</div>
            )}
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="cvv2" className="text-gray-400 font-bold">
              cvv2
            </label>
            <input
              type="text"
              name="cvv2"
              id="cvv2"
              placeholder="cvv2"
              className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
              {...register("cvv2", {
                minLength: {
                  value: 3,
                  message: "cvv2 باید 3 کاراکتر باشد!",
                },
                maxLength: {
                  value: 3,
                  message: "cvv2 باید 3 کاراکتر باشد!",
                },
                required: "لطفا cvv2 را وارد کنید!",
              })}
            />
            {errors.cvv2 && (
              <div className="text-red-500 ">{errors.cvv2.message}</div>
            )}
          </div>
        </div>
        <div className="flex justify-between mb-8 items-center">
          <h1 className="font-semibold text-slate-700 text-lg">قیمت نهایی</h1>
          <h1 className="font-semibold text-slate-600 text-lg">
            {totalCost.toLocaleString()} تومان
          </h1>
        </div>
        {cartItems.length ? (
          <button
            type="submit"
            className="bg-yellow-800 border border-yellow-800 rounded-md py-2 px-4 font-bold text-white hover:text-black hover:bg-white duration-200 cursor-pointer"
          >
            پرداخت
          </button>
        ) : (
          <h1 className="bg-gray-300 cursor-not-allowed text-slate-700 border font-bold text-center rounded-md py-2">
            پرداخت
          </h1>
        )}
        <ToastContainer />
      </form>
    </div>
  );
};

export default PayInfo;
