import React, { useState } from "react";
import HeadingTitle from "./HeadingTitle";
import { useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function ShopCards() {
  dayjs.extend(relativeTime);
  const [adsData, setAdsData] = useState([]);

  useEffect(() => {
    getAdsData();
  }, []);

  async function getAdsData() {
    const url = "https://4824.kuchbhi.io/ads/fetchAllAds";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setAdsData(response);
  }

  console.log(adsData, "log");

  return (
    <div className="px-20 my-10">
      <div className="flex justify-between items-center">
        <HeadingTitle title="Latest Free Ads Posted in Pakistan – Mobiles, Cars, Electronics & More" />
        <a href="/" className="text-lg font-extrabold">
          See all
        </a>
      </div>

      <div className="flex flex-wrap justify-between items-center cursor-pointer">
        {adsData &&
          adsData.length > 0 &&
          adsData.map((data) => (
            <div className="w-1/5 my-5 py-10">
              <div className="w-60 h-63 rounded-lg bg-gray-100 p-2">
                <img
                  src={data.images[0]}
                  alt="shoes"
                  className="w-full h-60 object-cover rounded"
                />

                <h3 className="text-sm font-semibold truncate text-red-700 pt-2">
                  {data.title}
                </h3>
                <div className="flex justify-between items-center py-1">
                  <p>Rs:{data.price}</p>
                  <p>{dayjs(data.createdAt).fromNow()}</p>
                </div>

                <p>{data.city}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShopCards;
