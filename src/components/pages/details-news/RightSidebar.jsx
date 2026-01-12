import { NavLink } from "react-router-dom";
import { FiArrowRight, FiTrendingUp, FiMail } from "react-icons/fi";

const RightSidebar = () => {
  return (
    <aside className="col-span-12 lg:col-span-3">
      <div className="lg:sticky lg:top-28 space-y-6">

        {/* ================= RELATED ARTICLES ================= */}
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b bg-neutral-50 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full" />
            <h3 className="text-sm font-semibold text-neutral-800">
              Related Articles
            </h3>
          </div>

          <ul className="divide-y">
            {[
              {
                title: "GST changes you should know",
                img: `https://picsum.photos/800/400?random=${1}`,
              },
              {
                title: "Income tax filing tips for 2025",
                img: `https://picsum.photos/800/400?random=${2}`,
              },
              {
                title: "Budget 2025: Key highlights",
                img: `https://picsum.photos/800/400?random=${3}`,
              },
              {
                title: "How inflation affects middle class",
                img: `https://picsum.photos/800/400?random=${4}`,
              },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to="#"
                  className="
                    group flex gap-3 px-4 py-3
                    hover:bg-neutral-50 transition
                  "
                >
                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      w-14 h-14 rounded-lg object-cover
                      flex-shrink-0
                    "
                  />

                  {/* TEXT */}
                  <div className="flex-1 text-sm text-neutral-700 leading-snug">
                    <p className="group-hover:text-black">
                      {item.title}
                    </p>
                  </div>

                  {/* ARROW */}
                  <FiArrowRight
                    className="
                      mt-1 text-neutral-400
                      opacity-0 group-hover:opacity-100
                      group-hover:text-red-600
                      group-hover:translate-x-1
                      transition
                    "
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= TRENDING NEWS (WITH IMAGE) ================= */}
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm">
          <div className="px-4 py-3 border-b flex items-center gap-2">
            <FiTrendingUp className="text-red-600" />
            <h3 className="text-sm font-semibold text-neutral-800">
              Trending Now
            </h3>
          </div>

          <ul className="p-4 space-y-4">
            {[
              {
                title: "Sensex hits all-time high",
                img: "https://source.unsplash.com/80x80/?stock,market",
              },
              {
                title: "RBI policy decision today",
                img: "https://source.unsplash.com/80x80/?rbi,bank",
              },
              {
                title: "Startup funding slows in 2025",
                img: "https://source.unsplash.com/80x80/?startup,funding",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <p className="text-sm text-neutral-700 hover:text-black cursor-pointer leading-snug">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= POPULAR TOPICS ================= */}
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-4">
          <h3 className="text-sm font-semibold mb-3 text-neutral-800">
            Popular Topics
          </h3>

          <div className="flex flex-wrap gap-2">
            {["GST", "Budget 2025", "Stock Market", "Startups", "Economy", "Crypto"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 text-xs rounded-full
                    bg-neutral-100 text-neutral-700
                    hover:bg-red-50 hover:text-red-600
                    cursor-pointer transition
                  "
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div className="bg-neutral-900 text-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <FiMail />
            <h4 className="font-semibold text-sm">
              Daily News Brief
            </h4>
          </div>

          <p className="text-xs text-white/80 mb-3">
            Get top business & policy headlines straight to your inbox.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-md text-sm text-black mb-2"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 text-sm py-2 rounded-md transition">
            Subscribe
          </button>
        </div>

      </div>
    </aside>
  );
};

export default RightSidebar;
