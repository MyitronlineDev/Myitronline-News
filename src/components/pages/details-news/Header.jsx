import { NavLink } from "react-router-dom";
import { formatDateDDMMYY } from "../../utility/formatter";

const Header = ({
  category,
  title,
  synopsis,
  heading,
  publishedAt,
  author = "Krishna-Gopal-Varahney",
  intro_image = "",
  setLang,
  lang
}) => {
  return (
    <header className="max-w-8xl mx-auto  grid-cols-12 sm:px-0 mb-10">


      {/* TOP ROW: CATEGORY + META */}
      <div className="flex flex-wrap items-center gap-3 mb-4 justify-between">

        <div className="flex">
          {category && (
            <span className="bg-blue-50 text-blue-700 uppercase tracking-wide text-xs font-semibold sm:px-3 py-1 rounded-full">
              {category}
            </span>
          )}

          {(publishedAt || author) && (
            <div className="flex items-center gap-3 text-xs text-neutral-500">
              {publishedAt && (
                <time dateTime={publishedAt}>
                  {formatDateDDMMYY(publishedAt)}
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

        <div className="flex gap-2">
          <button
            onClick={() => setLang("en")}
            className={`
            px-4 py-1.5 text-sm rounded-full transition-all duration-300 border
            ${lang === "en"
                      ? "bg-black text-white border-black shadow-sm"
                      : "bg-gray-200 text-gray-500 border-gray-300 hover:bg-gray-300 hover:text-black"}
          `}
          >
            English
          </button>

          <button
            onClick={() => setLang("hn")}
            className={`
            px-4 py-1.5 text-sm rounded-full transition-all duration-300 border
            ${lang === "hn"
                      ? "bg-black text-white border-black shadow-sm"
                      : "bg-gray-200 text-gray-500 border-gray-300 hover:bg-gray-300 hover:text-black"}
          `}
          >
            हिंदी
          </button>
        </div>

      </div>

      {/* MAIN TITLE */}
      {title && (
        <h1 className="text-3xl sm:text-4xl lg:text-5xl
        font-extrabold
        leading-tight
        tracking-tight
        wrap-break-word">
          {title}
        </h1>
      )}

      {/* SUB HEADING */}
      {heading && (
        <h2 className="mt-4 text-xl sm:text-2xl text-neutral-700 font-medium">
          {heading}
        </h2>
      )}


      {/* SYNOPSIS / LEAD */}
      {synopsis && (
        <p
          className="
          mt-6
          px-2
          sm:px-4 
          py-4
          text-lg sm:text-xl
          text-neutral-700
          italic
          font-serif
          border-l-4 border-red-600
          bg-linear-to-r from-yellow-50 to-white
          rounded-r-lg
          shadow-sm
          leading-[1.9]
          text-justify
          hyphens-auto
        "
        >
          {synopsis}
        </p>
      )}

      {/* DIVIDER */}
      <div className="mt-8 border-b border-neutral-300" />
    </header>
  );
};

export default Header;
