import React, { useContext } from "react";

import { StepContext } from "./Checkout";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const PersonInfo = () => {
  const { step, setStep } = useContext(StepContext);
  const cartItems = useSelector((state) => state.cart.items);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ name, family, phone, email }) => {
    reset();
    setStep({ ...step, person: true });
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-20 bg-white p-5 rounded-xl shadow-lg">
      <h1 className="text-xl text-slate-700 font-bold">اطلاعات شخصی</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-5 mt-10"
      >
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-gray-400 font-bold">
              نام
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="نام"
              className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
              {...register("name", {
                required: "لطفا نام خود را وارد کنید!",
              })}
            />
            {errors.name && (
              <div className="text-red-500 ">{errors.name.message}</div>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="family" className="text-gray-400 font-bold">
              نام خانوادگی
            </label>
            <input
              type="text"
              name="family"
              id="family"
              placeholder="نام خانوادگی"
              className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
              {...register("family", {
                required: "لطفا نام خانوادگی خود را وارد کنید!",
              })}
            />
            {errors.family && (
              <div className="text-red-500 ">{errors.family.message}</div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <div className="flex flex-col w-full">
            <label htmlFor="phone" className="text-gray-400 font-bold">
              تلفن
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="تلفن"
              className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
              {...register("phone", {
                pattern: {
                  value: /^(\+\d{1,3}[- ]?)?\d{11}$/,
                  message: "لطفا یک تلفن معتبر وارد کنید!",
                },
                required: "لطفا تلفن خود را وارد کنید!",
              })}
            />
            {errors.phone && (
              <div className="text-red-500 ">{errors.phone.message}</div>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-gray-400 font-bold">
              ایمیل
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ایمیل"
              className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
              {...register("email", {
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "لطفا یک ایمیل معتبر وارد کنید!",
                },
                required: "لطفا ایمیل خود را وارد کنید!",
              })}
            />
            {errors.email && (
              <div className="text-red-500 ">{errors.email.message}</div>
            )}
          </div>
        </div>
        <button
          disabled={!cartItems.length}
          type="submit"
          className={`${cartItems.length ? 'bg-blue-600 text-white hover:bg-blue-500 duration-200 cursor-pointer' : 'bg-slate-300 text-slate-600 cursor-not-allowed'} mt-8 w-20 rounded-md py-2 px-4 font-bold `}
        >
          بعدی
        </button>
      </form>
    </div>
  );
};

export default PersonInfo;
