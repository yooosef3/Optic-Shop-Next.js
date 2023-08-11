import Item from "../cart/Item";
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="bg-white py-20 lg:w-[42%]">
      <h1 className="text-slate-700 font-bold text-lg lg:text-xl text-center mb-7">
        سبد خرید شما
      </h1>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(50%)" }}
        whileInView={{ opacity: 1, transform: "translateY(0%)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-[90%] md:w-[60%] lg:w-[90%] mx-auto bg-slate-100 p-5 max-h-[490px] overflow-y-auto rounded-lg shadow-lg"
      >
        <div className="flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p className="text-red-600 font-semibold text-center">
              سبد خرید شما خالی است!
            </p>
          ) : (
            cartItems.map((item) => <Item key={item.id} checkout item={item} />)
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
