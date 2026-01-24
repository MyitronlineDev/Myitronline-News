import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { getCategoryColor } from "../../utility/categoryColor";

const RightSidebar = ({ relatedNews = [] }) => {
  const navigate = useNavigate();

  const buildImageUrl = (base, path) => {
    if (!path) return "";
    return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  };

  if (!Array.isArray(relatedNews) || relatedNews.length === 0) {
    return null;
  }

  return (
    <aside className="col-span-12 lg:col-span-3">
      <div className="lg:sticky lg:top-28 space-y-6">

        <div className="bg-white border border-neutral-200 rounded-2xl shadow-md overflow-hidden">

          {/* HEADER */}
          <div className="px-4 py-3 border-b bg-gradient-to-r from-neutral-50 to-neutral-100 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <h3 className="text-sm font-semibold text-neutral-800 tracking-wide">
              Related Articles
            </h3>
          </div>

          {/* LIST */}
          <ul className="divide-y">
            {relatedNews.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() =>
                    navigate(`/detail-news/${item.slug}/myitronline`)
                  }
                  className="
                    group w-full text-left
                    flex gap-3 px-4 py-4
                    transition-all duration-300
                    hover:bg-neutral-50
                    hover:shadow-sm
                    focus:outline-none focus:bg-neutral-100
                  "
                >
                  {/* IMAGE */}
                  {item?.intro_image && (
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={buildImageUrl(
                          import.meta.env.VITE_API_INTRO_IMG,
                          item.intro_image
                        )}
                        alt={item.news_title}
                        className="
                          w-full h-full object-cover
                          transition-transform duration-300
                          group-hover:scale-110
                        "
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* TEXT */}
                  <div className="flex-1 text-sm leading-snug">
                    <p className="
                      font-semibold text-neutral-700
                      group-hover:text-black
                      line-clamp-2
                    ">
                      {item.news_title}
                    </p>

                    {item.category_name && (
                      <span
                        className={`
                          inline-block mt-1.5 px-2 py-0.5
                          rounded-full text-xs font-semibold
                          ${getCategoryColor(item.category_name)}
                        `}
                      >
                        {item.category_name}
                      </span>
                    )}
                  </div>

                  {/* ICON */}
                  <FiArrowRight
                    className="
                      mt-1 text-neutral-400
                      opacity-0 group-hover:opacity-100
                      group-hover:text-red-600
                      group-hover:translate-x-2
                      transition-all duration-300
                    "
                  />
                </button>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
