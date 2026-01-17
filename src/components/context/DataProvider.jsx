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
  { name: "Corporate Law" },
  { name: "Finance" },
  { name: "Global News" },
];

export const DataProvider = ({ children }) => {
  const [latestNewsData, setLatestNewsData] = useState([]);
  const [navbarData, setNavBarData] = useState([]);

  /* ================= LATEST NEWS ================= */
  async function latestNewsDisplay() {
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
          category_name: item.category_name?.toUpperCase(),
          published_at: formatDateDDMMYY(item.published_at),
          news_title: item.news_title,
          synopsis: item.synopsis,
          slug: item.slug,
        }));

        setLatestNewsData(formattedNews);
        setCache("latestNews", formattedNews);
      }
    } catch (error) {
      console.error("Latest news error:", error);
    }
  }

  /* ================= NAVBAR DATA (FIXED ORDER) ================= */
  async function getNavbarData() {
    const cacheData = getCache("navbarData");
    if (cacheData) {
      setNavBarData(cacheData);
      return;
    }

    try {
      const response = await getCategories();

      if (response?.status && Array.isArray(response.categories)) {
        // Convert API response → fallback style
        const apiData = response.categories.map((item) => ({
          name: item.name,
        }));

        // Arrange according to fixed sequence
        const arrangedNavbar = NAVBAR_SEQUENCE
          .map(seq =>
            apiData.find(apiItem => apiItem.name === seq.name)
          )
          .filter(Boolean);

        setNavBarData(arrangedNavbar);

        // Cache FINAL navbar data
        setCache(
          "navbarData",
          arrangedNavbar,
          24 * 60 * 60 * 1000
        );
      }
    } catch (error) {
      console.error("Navbar error:", error);
    }
  }

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
