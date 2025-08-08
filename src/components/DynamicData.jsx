import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDynamicData } from "../redux/slices/dynamicDataSlice";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function DynamicData({ category, title }) {
  const dispatch = useDispatch();
  const apiData = useSelector(
    (state) => state.dynamicData.data[category] || []
  );
  const loading = useSelector((state) => state.dynamicData.loading[category]);
  const error = useSelector((state) => state.dynamicData.error[category]);

  useEffect(() => {
    if (!apiData.length) {
      // fetch only if not already in store
      dispatch(fetchDynamicData(category));
    }
  }, [category, dispatch]);

  return (
    <div className="px-4 sm:px-10 md:px-20 my-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="font-bold sm:text-2xl text-lg text-red-700">{title}</h1>
        <a href="/" className="text-lg font-bold text-red-600 hover:underline">
          See all
        </a>
      </div>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <div className="flex flex-wrap justify-start gap-6 py-6">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {apiData.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="w-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 cursor-pointer my-10">
                  <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img
                      src={data.images?.[0]}
                      alt={data.title || "Ad Image"}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-red-700 truncate">
                      {data.title}
                    </h3>

                    <div className="flex justify-between items-center text-sm text-gray-700 pt-1">
                      <p>Rs: {data.price}</p>
                      <p>{dayjs(data.createdAt).fromNow()}</p>
                    </div>

                    <p className="text-xs text-gray-500 pt-1">{data.city}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default DynamicData;
