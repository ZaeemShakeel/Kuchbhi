import React from "react";

function Categories() {
  const cateData = [
    {
      title: "Electronics",
    },
    {
      title: "Furniture",
    },
    {
      title: "Real Estate",
    },
    {
      title: "Vehicles",
    },
    {
      title: "Mobiles",
    },
    {
      title: "Animals",
    },
    {
      title: "Fashion & Beauty",
    },
    {
      title: "Books Sports & Hobbies",
    },
    {
      title: "Kids",
    },
    {
      title: "Services",
    },
  ];

  return (
    <div className="flex justify-center gap-5 items-center p-2 border-b-[1px] border-t-[1px] border-gray-400 py-3">
      {cateData.map((items, index) => (
        <div className=" flex justify-center items-center">
          <select name="" id="">
            <option value="">{items.title}</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default Categories;
