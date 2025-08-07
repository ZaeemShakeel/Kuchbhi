import React from "react";
import laptop from "../assets/data/Popular Categories/Electronics.webp";
import Furniture from "../assets/data/Popular Categories/Furniture.webp";
import RealEstate from "../assets/data/Popular Categories/Real-Estate.webp";
import Vehicle from "../assets/data/Popular Categories/Vehicle.webp";
import Mobiles from "../assets/data/Popular Categories/Mobiles.webp";
import BeautyProducts from "../assets/data/Popular Categories/BeautyProducts.webp";
import Books from "../assets/data/Popular Categories/Books.webp";
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
    <div className="px-5 sm:px-10 md:px-20  ">
      <HeadingTitle title="Explore Popular Categories in Pakistan for Buying & Selling" />
      <div className="flex items-center justify-evenly flex-wrap w-full">
        {popData.map((items, index) => (
          <div className="w-1/ flex flex-col items-center py-10 hover:group ">
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
