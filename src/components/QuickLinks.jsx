import React from "react";
import HeadingTitle from "./HeadingTitle";
import laptop from "../assets/data/Popular Categories/Electronics.webp";

function QuickLinks() {
  return (
    <div>
      <HeadingTitle title="Most Searched Categories with Quick Links" />
      <div className="flex flex-col items-center border-2 border-gray-300 w-1/3">
        <div className="flex justify-end">
          <h2 className="font-bold text-lg">Electronics</h2>
        </div>
        <div className="flex justify-between items-center ">
          <img src={laptop} alt="laptop" className="w-10" />
          <p className="w-full">Buy Used Laptops</p>
        </div>
        <div className="flex justify-evenly items-center">
          <img src={laptop} alt="laptop" className="w-10" />
          <p>Buy Used Laptops</p>
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
