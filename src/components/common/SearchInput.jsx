import { useEffect, useRef } from "react";

const IMAGE_BASE_URL = import.meta.env.VITE_API_BASE_URL

const SearchInput = ({
  value,
  onChange,
  suggestions = [],
  onSelect,
  placeholder = "Search news...",
  loading = false,
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        onChange("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [onChange]);

  const trimmedValue = value.trim();
  const showDropdown = trimmedValue.length > 0;

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full px-4 py-2.5 text-sm
          rounded-full bg-white
          border border-gray-200 shadow-sm
          focus:outline-none focus:border-blue-400
          focus:ring-2 focus:ring-blue-200
        "
      />


      {showDropdown && (
        <ul
          className="
          absolute left-0 right-0 mt-2
          bg-white rounded-xl shadow-xl
          ring-1 ring-black/5
          z-[60] max-h-80 overflow-auto
        "
        >
          {trimmedValue.length < 3 && (
            <li className="px-4 py-3 text-sm text-gray-500 text-center">
              Type at least 3 characters
            </li>
          )}

          {trimmedValue.length >= 3 && loading && (
            <li className="px-4 py-3 text-sm text-gray-500 text-center">
              Searching...
            </li>
          )}

          {trimmedValue.length >= 3 &&
            !loading &&
            suggestions.map((item) => (
              <li
                key={item.id}
                onClick={() => onSelect(item.slug)}
                className="
                flex gap-3 px-4 py-3 cursor-pointer
                hover:bg-blue-50 transition
              "
              >
                <img
                  src={`${IMAGE_BASE_URL}/${item.intro_image}`}
                  alt={item.title}
                  className="w-14 h-14 rounded-md object-cover flex-shrink-0"
                />

                <div className="flex flex-col">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2">
                    {item.title}
                  </p>

                  <span className="text-xs text-gray-500 mt-0.5">
                    {item.category} • {formatDate(item.published_at)}
                  </span>
                </div>
              </li>
            ))}

          {trimmedValue.length >= 3 &&
            !loading &&
            suggestions.length === 0 && (
              <li className="px-4 py-3 text-sm text-gray-500 text-center">
                No results found
              </li>
            )}

          {/* CATEGORY PILLS INSIDE SAME DROPDOWN */}
          <li className="px-4 py-3 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {["Income Tax", "Budget", "Gst", "RBI", "Finance", "Corporate Law", "Global News"].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => onSelect(cat)}
                    className="
                    px-3 py-1 text-xs font-medium
                    rounded-full border border-gray-300
                    bg-gray-100 hover:bg-blue-100 transition
                  "
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </li>
        </ul>
      )}

    </div>
  );
};

export default SearchInput;
