import React from "react";
import BannerImg from "../assets/data/Banner/newBanner.webp";

function Hero() {
  return (
    <div className="flex flex-col justify-between items-center gap-4 my-6">
      <img
        src={BannerImg}
        alt="Banner"
        className="w-full sm:w-[90%] p-5 rounded-4xl"
      />
      <h1 className="text-lg font-medium text-center">
        <span className="font-bold text-3xl">
          Kuch <span className="text-red-600">Bhi</span> Bikta hai!
        </span>{" "}
        Mobiles, Electronics, Houses, Cars, Fashion, Furniture aur bhi Kuch Bhi.
        Buy and Sell in Pakistan
      </h1>
      <p className="text-center text-wrap w-full sm:w-200 text-sm md:text-lg text-gray-600">
        <b>KuchBhi</b> – Pakistan’s trusted online marketplace to{" "}
        <b> buy and sell new or used products </b> for free. From{" "}
        <b>electronics </b>
        and <b>mobiles</b> to <b>cars</b>, <b>property</b>, and{" "}
        <b>home appliances</b>, explore thousands of listings posted by real
        users. Post free ads, discover amazing deals, and bid on your favorite
        items – Kuch Bhi Bikta Hai!
      </p>
    </div>
  );
}

export default Hero;
