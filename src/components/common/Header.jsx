import React, { useState } from "react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  {
    label: "Income Tax",
    content: [
      { label: "Articles", route: "navbar/income-tax/article" },
      { label: "News", route: "/navbar/income-tax/news" },
      { label: "Circular", route: "/navbar/income-tax/circular" },
      { label: "Notifications", route: "/navbar/income-tax/notifications" },
      { label: "Judiciary", route: "/navbar/income-tax/judiciary" },
      { label: "ITR", route: "/navbar/income-tax/itr" },
    ],
  },
  {
    label: "Budget",
    content: [
      { label: "Budget 2025", route: "/navbar/budget/2025" },
      { label: "Budget 2024", route: "/navbar/budget/2024" },
      { label: "Budget 2023", route: "/navbar/budget/2023" },
      { label: "Budget 2022", route: "/navbar/budget/2022" },
    ],
  },
  {
    label: "Company Law",
    content: [
      { label: "Articles", route: "/navbar/company-law/article" },
      { label: "News", route: "/navbar/company-law/news" },
    ],
  },
  {
    label: "GST",
    content: [
      { label: "Articles", route: "/navbar/gst/article" },
      { label: "News", route: "/navbar/gst/news" },
      { label: "Circular", route: "/navbar/gst/circular" },
      { label: "Notifications", route: "/navbar/gst/notifications" },
      { label: "Notifications CGST", route: "/navbar/gst/notifications-cgst" },
      { label: "Notifications IGST", route: "/navbar/gst/notifications-igst" },
      { label: "Notifications SGST", route: "/navbar/gst/notifications-sgst" },
    ],
  },
  {
    label: "RBI",
    content: [
      { label: "Articles", route: "/navbar/rbi/article" },
      { label: "News", route: "/navbar/rbi/news" },
      { label: "Circular", route: "/navbar/rbi/circular" },
      { label: "Notifications", route: "/navbar/rbi/notifications" },
    ],
  },
  {
    label: "Finance",
    content: [
      { label: "Articles", route: "navbar/finance/article" },
      { label: "News", route: "/navbar/finance/news" },
      { label: "Notifications", route: "/navbar/finance/notifications" },
    ],
  },
  {
    label: "Corporate Law",
    content: [
      { label: "Articles", route: "/navbar/corporate-law/article" },
      { label: "News", route: "/navbar/corporate-law/news" },
      { label: "Notifications", route: "/navbar/corporate-law/notifications" },
    ],
  },
  {
    label: "Global News",
    content: [
      { label: "Articles", route: "/navbar/global/article" },
      { label: "News", route: "/navbar/global/news" },
    ],
  },
  {
    label: "Crypto",
    content: [
      { label: "Articles", route: "/navbar/crypto/article" },
      { label: "News", route: "/navbar/crypto/news" },
    ],
  },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(null);

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
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
