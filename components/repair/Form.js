import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Form = () => {
  const notify = () =>
    toast.success("!درخواست شما با موفقیت ارسال شد", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, family, phone, email, text }) => {
    notify();
  };
  return (
    <div className="py-10">
      <motion.div
        initial={{ opacity: 0, transform: "translateY(30%)" }}
        whileInView={{ opacity: 1, transform: "translateY(0%)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto p-5 bg-white rounded-lg shadow-lg"
      >
        <h1 className="font-bold text-xl text-slate-700">
          فرم درخواست تعمیر عینک شما
        </h1>
        <p className="text-gray-400 font-semibold mt-5">
          لطفا اطلاعات خواسته شده خود را وارد کنید تا همکاران ما در اولین فرصت
          با شما تماس بگیرند.
        </p>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-5 mt-10"
        >
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <div className="flex flex-col md:w-[50%]">
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
            <div className="flex flex-col md:w-[50%]">
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
            <div className="flex flex-col md:w-[50%]">
              <label htmlFor="email" className="text-gray-400 font-bold">
                ایمیل
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="ایمیل"
                className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
                {...register("email", {
                  required: "لطفا ایمیل خود را وارد کنید!",
                })}
              />
              {errors.email && (
                <div className="text-red-500 ">{errors.email.message}</div>
              )}
            </div>
            <div className="flex flex-col md:w-[50%]">
              <label htmlFor="phone" className="text-gray-400 font-bold">
                تلفن
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="تلفن"
                className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
                {...register("phone", {
                  required: "لطفا تلفن خود را وارد کنید!",
                })}
              />
              {errors.phone && (
                <div className="text-red-500 ">{errors.phone.message}</div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="text-gray-400 font-bold">
              متن درخواست
            </label>
            <textarea
              type="text"
              name="text"
              id="text"
              cols={30}
              rows={5}
              placeholder="متن درخواست"
              className="bg-gray-50 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
              {...register("text", {
                required: "لطفا متن درخواست را وارد کنید!",
              })}
            ></textarea>
            {errors.text && (
              <div className="text-red-500 ">{errors.text.message}</div>
            )}
          </div>
          <button
            type="submit"
            className="bg-green-600 border border-green-700 rounded-md py-2 px-4 font-bold text-white hover:text-black hover:bg-white duration-200 cursor-pointer"
          >
            ارسال
          </button>
        </form>
      </motion.div>
          <ToastContainer />
    </div>
  );
};

export default Form;
