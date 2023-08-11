import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import ProductCard from "../home/featured/ProductCard";
import mainBg from "../../public/images/Pattern.webp";

const Products = ({ products }) => {
  const [sortOption, setSortOption] = useState("lowest");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(600000);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      product.price >= minPrice &&
      product.price <= maxPrice &&
      (selectedBrand === "" || product.brand === selectedBrand)
    );
  });

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (sortOption === "highest") {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  });

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${mainBg.src})` }}
        className="bg-cover bg-no-repeat bg-center"
      >
        <div className="mx-auto flex flex-col lg:flex-row lg:justify-start gap">
          <div className="w-[90%] py-20 lg:px-10 lg:bg-white md:w-[85%] lg:w-[30%] xl:w-[30%] mx-auto lg:ml-auto lg:mt-0">
            <section>
              <h1 className="text-slate-800 mb-5 text-xl font-bold">
                فیلتر محصولات براساس قیمت
              </h1>
              <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-center gap-4">
                <div>
                  <label className="text-slate-400 ml-2 font-bold">از</label>
                  <input
                    className="bg-gray-200 text-[#1B7988] font-bold w-[100%] h-10 rounded-md px-2 outline-none border focus:border-blue-600"
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-slate-400 ml-2 font-bold">تا</label>
                  <input
                    className="bg-gray-200 text-[#1B7988] font-bold w-[100%] h-10 rounded-md px-2 outline-none border focus:border-blue-600"
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
            </section>
            <section className="mt-14 ">
              <h1 className="text-slate-800 mb-5 text-xl font-bold">
                جستجوی محصولات براساس:
              </h1>
              <select
                className="w-full text-[#1B7988] font-bold h-11 bg-gray-200 border outline-none focus:border-blue-600 text-left rounded-md"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="lowest">ارزان ترین</option>
                <option value="highest">گران ترین</option>
              </select>
            </section>
            
            <section className="mt-14">
              <h1 className="text-slate-800 mb-5 text-xl font-bold">
                فیلتر محصولات براساس برند
              </h1>
              <select
                className="w-full text-[#1B7988] font-bold h-11 bg-gray-200 border outline-none focus:border-blue-600 text-left rounded-md"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">همه برندها</option>
                <option value="Arnette">Arnette</option>
                <option value="Vuarnet">Vuarnet</option>
                <option value="Oakley">Oakley</option>
                <option value="Serengeti">Serengeti</option>
                <option value="Maui Jim">Maui Jim</option>
                <option value="Carrera">Carrera</option>
                <option value="Costa Del Mar">Costa Del Mar</option>
                <option value="Etnia Barcelona">Etnia Barcelona</option>
                <option value="Revo">Revo</option>
              </select>
            </section>
            <section className="mt-14 ">
              <h1 className="text-slate-800 mb-5 text-xl font-bold">
                جستجوی محصولات
              </h1>
              <div className="relative h-12 shadow-lg">
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 focus:border-blue-500 bg-white outline-none h-full pr-2 text-lg font-semibold text-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جستجو..."
                />
                <FiSearch className="absolute left-2 top-4 text-gray-700 hover:text-red-600 duration-200 cursor-pointer" />
              </div>
            </section>
          </div>
          <div className="w-[90%] py-20 lg:px-10 lg:w-[70%] xl:w-[70%] mx-auto">
            <div className="flex relative flex-col gap-5 justify-center items-center sm:flex-row sm:flex-wrap">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
