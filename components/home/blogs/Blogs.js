import React from "react";
import Slider from "./Slider";

const Blogs = ({data }) => {
  return (
    <div
      className="bg-white py-14"
    >
      <h1 className="mb-10 lg:mb-16 font-bold text-lg lg:text-3xl text-center">
        عینک مناسب صورت شما کدام است؟
      </h1>
      <Slider data={data} />
    </div>
  );
};

export default Blogs;
