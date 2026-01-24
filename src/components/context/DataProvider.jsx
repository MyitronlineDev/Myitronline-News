import { createContext, useContext, useEffect, useState } from "react";
import { getCache, setCache } from "../utility/cacheUtils";
import {
  getCategories,
  latestNews,
  getNewsByCategoryType,
} from "./apiService/apiService";
import { formatDateDDMMYY } from "../utility/formatter";

/* ================= CONTEXT ================= */
const DataContext = createContext();

/* ================= FIXED NAVBAR ORDER ================= */
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
  const [categoryNews, setCategoryNews] = useState([]);

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
          category: item.category_name?.toUpperCase(),
          date: formatDateDDMMYY(item.published_at),
          title: item.news_title,
          excerpt: item.synopsis,
          slug: item.slug,
        }));

        setLatestNewsData(formattedNews);
        setCache("latestNews", formattedNews);
      }
    } catch (error) {
      console.error("Latest news error:", error);
    }
  }

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
          id: item.id,
          name: item.name,
        }));

        const arrangedNavbar = NAVBAR_SEQUENCE.map((seq) =>
          apiData.find((a) => a.name === seq.name),
        ).filter(Boolean);

        setNavbarData(arrangedNavbar);
        setCache("navbarData", arrangedNavbar, 24 * 60 * 60 * 1000);
      }
    } catch (e) {
      console.error("Navbar error:", e);
    }
  };

  /* ================= CATEGORY NEWS (FIXED) ================= */
  const getCategoryNews = async (
    categoryId,
    types = ["news", "article"],
  ) => {
    if (!categoryId) {
      console.warn("Category ID missing");
      return;
    }

    try {
      // 🔒 FORCE STRING FOR BACKEND
      const safeType = Array.isArray(types)
        ? types.join(",")
        : types;

      const response = await getNewsByCategoryType(
        categoryId,
        safeType,
      );

      if (response?.status && Array.isArray(response.data)) {
        setCategoryNews(response.data);
      } else {
        setCategoryNews([]);
      }
    } catch (e) {
      console.error("Category news error:", e);
      setCategoryNews([]);
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
        categoryNews,
        getCategoryNews,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

/* ================= CUSTOM HOOK ================= */
export const useDevice = () => useContext(DataContext);
