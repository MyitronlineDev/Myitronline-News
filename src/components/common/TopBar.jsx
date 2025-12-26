import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ArticleMetaActions from "../pages/details-news/ArticleMetaActions";
import LiveTime from "./liveClock/LiveTime";
import SearchInput from "./SearchInput";
import articles from "../pages/details-news/data/articles";

const TopBar = () => {
  const [query, setQuery] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  // Suggestions logic
  const suggestions = useMemo(() => {
    if (!query) return [];

    return articles
      .filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5);
  }, [query]);

  const handleSelect = (title) => {
    setQuery(title);
    setOpenSearch(false);
  };

  return (
    <div className="w-full bg-gray-100 border-b z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src="/MyitronlineLogo.svg"
            alt="Myitronline logo"
            className="h-9 sm:h-10 w-auto"
          />

          {/* Desktop Search */}
          <div className="hidden sm:flex flex-1 justify-center px-6">
            <SearchInput
              value={query}
              onChange={setQuery}
              suggestions={suggestions}
              onSelect={handleSelect}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center sm:gap-2 lg:gap-4">
            <div className="hidden sm:flex">
              <LiveTime color="text-black" size="text-sm" />
            </div>

            {/* Mobile search toggle */}
            <button
              onClick={() => setOpenSearch(v => !v)}
              className="sm:hidden p-2 rounded-full hover:bg-gray-200"
            >
              <FiSearch size={20} />
            </button>

            <div className="hidden sm:flex">
              <ArticleMetaActions />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {openSearch && (
          <div className="mt-2 sm:hidden">
            <SearchInput
              value={query}
              onChange={setQuery}
              suggestions={suggestions}
              onSelect={handleSelect}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
