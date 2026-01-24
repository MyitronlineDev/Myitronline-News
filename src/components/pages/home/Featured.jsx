import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Featured = ({featuredItems}) => {

  const [startIndex, setStartIndex] = useState(0);
  const ITEMS_PER_SLIDE = 3;
  const SLIDE_STEP = 1;
  const endIndex = startIndex + ITEMS_PER_SLIDE;
  const navigate = useNavigate();

  const handleNext = () => {
    if (endIndex < featuredItems.length) {
      setStartIndex(startIndex + SLIDE_STEP);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - SLIDE_STEP);
    }
  };

  const handleNavigate = (slug) =>{
    navigate(`/detail-news/${slug}/myitronline`);
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 h-auto mb-4">

      {/* LEFT SECTION */}
      <div className="lg:col-span-3 grid px-4 ">
        <div className="">
          <h2 className="text-3xl font-bold">Featured</h2>
          <p className="text-gray-600 text-xl font-semibold">
            Most popular life news you must read today
          </p >
          <p className="text-gray-600 text-l font-semibold">Discover valuable resources and curated content crafted to help you grow.</p>
        </div>
      </div>

      {/* RIGHT SECTION — SWIPER */}
      <div className="lg:col-span-9 px-4">

        <div className="grid md:grid-cols-3 gap-2">
          {featuredItems.slice(startIndex, endIndex).map((item, i) => (
            <div 
              key={item.id}
              onClick={() => handleNavigate(item.slug)} 
              className="group cursor-pointer min-h-[280px] flex flex-col"
            >    
              {/* IMAGE */}
              <div className="relative h-40 w-full">
                <img
                  src={item.image}
                //   alt={item.title}
                  className="w-full h-full aspect-insta"
                />
                <span className="absolute border border-black -bottom-2 left-0 bg-white text-black text-xs font-semibold px-2 py-1 uppercase">
                  {item.category}
                </span>
              </div>

              {/* TEXT */}
              <h3 className="mt-4 font-semibold text-xl leading-tight">
                {item.title.length > 57 ? `${item.title.substring(0, 57)}...`: item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.date}</p>
            </div>
          ))}
        </div>

        {/* ARROWS */}
        <div className="flex items-center gap-6">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`${
              startIndex === 0 ? "opacity-40" : "opacity-100"
            } text-2xl`}
          >
            ←
          </button>

          <button
            onClick={handleNext}
            disabled={endIndex >= featuredItems.length}
            className={`${
              endIndex >= featuredItems.length ? "opacity-40" : "opacity-100"
            } text-2xl`}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
