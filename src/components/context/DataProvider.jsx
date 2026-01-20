import { createContext, useContext, useEffect, useState } from "react";
import { getCache, setCache } from "../utility/cacheUtils";
import { getCategories, latestNews } from "./apiService/apiService";
import { formatDateDDMMYY } from "../utility/formatter";

/* ================= CONTEXT ================= */
const DataContext = createContext();

/* ================= FIXED NAVBAR ORDER (SOURCE OF TRUTH) ================= */
const NAVBAR_SEQUENCE = [
  { name: "Income Tax" },
  { name: "GST" },
  { name: "Budget" },
  { name: "RBI" },
  { name: "Finance" },
  { name: "Corporate Law" },
  { name: "Global News" },
];

export const DataProvider = ({ children }) => {
  const [latestNewsData, setLatestNewsData] = useState([]);
  const [navbarData, setNavbarData] = useState([]);

  /* ================= LATEST NEWS ================= */
  const latestNewsDisplay = async () => {
    const cacheData = getCache("latestNews");
    if (cacheData) {
      setLatestNewsData(cacheData);
      return;
    }

    try {
      const response = await latestNews();

      if (response?.status && Array.isArray(response.news)) {
        const formattedNews = response.news.map((item) => ({
          id: item.id,
          category: item.category_name?.toUpperCase() || "",
          date: formatDateDDMMYY(item.published_at),
          title: item.news_title,
          excerpt: item.synopsis,
          slug: item.slug,
        }));

        setLatestNewsData(formattedNews);
        setCache("latestNews", formattedNews);
      }
    } catch (error) {
      console.error("Latest News Error:", error);
    }
  };

  /* ================= NAVBAR DATA ================= */
  const getNavbarData = async () => {
    const cacheData = getCache("navbarData");
    if (cacheData) {
      setNavbarData(cacheData);
      return;
    }

    try {
      const response = await getCategories();

      if (response?.status && Array.isArray(response.categories)) {
        const apiData = response.categories.map((item) => ({
          name: item.name?.trim(),
        }));

        // Always maintain fixed order + fallback
        const arrangedNavbar = NAVBAR_SEQUENCE.map(
          (seq) =>
            apiData.find(
              (apiItem) =>
                apiItem.name?.toLowerCase() === seq.name.toLowerCase(),
            ) || seq,
        );

        setNavbarData(arrangedNavbar);

        setCache(
          "navbarData",
          arrangedNavbar,
          24 * 60 * 60 * 1000, // 24 hours
        );
      } else {
        setNavbarData(NAVBAR_SEQUENCE);
      }
    } catch (error) {
      console.error("Navbar Error:", error);
      setNavbarData(NAVBAR_SEQUENCE);
    }
  };

  /* ================= INITIAL LOAD ================= */
  useEffect(() => {
    latestNewsDisplay();
    getNavbarData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        latestNewsData,
        navbarData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

/* ================= CUSTOM HOOK ================= */
export const useDevice = () => useContext(DataContext);
