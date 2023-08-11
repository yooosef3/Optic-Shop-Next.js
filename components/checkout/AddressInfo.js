import React, { useContext } from "react";

import { StepContext } from "./Checkout";
import { useForm } from "react-hook-form";

const AddressInfo = () => {
  const { step, setStep } = useContext(StepContext);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ province, city, location, postal, no }) => {
    reset();
    setStep({ ...step, address: true });
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-20 bg-white p-5 rounded-xl shadow-lg">
      <h1 className="text-xl text-slate-700 font-bold">ادرس</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-5 mt-10"
      >
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <div className="flex flex-col w-full">
            <label htmlFor="province" className="text-gray-400 font-bold">
              استان
            </label>
            <input
              type="text"
              name="province"
              id="province"
              placeholder="استان"
              className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
              {...register("province", {
                required: "لطفا نام استان خود را وارد کنید!",
              })}
            />
            {errors.province && (
              <div className="text-red-500 ">{errors.province.message}</div>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="city" className="text-gray-400 font-bold">
              شهر
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="شهر"
              className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
              {...register("city", {
                required: "لطفا نام شهر خود را وارد کنید!",
              })}
            />
            {errors.city && (
              <div className="text-red-500 ">{errors.city.message}</div>
            )}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="location" className="text-gray-400 font-bold">
            آدرس
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="آدرس"
            className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
            {...register("location", {
              required: "لطفا آدرس خود را وارد کنید!",
            })}
          />
          {errors.location && (
            <div className="text-red-500 ">{errors.location.message}</div>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-between md:justify-start">
          <div className="flex flex-col w-full md:w-[25%]">
            <label htmlFor="postal" className="text-gray-400 font-bold">
              کد پستی
            </label>
            <input
              type="number"
              name="postal"
              id="postal"
              placeholder="کد پستی"
              className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
              {...register("postal", {
                minLength: {
                  value: 10,
                  message: "کدپستی باید 10 کاراکتر باشد!",
                },
                maxLength: {
                  value: 10,
                  message: "کدپستی باید 10 کاراکتر باشد!",
                },
                required: "لطفا کدپستی خود را وارد کنید!",
              })}
            />
            {errors.postal && (
              <div className="text-red-500 ">{errors.postal.message}</div>
            )}
          </div>
          <div className="flex flex-col w-full md:w-[25%]">
            <label htmlFor="no" className="text-gray-400 font-bold">
              پلاک
            </label>
            <input
              type="number"
              name="no"
              id="no"
              placeholder="پلاک"
              className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
              {...register("no", {
                maxLength: {
                  value: 3,
                  message: "پلاک باید تا 3 عدد باشد!",
                },
                required: "لطفا پلاک خود را وارد کنید!",
              })}
            />
            {errors.no && (
              <div className="text-red-500 ">{errors.no.message}</div>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 w-20 rounded-md py-2 px-4 font-bold text-white hover:bg-blue-500 duration-200 mt-8 cursor-pointer"
        >
          بعدی
        </button>
      </form>
    </div>
  );
};

export default AddressInfo;
