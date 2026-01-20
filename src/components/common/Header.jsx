import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_CONTENT } from "./headerData";
import { useDevice } from "../context/DataProvider";

/* ================= FALLBACK NAV (FIXED ORDER) ================= */
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

  /* ================= CONTEXT DATA ================= */
  const { navbarData } = useDevice();

  /* ================= SAFE NAVBAR DATA ================= */
  const safeNavbarData =
    Array.isArray(navbarData) && navbarData.length > 0
      ? navbarData
      : FALLBACK_NAV;

  /* ================= REMOVE DUPLICATES (SAFETY) ================= */
  const NAV_LABELS = [...new Set(safeNavbarData.map((item) => item.name))];

  return (
    <nav className="bg-black text-white sticky top-0 z-50 mb-1">
      {/* ================= TOP BAR ================= */}
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
          {NAV_LABELS.map((label, i) => (
            <li key={`${label}-${i}`} className="relative group">
              <span className="cursor-pointer hover:text-yellow-300 transition">
                {label}
              </span>

              {/* DROPDOWN */}
              {(NAV_CONTENT[label] || []).length > 0 && (
                <div className="absolute left-0 top-full hidden group-hover:block">
                  <div className="mt-2 min-w-[180px] bg-gray-900 border border-gray-800 rounded shadow-lg">
                    {(NAV_CONTENT[label] || []).map((sub) => (
                      <Link
                        key={sub.route}
                        to={sub.route}
                        className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-yellow-300 transition"
                      >
                        {sub.label}
                      </Link>
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
          {NAV_LABELS.map((label, i) => (
            <div key={`${label}-${i}`} className="border-b border-gray-700">
              <button
                className="w-full px-4 py-3 flex justify-between items-center"
                onClick={() => setMobileIndex(mobileIndex === i ? null : i)}
              >
                <span>{label}</span>
                <span>{mobileIndex === i ? "−" : "+"}</span>
              </button>

              {mobileIndex === i && (
                <div className="bg-gray-800">
                  {(NAV_CONTENT[label] || []).map((sub) => (
                    <Link
                      key={sub.route}
                      to={sub.route}
                      className="block px-6 py-2 text-sm hover:bg-gray-700 hover:text-yellow-300 transition"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileIndex(null);
                      }}
                    >
                      {sub.label}
                    </Link>
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
