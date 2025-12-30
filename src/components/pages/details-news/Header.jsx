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
    <header className="max-w-6xl mx-auto px-4 sm:px-0 mb-12">

      <div className="flex flex-wrap items-center gap-4 mb-4">

        {category && (
          <span className="
            bg-red-600 text-white
            uppercase tracking-widest
            text-xs font-bold
            px-3 py-1 rounded-sm
          ">
            {category}
          </span>
        )}

        {(publishedAt || author) && (
          <div className="flex items-center gap-3 text-xs text-neutral-500">

            {publishedAt && (
              <time
                dateTime={publishedAt}
                className="font-medium"
              >
                Updated {publishedAt}
              </time>
            )}

            {author && (
              <>
                <span className="text-neutral-300">•</span>
                <NavLink
                  to={`/author/myitronline/${author}`}
                  className="
                    italic font-medium
                    text-red-600
                    hover:text-black
                    underline-offset-2
                    hover:underline
                    transition
                  "
                >
                  By {author}
                </NavLink>
              </>
            )}
          </div>
        )}
      </div>

      {title && (
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl
          font-extrabold
          leading-tight
          text-black
        ">
          {title}
        </h1>
      )}

      {heading && (
        <h2 className="
          mt-4
          text-xl sm:text-2xl
          text-neutral-800
          font-medium
          max-w-4xl
        ">
          {heading}
        </h2>
      )}

      {synopsis && (
        <p className="
          mt-6
          text-lg sm:text-xl
          text-neutral-700
          leading-relaxed
          max-w-4xl
          border-l-4 border-red-600
          pl-4
          italic
        ">
          {synopsis}
        </p>
      )}

      <div className="mt-8 border-b-2 border-neutral-900/10" />
    </header>
  );
};

export default Header;