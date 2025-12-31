import { NavLink } from "react-router-dom";

const Header = ({
  category,
  title,
  synopsis,
  heading,
  publishedAt,
  author,
}) => {
  return (
    <header className="max-w-6xl mx-auto px-4 sm:px-0 mb-10">

      {/* TOP ROW: CATEGORY + META */}
      <div className="flex flex-wrap items-center gap-3 mb-4">

        {category && (
          <span className="bg-blue-50 text-blue-700 uppercase tracking-wide text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        )}

        {(publishedAt || author) && (
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            {publishedAt && (
              <time dateTime={publishedAt}>
                Updated {publishedAt}
              </time>
            )}

            {author && (
              <>
                <span className="text-neutral-300">|</span>
                <NavLink
                  to={`/author/myitronline/${author}`}
                  className="italic text-green-700 hover:text-blue-600 underline-offset-2 hover:underline transition"
                >
                  By {author}
                </NavLink>
              </>
            )}
          </div>
        )}
      </div>

      {/* MAIN TITLE */}
      {title && (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900">
          {title}
        </h1>
      )}

      {/* SUB HEADING */}
      {heading && (
        <h2 className="mt-4 text-xl sm:text-2xl text-neutral-700 font-medium max-w-4xl">
          {heading}
        </h2>
      )}  

      {/* SYNOPSIS / LEAD */}
      {synopsis && (
        <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-4xl border-l-4 border-blue-600 pl-4">
          {synopsis}
        </p>
      )}

      {/* DIVIDER */}
      <div className="mt-8 border-b border-neutral-300" />
    </header>
  );
};

export default Header;
