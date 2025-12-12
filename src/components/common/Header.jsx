// Header.jsx
import React, { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Income Tax", content: ["Articles", "News", "Circular", "Notifications", "Judiciary", "ITR"] },
  { label: "Budget", content: ["Budget 2025", "Budget 2024", "Budget 2023", "Budget 2022"] },
  { label: "Company Law", content: ["Articles", "News"] },
  { label: "GST", content: ["Articles", "News", "Circular", "Notifications", "Notifications CGST", "Notifications IGST", "Notifications SGST"] },
  { label: "RBI", content: ["Articles", "News", "Circular", "Notifications"] },
  { label: "Finance", content: ["Articles", "News", "Notifications"] },
  { label: "Corporate Law", content: ["Articles", "News", "Notifications"] },
  { label: "Global News", content: ["Articles", "News"] },
  { label: "Crypto", content: ["Articles", "News"] },
];

export default function Header() {
  const [openIndex, setOpenIndex] = useState(null); // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile panel open
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null); // which mobile submenu open
  const [logoFailed, setLogoFailed] = useState(false);
  const navRef = useRef(null);

  // Click outside closes desktop dropdown and (optionally) mobile panel
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleIndex(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  function handleKeyToggle(e, i) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleIndex(i);
    } else if (e.key === "Escape") {
      setOpenIndex(null);
    }
  }

  function toggleMobileIndex(i) {
    setMobileOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <header ref={navRef} className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm mb-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-12 py-1">
        {/* Logo */}
        <a href="/" aria-label="Homepage" className="flex items-center shrink-0">
          {!logoFailed ? (
            <img
              src="https://www.bing.com/th/id/OIP.m4-OECYBDEbySG3EhCSh7wHaHa?w=178&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&pid=3.1&rm=2&ucfimg=1"
              alt="Logo"
              onError={() => setLogoFailed(true)}
              className="h-14 w-16 md:h-12 md:w-12 rounded-md object-cover border border-gray-200 shadow-sm bg-white"
            />
          ) : (
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-semibold shadow-sm">
              T
            </div>
          )}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center ml-6 space-x-4 text-sm">
          {NAV_ITEMS.map((item, i) => (
            <div key={item.label} className="relative">
              <button
                onClick={() => toggleIndex(i)}
                onKeyDown={(e) => handleKeyToggle(e, i)}
                aria-expanded={openIndex === i}
                aria-controls={`dropdown-${i}`}
                className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                  openIndex === i ? "bg-yellow-50 text-yellow-600 font-semibold" : "hover:bg-gray-50 hover:text-yellow-500"
                }`}
              >
                <span>{item.label}</span>
                <svg className={`h-3 w-3 transition-transform ${openIndex === i ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>

              {/* desktop dropdown */}
              <div
                id={`dropdown-${i}`}
                role="menu"
                aria-labelledby={item.label}
                className={`absolute right-0 mt-2 min-w-[220px] z-30 transform transition-all duration-200 origin-top-right rounded-lg shadow-xl ${
                  openIndex === i ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="rounded-lg bg-white border border-gray-200 overflow-hidden">
                  <div className="-mt-3 flex justify-end pr-4">
                    <div className="w-3 h-3 rotate-45 bg-white border-t border-l border-gray-200 transform translate-y-1" />
                  </div>
                  <div className="py-2">
                    {item.content.map((line, idx) => (
                      <button
                        key={idx}
                        role="menuitem"
                        onClick={() => {
                          setOpenIndex(null);
                          console.log("Selected:", line);
                        }}
                        className="w-full text-left px-4 py-2 text-sm leading-6 hover:bg-gray-100 hover:text-yellow-600 focus:outline-none"
                      >
                        {line}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* right side actions (subscribe + hamburger) */}
        <div className="flex items-center gap-3">
         

          {/* hamburger - shown on mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            onClick={() => {
              setMobileOpen((v) => !v);
              setMobileOpenIndex(null);
            }}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`md:hidden transition-max-height duration-300 overflow-hidden ${mobileOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="px-4 pb-6 pt-2 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              {!logoFailed ? (
                <img
                  src="https://www.bing.com/th/id/OIP.m4-OECYBDEbySG3EhCSh7wHaHa?w=178&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&pid=3.1&rm=2&ucfimg=1"
                  alt="Logo"
                  className="h-8 w-8 rounded-full object-cover border border-gray-200 shadow-sm bg-white"
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-semibold">T</div>
              )}
              <span className="text-sm font-semibold">Menu</span>
            </div>
            <button onClick={() => setMobileOpen(false)} className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300" aria-label="Close menu">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414 5.707 15.707a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <nav className="space-y-1">
            {NAV_ITEMS.map((item, i) => (
              <div key={item.label} className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileIndex(i)}
                  className="w-full text-left flex items-center justify-between px-2 py-3 focus:outline-none"
                  aria-expanded={mobileOpenIndex === i}
                >
                  <span className="font-medium">{item.label}</span>
                  <svg className={`h-4 w-4 transition-transform ${mobileOpenIndex === i ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className={`pl-4 pr-2 overflow-hidden transition-max-height duration-300 ${mobileOpenIndex === i ? "max-h-60" : "max-h-0"}`}>
                  <div className="space-y-1 py-2">
                    {item.content.map((line, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileOpenIndex(null);
                          console.log("Selected:", line);
                        }}
                        className="w-full text-left px-2 py-2 text-sm text-gray-700 hover:text-yellow-600 focus:outline-none"
                      >
                        {line}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          
        </div>
      </div>
    </header>
  );
}
