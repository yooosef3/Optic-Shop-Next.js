import ItemsList from "./ItemsList";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const ItemsHistory = ({ toggleCart }) => {
  const items = useSelector((state) => state.cart.items);

  const totalPrice = items.reduce(
    (ac, item) => ac + item.quantity * item.price,
    0
  );
  return (
    <div
      className={`fixed top-16 w-[270px] shadow-lg bg-white max-h-[500px] ${
        toggleCart ? "flex flex-col" : "hidden"
      }  gap-4 rounded-lg p-5 right-1`}
    >
      {items.length > 0 ? (
        <h1 className="text-gray-500 border-b pb-2">
          <span className="text-green-600 ml-1 font-bold">{items.length}</span>
          محصول وجود دارد
        </h1>
      ) : (
        <h1 className="text-red-500 text-center border-b font-semibold pb-2">
          سبد خرید شما خالی است!
        </h1>
      )}
      <ItemsList items={items} />

      {items.length > 0 && (
        <div className="flex justify-between border-b pb-2">
          <h1 className="text-black font-bold">مجموع:</h1>
          <div className="text-green-600 font-bold">
            <span>{totalPrice.toLocaleString()} تومان</span>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-3">
        {items.length > 0 && (
          <>
            <Link
              className="text-white font-bold text-center py-2 h-10 rounded-lg bg-zinc-800  hover:bg-[#036679] duration-200"
              href="/cart"
            >
              مشاهده سبد خرید
            </Link>
            <Link
              className="text-white font-bold text-center py-2 h-10 rounded-lg bg-zinc-800  hover:bg-[#036679] duration-200"
              href="/checkout"
            >
              تسویه
            </Link>
          </>
        )}
        {/* <Link href="/orders">
          <h1 className="text-white font-bold text-center py-2 pt-[11px] h-10 bg-zinc-800 rounded-lg hover:bg-[#036679] duration-200">
            مشاهده سوابق خرید شما
          </h1>
        </Link> */}
      </div>
    </div>
  );
};

export default ItemsHistory;
