import Image from "next/image";
import React from "react";

const Item = ({ item:{images, name, quantity, price,} }) => {
  return (
    <div className="flex justify-between w-[95%] mx-auto my-4">
      <div className="h-10 w-[30%] ring ring-slate-100 rounded-md p-1 pt-3">
        <Image src={images[0]} width={70} height={70} alt={name} />
      </div>
      <div className="text-left">
        <h1 className="font-bold">{name}</h1>
        <div className="flex gap-3">
          <h1 className="text-red-600 font-bold">X{quantity}</h1>
          <h1 className="text-gray-400 font-bold">{(price*quantity).toLocaleString()} تومان</h1>
        </div>
      </div>
    </div>
  );
};

export default Item;
