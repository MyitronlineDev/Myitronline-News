import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NAV_CONTENT } from "./headerData";
import { useDevice } from "../context/DataProvider";
import navbarImg from "../../assets/navbarImg.png";

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

  return (
    <nav
      className="sticky top-4 z-50 w-[90%] max-w-4xl mx-auto bg-black/50 backdrop-blur-lg backdrop-saturate-150 border border-white/10 rounded-4xl px-6 text-black shadow-md shadow-black/10 my-2 bg-cover bg-center"
      style={{ backgroundImage: `url(${navbarImg})` }}
    >
      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-center relative">
        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex gap-8 text-md font-medium tracking-wide">
          {safeNavbarData.map((category) => (
            <li key={category.name} className="relative group">
              <span className="cursor-pointer hover:text-yellow-400 transition">
                {category.name}
              </span>

              {/* ===== DROPDOWN (WHITE + OLD HOVER) ===== */}
              {(NAV_CONTENT[category.name] || []).length > 0 && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block">
                  <div className="mt-3 min-w-[190px] bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden">
                    {(NAV_CONTENT[category.name] || []).map((sub) => (
                      <button
                        key={`${category.name}-${sub.type}`}
                        onClick={() => {
                          navigate(
                            `/navbar?id=${category.id}&type=${sub.type}`,
                          );
                          setMobileOpen(false);
                          setMobileIndex(null);
                        }}
                        className="
                          block w-full text-left px-6 py-2 text-sm
                          text-gray-800
                          hover:bg-gray-700 hover:text-yellow-300
                          transition
                        "
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

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="lg:hidden absolute right-4 text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-gray-900 border-t border-gray-800">
          {safeNavbarData.map((category, i) => (
            <div key={category.name} className="border-b border-gray-800">
              <button
                className="w-full px-4 py-3 flex justify-between items-center text-left"
                onClick={() => setMobileIndex(mobileIndex === i ? null : i)}
              >
                <span className="text-md font-medium">{category.name}</span>
                <span className="text-lg">{mobileIndex === i ? "−" : "+"}</span>
              </button>

              {/* ===== MOBILE DROPDOWN (WHITE + OLD HOVER) ===== */}
              {mobileIndex === i && (
                <div className="bg-white">
                  {(NAV_CONTENT[category.name] || []).map((sub) => (
                    <button
                      key={`${category.name}-${sub.type}`}
                      onClick={() => {
                        navigate(`/navbar?id=${category.id}&type=${sub.type}`);
                        setMobileOpen(false);
                        setMobileIndex(null);
                      }}
                      className="
                        block px-6 py-2.5 text-sm text-gray-800
                        hover:bg-gray-700 hover:text-yellow-400
                        transition
                      "
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;
