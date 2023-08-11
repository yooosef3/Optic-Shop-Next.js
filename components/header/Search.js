import React, { useContext, useState } from "react";

import { IconContext } from "../layout/Layout";
import { ImCross } from "react-icons/im";
import ProductCard from "../home/featured/ProductCard";
import { ProductsContext } from "../products/ProductsContextProvider";
import SearchInput from "./SearchInput";
import data from "../../data/data.json";

const Search = () => {
  const [icon, setIcon] = useContext(IconContext);
  const products = useContext(ProductsContext);
  const [searched, setSearched] = useState('');

  const filteredData = products.filter((product) =>
    product.name.toLowerCase().includes(searched.toLowerCase())
  );

  return (
    <div
      className={`bg-black bg-opacity-60 flex justify-center items-center ${
        icon.search ? "fixed inset-0" : "hidden"
      }`}
    >
      <div className="bg-slate-100 rounded-lg p-6 pt-10 w-[90vw] h-[90vh] overflow-auto">
        <ImCross
          onClick={() => setIcon(!icon.search)}
          className="absolute top-2  text-red-500 mx-auto hover:text-red-700 text-2xl duration-200 cursor-pointer"
        />
        <SearchInput search={{ searched, setSearched }} />
        <div className="flex flex-col flex-wrap mt-10 sm:flex-row sm:justify-center gap-5 overflow-y-hidden">
          {filteredData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
