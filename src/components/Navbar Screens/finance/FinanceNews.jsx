import React from "react";
import { FiTrendingUp } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function NewsPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">

      {/* ================= HEADER ================= */}
      <header className="relative overflow-hidden bg-white border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-white pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-red-600 text-white shadow-sm">
              <FiTrendingUp size={20} />
            </span>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-neutral-900">
                News
              </h1>
              <p className="text-xs text-neutral-500">
                Latest updates, breaking stories & insights
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            LIVE
          </div>
        </div>

        <div className="h-0.5 w-full bg-gradient-to-r from-red-600 via-red-400 to-transparent" />
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-6">

        {/* ================= MAIN NEWS ================= */}
        <section className="col-span-12 lg:col-span-8 space-y-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <article
              key={item}
              className="bg-white border border-neutral-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <img
                src={`https://picsum.photos/800/400?random=${item}`}
                alt="news"
                className="w-full h-48 object-cover"
              />


              <div className="p-5">
                <span className="text-xs font-semibold text-red-600">
                  Business
                </span>

                <h2 className="mt-1 text-lg font-semibold text-neutral-900 hover:text-red-600 cursor-pointer">
                  Market reacts to new economic policy updates
                </h2>

                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Stock markets showed mixed reactions as investors analyzed the
                  government’s latest policy announcements impacting inflation
                  and growth outlook.
                </p>

                <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
                  <span>By Admin • 2 hours ago</span>

                  <NavLink
                    to="#"
                    className="text-red-600 font-medium hover:underline"
                  >
                    Read more →
                  </NavLink>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="col-span-12 lg:col-span-4">
          <div className="space-y-6 lg:sticky lg:top-28">

            {/* Trending */}
            <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm">
              <div className="px-4 py-3 border-b flex items-center gap-2">
                <FiTrendingUp className="text-red-600" />
                <h3 className="text-sm font-semibold">Trending</h3>
              </div>

              <ul className="p-4 space-y-3 text-sm">
                {[
                  "Sensex hits record high",
                  "RBI interest rate decision",
                  "Startup funding drops",
                  "Budget 2025 expectations",
                ].map((t, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-neutral-700 hover:text-black cursor-pointer"
                  >
                    <span className="text-red-600 font-bold">#{i + 1}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-4">
              <h3 className="text-sm font-semibold mb-3">Popular Topics</h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Budget 2025",
                  "Stock Market",
                  "Economy",
                  "GST",
                  "Startups",
                  "Crypto",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-neutral-100 text-neutral-700 hover:bg-red-50 hover:text-red-600 cursor-pointer transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </aside>


      </main>
    </div>
  );
}

export default NewsPage;
