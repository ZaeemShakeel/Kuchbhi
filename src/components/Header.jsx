import React, { useState } from "react";
import logo from "../assets/data/logo/KBLogo.webp";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cateData = [
    { title: "Electronics" },
    { title: "Furniture" },
    { title: "Real Estate" },
    { title: "Vehicles" },
    { title: "Mobiles" },
    { title: "Animals" },
    { title: "Fashion & Beauty" },
    { title: "Books Sports & Hobbies" },
    { title: "Kids" },
    { title: "Services" },
  ];

  return (
    <div className="relative">
      <div className="px-4 py-2 bg-white shadow">
        <div className="flex flex-wrap justify-between items-center relative">
          <div className="absolute left-2 top-2 sm:hidden">
            <button onClick={() => setMenuOpen(true)} className="text-2xl">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          <div className="w-full sm:w-1/3 flex justify-center items-center mb-2 sm:mb-0">
            <img src={logo} alt="Kuchbhi logo" className="w-20" />
          </div>

          <div className="w-full sm:w-1/3 flex flex-col sm:flex-row justify-center items-center gap-2 mb-2 sm:mb-0">
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-location-dot"></i>
              <select
                name="Lahore"
                id="Lahore"
                className="text-sm text-gray-600"
              >
                <option value="Lahore">Lahore</option>
              </select>
            </div>
            <div className="p-2 border-2 border-gray-200 flex gap-2 items-center rounded-3xl w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="outline-none w-full sm:w-auto"
              />
              <select name="Category" id="Category" className="text-sm">
                <option value="Category">All Category</option>
              </select>
            </div>
          </div>

          <div className="w-full sm:w-1/3 flex justify-center items-center gap-2">
            <button className="bg-black px-4 py-2 text-white rounded-3xl">
              Post AD
            </button>
            <i className="fa-solid fa-user"></i>
            <a href="/" className="text-blue-500 underline">
              Login
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-wrap justify-center gap-4 items-center py-3 border-t border-b border-gray-300 bg-white">
        {cateData.map((item, index) => (
          <select key={index} className="px-3 py-1 cursor-pointer rounded">
            <option>{item.title}</option>
          </select>
        ))}
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center transition-all duration-300 sm:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-2xl"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div className="w-full px-8 flex flex-col gap-3 items-center">
            {cateData.map((item, index) => (
              <select
                key={index}
                className="w-full max-w-sm shadow px-4 py-2 rounded-md text-center"
              >
                <option>{item.title}</option>
              </select>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
