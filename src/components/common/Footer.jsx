import React from "react";

function Footer() {
    const BLUE = "#2f6bff";
  return (
    <footer className="bg-[#0b0b0b] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        {/* top row: logo + tagline (left) and small nav (right) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          {/* left block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-4">
              {/* logomark */}
              <div
                className="flex items-center justify-center h-14 w-14 rounded-md"
                style={{
                  background: `linear-gradient(135deg, ${BLUE}, #3b3bff)`,
                }}
                aria-hidden
              >
                {/* simple R mark; replace with actual logo SVG if available */}
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  aria-label="Renaz logo"
                >
                  <path d="M5 4h6a4 4 0 010 8H5V4z" fill="white" />
                  <path
                    d="M11 12l4 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="leading-tight">
                <div className="text-white text-2xl font-bold tracking-tight">
                  Renaz
                </div>
                {/* tagline row */}
                <div className="mt-2 text-xs text-gray-400 flex items-center gap-3">
                  <span>Honest</span>
                  <span className="hidden sm:inline-block h-3 border-l border-gray-600" />
                  <span>Journalism</span>
                  <span className="hidden sm:inline-block h-3 border-l border-gray-600" />
                  <span>Bravery</span>
                </div>
              </div>
            </div>
          </div>

          {/* right top nav (hidden on very small screens) */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Contact Us
            </a>
            <a
              href="#subscribe"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Subscribe
            </a>
            <a
              href="#podcast"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Podcast
            </a>
            <a
              href="#video"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Video
            </a>
            <a
              href="#longnews"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Long News
            </a>
          </nav>
        </div>

        {/* divider */}
        <div className="mt-6 border-t border-gray-800" />

        {/* bottom row */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm text-gray-300 md:pr-8 leading-relaxed">
            <span className="font-semibold text-white">Copyright:</span> Any
            unauthorized use or reproduction of{" "}
            <span className="font-semibold text-white">Renaz</span> content for
            commercial purposes is strictly prohibited and constitutes copyright
            infringement liable to legal action.
          </p>

          <div className="flex items-center gap-4">
            {/* social icons */}
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full hover:bg-gray-800"
              title="Facebook"
            >
              <svg
                className="h-5 w-5 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.22 8.44 9.88v-6.98H8.08v-2.9h2.36V9.41c0-2.33 1.38-3.62 3.5-3.62.99 0 2.03.18 2.03.18v2.23h-1.14c-1.13 0-1.48.7-1.48 1.42v1.71h2.52l-.4 2.9h-2.12v6.98C18.34 21.29 22 17.09 22 12.07z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Pinterest"
              className="p-2 rounded-full hover:bg-gray-800"
              title="Pinterest"
            >
              <svg
                className="h-5 w-5 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.1 2.5 7.59 6.02 9.05-.08-.77-.15-1.95.03-2.79.16-.73 1.05-4.68 1.05-4.68s-.27-.54-.27-1.34c0-1.25.72-2.18 1.62-2.18.76 0 1.12.57 1.12 1.25 0 .76-.48 1.9-.73 2.96-.2.9.42 1.64 1.24 1.64 1.49 0 2.64-1.57 2.64-3.84 0-1.99-1.43-3.38-3.47-3.38-2.37 0-3.77 1.77-3.77 3.59 0 .71.27 1.48.61 1.9.07.08.08.15.06.23-.06.25-.2.79-.22.9-.03.14-.09.17-.23.1-.86-.4-1.4-1.65-1.4-2.66 0-2.16 1.57-4.14 4.54-4.14 2.38 0 4.23 1.7 4.23 3.97 0 2.36-1.48 4.26-3.54 4.26-0.69 0-1.34-.36-1.56-.78 0 0-.37 1.42-.46 1.8-.17.66-.5 1.31-.8 1.82C9.9 22.8 10.94 23 12 23c5.52 0 10-4.48 10-11S17.52 2 12 2z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full hover:bg-gray-800"
              title="Instagram"
            >
              <svg
                className="h-5 w-5 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm6.5-.9a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1zM12 9a3 3 0 11-3 3 3 3 0 013-3z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="X"
              className="p-2 rounded-full hover:bg-gray-800"
              title="X / Twitter"
            >
              <svg
                className="h-5 w-5 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed right-8 bottom-1 h-12 w-12 rounded-full border-2 border-[#2f6bff] flex items-center justify-center text-[#2f6bff] bg-transparent hover:bg-[#2f6bff] hover:text-white transition"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden
        >
          <path
            d="M5 15l7-7 7 7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
