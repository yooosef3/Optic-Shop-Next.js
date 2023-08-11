import Link from "next/link";
import ProductCard from "./ProductCard";
import React from "react";

const FeaturedProducts = ({ data }) => {
  return (
    <div className="my-16 p-10 mx-10 shadow-sm border border-gray-300 rounded-md">
      <div className="flex justify-between">
        <h1 className="mb-10 font-bold text-sm lg:text-3xl">محصولات پرفروش</h1>
        <Link href="/products">
          <h1 className="text-gray-500 font-semibold hover:text-[#067699] text-sm lg:text-md duration-200">
            مشاهده تمام محصولات
          </h1>
        </Link>
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row sm:justify-center gap-5 ">
        {data.products.map((product) => {
          if (product.isFeatured) {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
