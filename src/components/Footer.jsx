import React from "react";
import logo from "../assets/data/logo/KBLogo.webp";
import googleLogo from "../assets/data/logo/googleplay.png";

function Footer() {
  const footerData = [
    {
      heading: "Popular Categories",
      text1: "Electronics",
      text2: "Furniture",
      text3: "Real Estate",
      text4: "Vehicles",
      text5: "Mobiles",
    },
    {
      heading: "Trend Categories",
      text1: "Animals",
      text2: "Fashion & Beauty",
      text3: "Books Sports & Hobbies",
      text4: "Kids",
      text5: "Services",
    },
    {
      heading: "About Us",
      text1: "Privacy Policy",
      text2: "Terms and Conditions",
      text3: "Listing Ad Policy",
      text4: "Restricted Items Policy",
      text5: "Advertising",
      text6: "Contact Us",
      text7: "Help",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-between items-start gap-6 p-5">
        <div className="w-[200px]">
          <img src={logo} alt="logo" className="w-25 mb-2" />
          <p className="text-md border-b border-gray-300 w-35 ">
            Kuch Bhi Bikta Hai!
          </p>
          <p className="text-md">Sell anything!</p>
        </div>

        {footerData.map((items, index) => (
          <div key={index} className="w-[200px] flex flex-col items-start">
            <h3 className="font-semibold border-b border-gray-300 w-full mb-2">
              {items.heading}
            </h3>
            {items.text1 && <p className="text-sm">{items.text1}</p>}
            {items.text2 && <p className="text-sm">{items.text2}</p>}
            {items.text3 && <p className="text-sm">{items.text3}</p>}
            {items.text4 && <p className="text-sm">{items.text4}</p>}
            {items.text5 && <p className="text-sm">{items.text5}</p>}
            {items.text6 && <p className="text-sm">{items.text6}</p>}
            {items.text7 && <p className="text-sm">{items.text7}</p>}
          </div>
        ))}

        <div className="w-[200px]">
          <h2 className="font-semibold border-b border-gray-300 w-full mb-2">
            Get Our App
          </h2>
          <img src={googleLogo} alt="google playstore" className="w-32" />
        </div>
      </div>

      <div className="w-80 border-t border-gray-300 py-2 text-center text-sm m-auto">
        <p>
          Copyright © 2025 | Created by{" "}
          <a
            href="https://zaeemshakeel.netlify.app/"
            target="blank"
            className="underline font-semibold"
          >
            Zaeem Shakeel
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
