import React from "react";
import { FaBolt } from "react-icons/fa"; 


const TRENDING_ITEMS = [
  "Finance",
  "Tax Services",
  "Budget",
  "Income Tax",
  "GST",
];

function Slidebar() {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 overflow-x-auto py-1">
      
      {/* Trending badge */}
      <div className="relative flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 text-xs sm:text-sm text-white">
        <FaBolt className="text-[10px] text-red-400" />
        <span className="font-semibold">Trending</span>

        {/* pointer tail */}
        <span className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-gray-800" />
      </div>

      {/* Trending items */}
      {TRENDING_ITEMS.map((item) => (
        <button
          key={item}
          type="button"
          className="whitespace-nowrap rounded-full border border-gray-300 bg-white px-3 py-1 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Slidebar;
