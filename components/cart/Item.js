import { decreaseItem, increaseItem, removeItem } from "../redux/cartSlice";

import { FaMinus } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import { HiPlusCircle } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

const Item = ({ item, checkout }) => {
  const dispatch = useDispatch();

  const handleIncreaseItem = (itemId) => {
    dispatch(increaseItem(itemId));
  };

  const handleDecreaseItem = (itemId) => {
    dispatch(decreaseItem(itemId));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(50%)" }}
      whileInView={{ opacity: 1, transform: "translateY(0%)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow flex items-center justify-between p-4"
    >
      <Link href={`/products/${item.id}`}>
        <div className="flex items-center gap-10">
          <div className="rounded-full w-20 h-20 ring-4 ring-emerald-300 shadow-lg relative">
            <Image
              className="absolute inset-5 rounded-full"
              width={80}
              height={80}
              alt={item.name}
              src={item.images[0]}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-gray-600">{item.name}</h1>
            <h1 className="text-gray-400 font-semibold">{item.price.toLocaleString()} تومان</h1>
          </div>
        </div>
      </Link>

      {!checkout && (
        <h1
          className="
         text-gray-500 font-semibold text-lg hidden md:block"
        >
          {(item.price * item.quantity).toLocaleString()} تومان
        </h1>
      )}
      <HiOutlineTrash
        onClick={() => handleRemoveItem(item.id)}
        className={`text-red-600 cursor-pointer md:text-xl ${checkout ? 'md:order-2' : 'md:order-3'} `}
      />
      <div className={`flex flex-col ${checkout ? 'md:flex-row md:order-3' : 'md:flex-row md:order-2'}  items-center gap-1 md:gap-3 `}>
        <h1
          onClick={() => handleDecreaseItem(item.id)}
          className="shadow-md hover:shadow-lg border cursor-pointer flex justify-center items-center rounded-full w-7 h-7"
        >
          <FaMinus className="text-slate-600" />
        </h1>
        <h1 className="font-bold text-slate-700 md:mr-1">{item.quantity}</h1>
        <HiPlusCircle
          onClick={() => handleIncreaseItem(item.id)}
          className="text-teal-500 hover:text-teal-600 duration-200 cursor-pointer text-3xl "
        />
      </div>
    </motion.div>
  );
};

export default Item;
