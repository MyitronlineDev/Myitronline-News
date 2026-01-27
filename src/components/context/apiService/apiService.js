import axios from "axios";

const api = axios.create({
  baseURL: "https://www.apnokaca.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_LIVE_TOKEN}`,
  },
});

const localApi = axios.create({
  baseURL: "http://192.168.1.4:8089/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_LOCAL_TOKEN}`,
  },
});

export const searchNews = async (query) => {
  try {
    const response = await api.get(
      `/news/search?query=${encodeURIComponent(query)}`
    );

    // expected: { status: true, results: [] }
    return response.data;
  } catch (err) {
    console.error("Search API error:", err);
    throw err;
  }
};

export const latestNews = async () => {
  try {
    const response = await api.get("/myitr-news/right-side");

    return response.data;
  } catch (error) {
    console.error("Latest News API error:", error);
    throw error;
  }
};

export const lendingPageNews = async () => {
  try {
    const response = await api.get("/myitr-news/latest");
    return response.data;
  } catch (error) {
    console.error("Lending Page News API error:", error);
    throw error;
  }
};

export const featureData = async () => {
  try {
    const response = await api.get("/myitr-news/featured");
    return response.data;
  } catch (error) {
    console.error("Error while fetching Features: ", error);
    throw error;
  }
};

export const globalRbiData = async () => {
  try{
    const response = await api.get("myitr-news/global-rbi");
    return response.data;
  }catch(error){
    console.error("Error while fetching Global RBI: ", error);
    throw error;
  }
}

export const fetchGstFinanceBudget = async () => {
  try {
    const response = await api.get("/myitr-news/group-new");
    return response.data;
  } catch (error) {
    console.log("Error while fetchin Data: ", error);
    throw error;
  }
}

export const contactUs = async (data) => {
  try {
    const response = await api.post("contact-us", data);
    return response.data;
  } catch (error) {
    console.error("Contact API error:", error);
    throw error;
  }
};

export const fetchDetailsNewsApi = async (slug, lng = "en") => {
  try {
    const response = await api.get(`/myitr-news/show/${slug}?lang=${lng}`);

    if (response.status === 200) {
      return response.data;
    }

    throw new Error("Invalid response");
  } catch (error) {
    console.error("Show News API error:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get("/myitr-news/categories");
    return response.data;
  } catch (error) {
    console.error("Categories API error:", error);
    throw error;
  }
};

export const getNewsByCategoryType = async (
  categoryId,
  type = "news,article",
) => {
  try {
    const response = await api.get(
      `/myitr-news/by-category-type?category_id=${categoryId}&type=${type}`,
    );
    return response.data;
  } catch (error) {
    console.error("News by category API error:", error);
    throw error;
  }
};
