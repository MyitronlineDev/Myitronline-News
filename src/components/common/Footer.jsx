import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Block */}
          <div className="flex flex-col gap-4">
            <div className="leading-tight">
              <div className="text-white text-2xl font-bold tracking-tight">
                Renaz
              </div>

              {/* Tagline */}
              <div className="mt-3 text-xs text-gray-400 flex flex-wrap gap-3">
                <span>Honest</span>
                <span className="hidden sm:inline-block h-3 border-l border-gray-600" />
                <span>Journalism</span>
                <span className="hidden sm:inline-block h-3 border-l border-gray-600" />
                <span>Bravery</span>
              </div>
            </div>
          </div>

          {/* Navigation (Responsive) */}
          <div className="flex flex-wrap  gap-x-6 gap-y-3 text-sm">
            {[
              ["About Us", "#about"],
              ["Contact Us", "contact"],
              ["Subscribe", "#subscribe"],
              ["Podcast", "#podcast"],
              ["Video", "#video"],
              ["Long News", "#longnews"],
            ].map(([label, link]) => (
              <NavLink
                key={label}
                to={link}
                className="text-gray-300 hover:text-yellow-400 border-b border-transparent hover:border-yellow-400 pb-1 transition"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-800" />

        {/* BOTTOM ROW */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
            <span className="font-semibold text-white">Copyright:</span> Any
            unauthorized use or reproduction of{" "}
            <span className="font-semibold text-white">Renaz</span> content for
            commercial purposes is strictly prohibited and constitutes copyright
            infringement liable to legal action.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-1">
            {[
              {
                href: "https://www.facebook.com/profile.php?id=61576770940387",
                label: "Facebook",
                path: "M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H18l-.4 3h-2.9v7A10 10 0 0022 12z",
              },
              {
                href: "https://www.linkedin.com/company/taxa23/about/?viewAsMember=true",
                label: "LinkedIn",
                path: "M4.98 3.5A2.5 2.5 0 112.5 6a2.5 2.5 0 012.48-2.5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.7h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07v6.29h-4v-5.57c0-1.33-.02-3.04-1.86-3.04-1.87 0-2.16 1.46-2.16 2.95v5.66H9v-12z",
              },
              {
                href: "https://www.instagram.com/taxa232025/",
                label: "Instagram",
                path: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm6.5-.9a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z",
              },
              {
                href: "https://x.com/_taxa23",
                label: "X / Twitter",
                path: "M22 4.01c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.64 8.64 0 01-2.72 1.04 4.26 4.26 0 00-7.3 3.88 12.09 12.09 0 01-8.8-4.46 4.26 4.26 0 001.32 5.68 4.24 4.24 0 01-1.93-.54v.05a4.26 4.26 0 003.42 4.18 4.32 4.32 0 01-1.92.07 4.27 4.27 0 003.98 2.96 8.54 8.54 0 01-5.29 1.82c-.34 0-.68-.02-1.02-.06a12.08 12.08 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.39-.02-.58A8.72 8.72 0 0022 4.01z",
              },
            ].map(({ href, label, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-2 rounded-full hover:bg-gray-800 transition group"
              >
                <svg
                  className="h-5 w-5 text-gray-300 group-hover:text-yellow-400 transition"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
    