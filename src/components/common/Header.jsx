import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NAV_CONTENT } from "./headerData";
import { useDevice } from "../context/DataProvider";

/* ================= FALLBACK NAV ================= */
const FALLBACK_NAV = [
  { name: "Income Tax" },
  { name: "GST" },
  { name: "Budget" },
  { name: "RBI" },
  { name: "Finance" },
  { name: "Corporate Law" },
  { name: "Global News" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(null);
  const navigate = useNavigate();
  /* ================= CONTEXT ================= */
  const { navbarData } = useDevice();

  /* ================= SAFE NAVBAR DATA ================= */
  const safeNavbarData =
    Array.isArray(navbarData) && navbarData.length > 0
      ? navbarData
      : FALLBACK_NAV;

  /* ================= CLICK HANDLER ================= */
  // const handleDropdownClick = (category, subRoute) => {
  //   if (!category?.id) {
  //     console.warn("❌ Category ID missing", category);
  //     return;
  //   }

  //   // ✅ ALWAYS ARRAY
  //   let types = ["news", "article"];

  //   if (subRoute.includes("news")) {
  //     types = ["news"];
  //   } else if (subRoute.includes("article")) {
  //     types = ["article"];
  //   }

  //   getCategoryNews(category.id, types);
  // };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 mb-1">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
        {/* MOBILE TOGGLE */}
        <button
          className="ml-auto lg:hidden text-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex mx-auto space-x-7 text-md">
          {safeNavbarData.map((category, i) => (
            <li key={category.name} className="relative group">
              <span className="cursor-pointer hover:text-yellow-300 transition">
                {category.name}
              </span>

              {/* DROPDOWN */}
              {(NAV_CONTENT[category.name] || []).length > 0 && (
                <div className="absolute left-0 top-full hidden group-hover:block">
                  <div className="mt-2 min-w-[180px] bg-gray-900 border border-gray-800 rounded shadow-lg">
                    {(NAV_CONTENT[category.name] || []).map((sub) => (
                      <button
                        key={`${category.name}-${sub.type}`}
                        onClick={() => {
                          navigate(`/navbar?id=${category.id}&type=${sub.type || news}`);
                          setMobileOpen(false);
                          setMobileIndex(null);
                        }}
                        className="block w-full text-left px-6 py-2 text-sm hover:bg-gray-700 hover:text-yellow-300 transition"
                      >
                        {sub.label}
                      </button>

                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-700">
          {safeNavbarData.map((category, i) => (
            <div key={category.name} className="border-b border-gray-700">
              <button
                className="w-full px-4 py-3 flex justify-between items-center"
                onClick={() => setMobileIndex(mobileIndex === i ? null : i)}
              >
                <span>{category.name}</span>
                <span>{mobileIndex === i ? "−" : "+"}</span>
              </button>

              {mobileIndex === i && (
                <div className="bg-gray-800">
                  {(NAV_CONTENT[category.name] || []).map((sub) => (
                    // <Link
                    //   key={sub.route}
                    //   to={sub.route}
                    //   onClick={() => {
                    //     handleDropdownClick(category, sub.route);
                    //     setMobileOpen(false);
                    //     setMobileIndex(null);
                    //   }}
                    //   className="block px-6 py-2 text-sm hover:bg-gray-700 hover:text-yellow-300 transition"
                    // >
                    //   {sub.label}
                    // </Link>
                    <button
                      key={`${category.name}-${sub.type}`}
                      onClick={() => {
                        navigate(`/navbar?id=${category.id}&type=${sub.type || sub.news}`);
                        setMobileOpen(false);
                        setMobileIndex(null);
                      }}
                      className="block w-full text-left px-6 py-2 text-sm hover:bg-gray-700 hover:text-yellow-300 transition"
                    >
                      {sub.label}
                    </button>

                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Header;
