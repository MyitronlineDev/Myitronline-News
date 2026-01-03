import { createContext, useContext, useEffect, useState } from "react";
import { getCache, setCache } from "../utility/cacheUtils";
import { latestNews } from "./apiService/apiService";
import { formatDateDDMMYY } from "../utility/formatter";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [latestNewsData, setLatestNewsData] = useState([]);

  async function latestNewsDisplay() {
    const cacheData = getCache("latestNews");
    if (cacheData) {
      setLatestNewsData(cacheData);
      return;
    }

    try {
      const response = await latestNews();

      if (response?.status) {
        const formattedNews = response.news.map((item) => ({
          id: item.id,
          category: item.category_name.toUpperCase(),
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

  useEffect(() => {
    latestNewsDisplay();
  }, []);

  return(
    <DataContext.Provider value={{latestNewsData}}>
        {children}
    </DataContext.Provider>
  )
};

export const useDevice = () => {
    return useContext(DataContext);
}
