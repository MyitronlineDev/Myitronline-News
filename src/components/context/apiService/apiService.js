import axios from "axios";

const api = axios.create({
  baseURL: "https://www.apnokaca.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer Myitee@123",
  },
});

const localApi = axios.create({
  baseURL: "http://192.168.1.4:8089/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer Myitee@123",
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

export const featureData = async() => {
  try{
    const response = await localApi.get("/myitr-news/featured");
    return response.data;
  }catch (error){
    console.log("Error while fetching Features: ", error);
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
    const response = await api.get(
      `/myitr-news/show/${slug}/translate?lang=${lng}`
    );

    if (response.status === 200) {
      return response.data.news;
    }

    throw new Error("Invalid response");
  } catch (error) {
    console.error("Show News API error:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await localApi.get("/myitr-news/categories");
    return response.data;
  } catch (error) {
    console.error("Categories API error:", error);
    throw error;
  }
};

