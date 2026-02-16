import { useEffect, useRef, useState } from "react";
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
  const [lang, setLang] = useState("en");
  const [loading, setLoading] = useState(false);

  const googleSelectRef = useRef(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        googleSelectRef.current = select;
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);


  const changeLanguage = (langCode) => {
    if (!googleSelectRef.current) return;

    if (googleSelectRef.current.value === langCode) return;

    googleSelectRef.current.value = langCode;
    googleSelectRef.current.dispatchEvent(new Event("change"));
    setLang(langCode);

    localStorage.setItem("siteLang", langCode);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("siteLang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);


  return (
    <div className="w-full bg-gray-100  z-50 ">
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
            <div className="hidden sm:flex items-center text-sm font-medium text-gray-700">

              <button
                onClick={() => changeLanguage("en")}
                className={`transition-colors duration-200 ${lang === "en"
                  ? "text-black font-semibold"
                  : "hover:text-black"
                  }`}
              >
                English
              </button>

              <span className="mx-2 text-gray-400">|</span>

              <button
                onClick={() => changeLanguage("hi")}
                className={`transition-colors duration-200 ${lang === "hi"
                  ? "text-black font-semibold"
                  : "hover:text-black"
                  }`}
              >
                हिंदी
              </button>

            </div>
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
              <LiveTime color="text-black" size="text-sm" showSeconds={false} />
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
