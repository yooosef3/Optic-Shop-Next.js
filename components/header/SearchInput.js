import { BsSearch } from "react-icons/bs";
import React from "react";

const SearchInput = ({search: {searched, setSearched}}) => {
  
  return (
    <div className="fixed w-[70%] left-0 right-0 top-5 z-10 lg:w-[60%] xl:w-[40%] mx-auto">
      <div className="relative h-14 shadow-md rounded-lg">
        <input
          value={searched}
          onChange={(e) => setSearched(e.target.value)}
          placeholder="جستجوی محصول"
          className="w-full bg-white h-full pr-2 rounded-md outline-none border focus:border-blue-500"
        />
        <BsSearch className="absolute left-3 top-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchInput;
