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
      <div className="h-22 flex justify-evenly items-center sm:flex-wrap px-4 py-2 border-b">
        <div className="sm:hidden w-1/3 flex justify-start">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className="w-1/3 flex justify-center items-center">
          <img src={logo} alt="Kuchbhi logo" className="w-20" />
        </div>

        <div className="w-1/3 sm:flex hidden items-center justify-center">
          <button className="bg-black p-2 text-white rounded-3xl mr-3">
            Post AD
          </button>
          <i className="fa-solid fa-user mr-1"></i>
          <a href="/" className="text-blue-500 underline">
            Login
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center transition-all duration-300">
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
                className="w-full max-w-sm border px-4 py-2 rounded-md text-center"
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
