import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "./headerData";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(null);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 mb-1">
      {/* TOP BAR */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
        <button
          className="ml-auto lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex mx-auto space-x-7 text-md">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="relative group">
              {/* MENU */}
              <span className="cursor-pointer hover:text-yellow-300">
                {item.label}
              </span>

              {/* DROPDOWN */}
              <div className="absolute left-0 top-full hidden group-hover:block">
                <div className="mt-2 w-45 bg-gray-900 border border-gray-800 rounded shadow-lg">
                  {item.content.map((sub) => (
                    <Link
                      key={sub.route}
                      to={sub.route}
                      className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-yellow-300"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-700">
          {NAV_ITEMS.map((item, i) => (
            <div key={item.label} className="border-b border-gray-700">
              <button
                className="w-full px-4 py-3 flex justify-between"
                onClick={() =>
                  setMobileIndex(mobileIndex === i ? null : i)
                }
              >
                {item.label}
                <span>{mobileIndex === i ? "−" : "+"}</span>
              </button>

              {mobileIndex === i && (
                <div className="bg-gray-800">
                  {item.content.map((sub) => (
                    <Link
                      key={sub.route}
                      to={sub.route}
                      className="block px-6 py-2 text-sm hover:bg-gray-700 hover:text-yellow-300"
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
