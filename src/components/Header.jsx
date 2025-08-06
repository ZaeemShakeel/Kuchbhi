import React from "react";
import logo from "../data/logo/KBLogo.webp";

function Header() {
  return (
    <div>
      <div className="h-22 flex justify-evenly items-center">
        <div className="w-1/3 flex justify-center items-center">
          <img src={logo} alt="Kuchbhi logo" className="w-20" />
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <div className=" flex justify-center items-center">
            <i className="fa-solid fa-location-dot"></i>
            <select name="Lahore" id="Lahore" className="text-sm text-gray-600">
              <option value="Lahore">Lahore</option>
            </select>
          </div>
          <div className=" p-2 border-2 border-gray-100 flex justify-evenly items-center rounded-3xl">
            <input type="text" name="" id="" placeholder="Search" />
            <select name="Category" id="Category">
              <option value="Category">All Category</option>
            </select>
          </div>
        </div>

        <div className="w-1/3 flex items-center justify-center">
          <button className="bg-black p-2 text-white rounded-3xl">
            Post AD
          </button>
          <i className="fa-solid fa-user"></i>
          <a href="/" className="text-blue-500 underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
