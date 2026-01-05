import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const RightSidebar = () => {
  return (
    <aside className="col-span-12 lg:col-span-3">
      <div className="lg:sticky lg:top-28 space-y-6">

        {/* RELATED ARTICLES */}
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm overflow-hidden">

          {/* HEADER */}
          <div className="px-4 py-3 border-b bg-neutral-50 flex items-center gap-2">
            {/* SVG INDICATOR */}
            <svg
              className="w-4 h-4 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 10.172a4 4 0 015.656 5.656l-1.414 1.414a4 4 0 01-5.656-5.656M10.172 13.828a4 4 0 01-5.656-5.656l1.414-1.414a4 4 0 015.656 5.656"
              />
            </svg>

            <h3 className="text-sm font-semibold tracking-wide text-neutral-800">
              Related Articles
            </h3>
          </div>

          {/* LIST */}
          <ul className="divide-y text-sm">
            {[
              { title: "GST changes you should know", link: "#" },
              { title: "Income tax filing tips for 2025", link: "#" },
              { title: "Budget 2025: Key highlights", link: "#" },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className="
                    group
                    flex items-start gap-3
                    px-4 py-3
                    text-neutral-700
                    hover:bg-neutral-50
                    transition
                  "
                >
                  {/* DOT INDICATOR */}
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-red-500 transition" />

                  <span className="flex-1 leading-snug group-hover:text-black">
                    {item.title}
                  </span>

                  <FiArrowRight
                    className="
                      mt-1
                      text-neutral-400
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

        {/* INFO / PROMO CARD */}
        <div className="bg-gradient-to-br from-red-600 to-red-500 text-white rounded-2xl p-5 shadow-sm">
          <h4 className="font-semibold text-sm mb-1">
            Myitronline Insights
          </h4>
          <p className="text-xs text-white/90 leading-relaxed">
            Stay updated with verified business, finance & policy news curated
            by industry experts.
          </p>
        </div>

      </div>
    </aside>
  );
};

export default RightSidebar;
