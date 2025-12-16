import React, { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  {
    label: "Income Tax",
    content: [
      "Articles",
      "News",
      "Circular",
      "Notifications",
      "Judiciary",
      "ITR",
    ],
  },
  {
    label: "Budget",
    content: ["Budget 2025", "Budget 2024", "Budget 2023", "Budget 2022"],
  },
  {
    label: "Company Law",
    content: ["Articles", "News"],
  },
  {
    label: "GST",
    content: [
      "Articles",
      "News",
      "Circular",
      "Notifications",
      "Notifications CGST",
      "Notifications IGST",
      "Notifications SGST",
    ],
  },
  {
    label: "RBI",
    content: ["Articles", "News", "Circular", "Notifications"],
  },
  {
    label: "Finance",
    content: ["Articles", "News", "Notifications"],
  },
  {
    label: "Corporate Law",
    content: ["Articles", "News", "Notifications"],
  },
  {
    label: "Global News",
    content: ["Articles", "News"],
  },
  {
    label: "Crypto",
    content: ["Updates", "News"],
  },
];

function Header() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  /* Close menus when clicking outside */
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenIndex(null);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleIndex(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <nav
      ref={navRef}
      className="w-full bg-black text-white shadow-lg sticky top-0 z-50 mb-2"
    >
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-5xl font-bold">*</span>
          <div>
            <h1 className="text-xl font-semibold leading-tight">LifeNews</h1>
            <p className="text-xs text-gray-400 mt-1">
              Fashion Trends and Culture
            </p>
          </div>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="ml-auto lg:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex ml-auto space-x-6 text-sm">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.label} className="relative">
              <button
                onClick={() => toggleIndex(i)}
                className={`flex items-center tracking-wide pb-1 border-b-2 transition-all duration-200
                    ${
                      openIndex === i
                        ? "text-yellow-400 border-yellow-400 font-semibold"
                        : "border-transparent hover:text-yellow-300 hover:border-yellow-300"
                    }`}
              >
                {item.label}
                <svg
                  className={`ml-2 h-3 w-3 transition-transform duration-150 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21L10 11.94l4.77-4.73" />
                </svg>
              </button>

              {/* Desktop Dropdown */}
              <div
                className={`absolute right-0 mt-3 w-52 rounded-md bg-gray-900 border border-gray-700 shadow-lg transform transition-all duration-200
                    ${
                      openIndex === i
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
              >
                {item.content.map((line) => (
                  <button
                    key={line}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 hover:text-yellow-300"
                    onClick={() => setOpenIndex(null)}
                  >
                    {line}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-700">
          {NAV_ITEMS.map((item, i) => (
            <div key={item.label} className="border-b border-gray-700">
              <button
                onClick={() => toggleIndex(i)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
              >
                {item.label}
                <span className="text-xl">{openIndex === i ? "−" : "+"}</span>
              </button>

              {openIndex === i && (
                <div className="bg-gray-800">
                  {item.content.map((line) => (
                    <button
                      key={line}
                      className="block w-full text-left px-6 py-2 text-sm hover:bg-gray-700 hover:text-yellow-300"
                      onClick={() => {
                        setOpenIndex(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {line}
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
