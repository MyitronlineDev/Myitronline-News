import { NavLink } from "react-router-dom";
import { formatDateDDMMYY } from "../utility/formatter";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const News = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) return null;

  const firstThree = data.slice(0, 3);
  const restNews = data.slice(3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      {/* HEADER */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">Latest News</h2>

      {/* ================= FEATURED GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
        {firstThree.map((item) => (
          <article
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            {/* IMAGE */}
            <NavLink to={`/detail-news/${item.slug}/myitronline`}>
              <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
                <img
                  src={`https://www.apnokaca.com/${item.intro_image}`}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="
                    absolute inset-0
                    w-full h-auto
                    object-cover object-center
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

                {/* CATEGORY */}
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-[11px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {item.category_name}
                </span>

                {/* DATE ON IMAGE */}
                <span className="absolute bottom-3 left-4 text-xs text-white/90">
                  {formatDateDDMMYY(item.published_at)}
                </span>
              </div>
            </NavLink>

            {/* CONTENT */}
            <div className="p-4">
              <NavLink to={`/detail-news/${item.slug}/myitronline`}>
                <h3 className="text-[18px] font-semibold text-gray-900 leading-snug hover:text-blue-600 transition line-clamp-2">
                  {item.title}
                </h3>
              </NavLink>
              <NavLink to={`/detail-news/${item.slug}/myitronline`}>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {item.synopsis}
                </p>
              </NavLink>

              {/* READ MORE */}
              <NavLink
                to={`/detail-news/${item.slug}/myitronline`}
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
              >
                Read more →
              </NavLink>
            </div>
          </article>
        ))}
      </div>

      {/* ================= LIST VIEW ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-12">
        {restNews.map((item) => (
          <article key={item.id} className="flex gap-6 items-start group">
            {/* IMAGE */}
            <NavLink to={`/detail-news/${item.slug}/myitronline`}>
              <div className="relative w-36 h-24 shrink-0 overflow-hidden rounded-xl bg-gray-200">
                <img
                  src={`https://www.apnokaca.com/${item.intro_image}`}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="
                    absolute inset-0
                    w-full h-auto
                    object-cover object-center
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>
            </NavLink>

            {/* CONTENT */}
            <div>
              {/* CATEGORY + DATE INLINE */}
              <div className="flex items-center gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
                <span className="font-semibold text-blue-600">
                  {item.category_name}
                </span>
                <span>•</span>
                <span>{formatDateDDMMYY(item.published_at)}</span>
              </div>

              {/* TITLE */}
              <NavLink to={`/detail-news/${item.slug}/myitronline`}>
                <h3 className="mt-1 text-[15px] font-semibold text-gray-900 leading-snug hover:text-blue-600 transition line-clamp-2">
                  {item.title}
                </h3>
              </NavLink>

              {/* READ MORE */}
              <NavLink
                to={`/detail-news/${item.slug}/myitronline`}
                className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
              >
                Read more →
              </NavLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default News;
