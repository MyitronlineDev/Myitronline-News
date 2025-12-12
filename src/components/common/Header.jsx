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
    content: ["Articles", "News"],
  },
];

function Header() {
  const [openIndex, setOpenIndex] = useState(null); // index of open dropdown or null
  const navRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown; if same index clicked, close it
  function toggleIndex(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  // Keyboard toggle: Enter or Space
  function handleKeyToggle(e, i) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleIndex(i);
    } else if (e.key === "Escape") {
      setOpenIndex(null);
    }
  }

  return (
    <nav ref={navRef} className="w-full bg-black text-white mb-2">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-2">
        {/* Logo / Title */}
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-5xl font-bold">*</span>
          <div>
            <h1 className="text-xl font-semibold leading-tight">LifeNews</h1>
            <p className="text-xs text-gray-400 -mt-1">
              Fashion Trends and Culture
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-start ml-auto space-x-6 text-sm">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.label} className="relative">
              {/* NAV BUTTON */}
              <button
                onClick={() => toggleIndex(i)}
                onKeyDown={(e) => handleKeyToggle(e, i)}
                aria-expanded={openIndex === i}
                aria-controls={`dropdown-${i}`}
                className={`flex items-center uppercase tracking-wide pb-1 border-b-2 transition-all duration-200
        ${
          openIndex === i
            ? "text-yellow-400 border-yellow-400 font-semibold"
            : "text-white border-transparent hover:text-yellow-300 hover:border-yellow-300"
        }
      `}
              >
                {item.label}

                {/* Dropdown caret */}
                <svg
                  className={`ml-2 h-3 w-3 transition-transform duration-150 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* DROPDOWN PANEL */}
              <div
                id={`dropdown-${i}`}
                role="region"
                aria-labelledby={item.label}
                className={`origin-top-right absolute right-0 mt-3 w-48 rounded-md shadow-lg z-20 transform transition-all duration-200 ${
                  openIndex === i
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="rounded-md bg-gray-900 border border-gray-700 py-2">
                  {item.content.map((line, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 hover:text-yellow-300 focus:outline-none"
                      onClick={() => {
                        setOpenIndex(null);
                        console.log("Selected:", line);
                      }}
                    >
                      {line}
                    </button>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
