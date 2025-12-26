import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.11:8089/api",
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
