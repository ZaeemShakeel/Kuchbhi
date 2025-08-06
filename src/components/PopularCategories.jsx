import React from "react";
import laptop from "../data/Popular Categories/Electronics.webp";
import Furniture from "../data/Popular Categories/Furniture.webp";
import RealEstate from "../data/Popular Categories/Real-Estate.webp";
import Vehicle from "../data/Popular Categories/Vehicle.webp";
import Mobiles from "../data/Popular Categories/Mobiles.webp";
import BeautyProducts from "../data/Popular Categories/BeautyProducts.webp";
import Books from "../data/Popular Categories/Books.webp";
import HeadingTitle from "./HeadingTitle";

function PopularCategories() {
  const popData = [
    {
      img: laptop,
      title: "Electronics",
    },
    {
      img: Furniture,
      title: "Furniture",
    },
    {
      img: RealEstate,
      title: "Real Estate",
    },
    {
      img: Vehicle,
      title: "Vehicle",
    },
    {
      img: Mobiles,
      title: "Mobiles",
    },
    {
      img: BeautyProducts,
      title: "BeautyProducts",
    },
    {
      img: Books,
      title: "Books",
    },
  ];
  return (
    <div className="px-20 py-10">
      <HeadingTitle title="Explore Popular Categories in Pakistan for Buying & Selling" />
      <div className="flex items-center justify-evenly flex-wrap">
        {popData.map((items, index) => (
          <div className="w-1/8 flex flex-col items-center py-10 hover:group ">
            <div className="bg-gray-100 rounded-full w-40 h-40 flex justify-center items-center">
              <img
                src={items.img}
                alt=""
                className="p-5 hover:scale-105 hover:group transition-all duration-200 "
              />
            </div>
            <h3 className="text-lg font-medium  pt-2">{items.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;
