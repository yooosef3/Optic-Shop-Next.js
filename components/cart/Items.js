import Item from "./Item";
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Items = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="bg-white p-8 lg:w-[70%] xl:w-[75%]">
      <motion.div
        initial={{ opacity: 0, transform: "translateY(50%)" }}
        whileInView={{ opacity: 1, transform: "translateY(0%)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-100 p-5 rounded-xl shadow-md max-h-[515px] flex flex-col gap-4 overflow-y-auto"
      >
        {cartItems.length === 0 ? (
          <p className="text-red-600 font-semibold text-center">سبد خرید شما خالی است!</p>
        ) : (
          cartItems.map((item) => <Item key={item.id} item={item}/>)
        )}
      </motion.div>
    </div>
  );
};

export default Items;
