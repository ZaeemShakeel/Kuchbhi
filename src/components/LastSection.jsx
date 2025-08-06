import React from "react";

function LastSection() {
  const cusData = [
    {
      head: "1000+",
      text: "Ads Posted",
    },
    {
      head: "899+",
      text: "Trusted Users",
    },
    {
      head: "799+",
      text: "Satisfied Buyers",
    },
  ];

  const cardData = [
    {
      icon: "📢",
      heading: "Post Free Classified Ads for Anything",
      text: "Post free ads anywhere in Pakistan — from Lahore to Karachi — within a minute.",
    },
    {
      icon: "🌍",
      heading: "Buyers from All Over Pakistan",
      text: "Your ads reach thousands of buyers daily across Pakistan — buyers actively looking for products like yours",
    },
    {
      icon: "💸",
      heading: "Bid on your Favorite Deals and Save",
      text: "Enjoy competitive bidding on products and get the best prices whether you're buying or selling.",
    },
    {
      icon: "🗂",
      heading: "Browser Classified Ads by Category",
      text: "Easily explore classified ads across popular categories like mobiles, electronics, vehicles, property, jobs, and more.",
    },
  ];

  return (
    <div className="my-20 flex flex-col items-center">
      <h1 className="font-bold text-2xl text-red-700 text-center">
        Why Post Free Ads on KuchBhi?
      </h1>
      <p className="text-wrap text-center py-5 text-gray-600">
        KuchBhi makes online buying and selling simple, fast, and completely
        free across Pakistan. Here’s why thousands of users trust us daily.
      </p>
      <div className="flex gap-50 py-5">
        {cusData.map((items) => (
          <div className="w-1/3">
            <h1 className="text-4xl font-bold">{items.head}</h1>
            <p className="text-md">{items.head}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between w-[80%] gap-5 py-10">
        {cardData.map((items) => (
          <div className="h-70 w-1/4 flex flex-col items-start justify-center gap-8 shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer p-2 rounded-2xl">
            <span className="text-4xl">{items.icon}</span>
            <h3 className="font-bold">{items.heading}</h3>
            <p className="text-wrap">{items.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastSection;
