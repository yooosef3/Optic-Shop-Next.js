import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaCheckCircle } from "react-icons/fa";
import { IconContext } from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { addItem } from "../../redux/cartSlice";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [icon, setIcon] = useContext(IconContext);
  const items = useSelector((state) => state.cart.items);
  const cartItem = items.find((item) => item.id === product.id);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(50%)" }}
      whileInView={{ opacity: 1, transform: "translateY(0%)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mx-auto group w-fit p-5 pt-7 bg-white rounded-lg shadow-md hover:shadow-lg duration-700 h-72 flex flex-col justify-between"
    >
      {product && (
        <>
          <Link
            href={`/products/${product.id}`}
            onClick={() => setIcon(!icon.search)}
          >
            {router.pathname === "/products" ? (
              <div>
                <Image
                  className="duration-700 group-hover:hidden"
                  width={250}
                  height={300}
                  alt="eyeglass"
                  src={product.images[1]}
                />
                <Image
                  className="duration-700 hidden group-hover:block"
                  width={250}
                  height={300}
                  alt="eyeglass"
                  src={product.images[0]}
                />
              </div>
            ) : (
              <Image
                className="lg:group-hover:scale-105 duration-700"
                width={250}
                height={300}
                alt="eyeglass"
                src={product.images[1]}
              />
            )}
          </Link>
          <div className="text-center">
            <Link
              href={`/products/${product.id}`}
              onClick={() => setIcon(!icon.search)}
            >
              <h1 className="font-semibold text-xl hover:text-[#045868] duration-300 cursor-pointer w-fit mx-auto">
                {product.name}
              </h1>
            </Link>
            <span className="text-gray-400 text-sm font-medium">
              {product.brand}
            </span>
            <div className="flex justify-center items-center gap-2">
              <span className="text-green-600 text-lg font-bold mr-2">
                {product.price.toLocaleString()} تومان
              </span>
              <span className="text-gray-400 line-through text-sm">
               {product.noOff.toLocaleString()} تومان
              </span>
            </div>
            {cartItem ? 
              <FaCheckCircle className="mx-auto mt-5 text-green-600 text-2xl"/>
            :
            <button
              onClick={() => handleAddItem(product)}
              className="bg-cyan-600 hover:bg-cyan-500 shadow-md duration-300 cursor-pointer text-sm text-white font-semibold w-fit mx-auto px-3 py-1 rounded-lg mt-4"
            >
              افزودن به سبد خرید
            </button>
            }
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ProductCard;
