import { createContext, useContext, useEffect, useState } from "react";
import { getCache, setCache } from "../utility/cacheUtils";
import { getCategories, latestNews } from "./apiService/apiService";
import { formatDateDDMMYY } from "../utility/formatter";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [latestNewsData, setLatestNewsData] = useState([]);
  const [navbarData, setNavBarData] = useState([]);

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

  async function getNavbarData(){
    const cacheData = getCache("navbarData");
    if(cacheData){
      setNavBarData(cacheData);
      return;
    }
    try{
      const response = await getCategories();
      if(response?.status ){
        setNavBarData(response?.categories);
        setCache("navbarData", response?.categories, 24 * 60 * 60 * 1000);
        return;
      }
    }catch(error){
      console.error("Navbar error", error);
    }
  }

  useEffect(() => {
    latestNewsDisplay();
    getNavbarData();
  }, []);

  return(
    <DataContext.Provider value={{latestNewsData, navbarData}}>
        {children}
    </DataContext.Provider>
  )
};

export const useDevice = () => {
    return useContext(DataContext);
}
