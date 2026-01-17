import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import LiveTime from "./liveClock/LiveTime";
import SearchInput from "./SearchInput";

import { searchNews } from "../context/apiService/apiService";
import { useNavigate } from "react-router-dom";

import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";


const TopBar = () => {
  const navigateTo = useNavigate()
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim().length < 3) {
      setSuggestions([]);
      return;
    }

    const fetchSearch = async () => {
      try {
        setLoading(true);
        const res = await searchNews(query.trim());

        setSuggestions(res?.results || []);
      } catch (err) {
        console.error(err);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchSearch, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  const handleSelect = (slug) => {
    setQuery(slug);
    setSuggestions([]);
    navigateTo(`/detail-news/${slug}/myitronline`)
    setOpenSearch(false);
  };

  return (
    <div className="w-full bg-gray-100 border-b z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          <img
            src="/logo.jpeg"
            alt="Myitronline logo"
            className="h-9 sm:h-10 w-auto"
            onClick={() => { navigateTo("/") }}
          />

          {/* Desktop Search */}
          <div className="hidden sm:flex flex-1 justify-center px-6">
            <SearchInput
              value={query}
              onChange={setQuery}
              suggestions={suggestions}
              onSelect={handleSelect}
              loading={loading}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center sm:gap-2 lg:gap-4">
            <div className="hidden md:flex gap-3 items-center">
              <a
                href="#"
                className="p-2 rounded-full border-b hover:bg-pink-500 hover:text-white transition"
              >
                <FaInstagram className="text-xl" />
              </a>

              <a
                href="#"
                className="p-2 rounded-full  border-b hover:bg-blue-600 hover:text-white transition"
              >
                <FaFacebookF className="text-xl" />
              </a>

              <a
                href="#"
                className="p-2 rounded-full  border-b hover:bg-black hover:text-white transition"
              >
                <FaXTwitter className="text-xl" />
              </a>
            </div>
            <div className="hidden sm:flex">
              <LiveTime color="text-black" size="text-sm" />
            </div>

            <button
              onClick={() => setOpenSearch(v => !v)}
              className="sm:hidden p-2 rounded-full hover:bg-gray-200"
            >
              <FiSearch size={20} />
            </button>
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
              loading={loading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
