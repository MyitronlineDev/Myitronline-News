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

export const latestNews = async () => {
  try {
    const response = await api.get("/myitr-news/right-side");

    return response.data;
  } catch (error) {
    console.error("Latest News API error:", error);
    throw error;
  }
};

export const lendingPageNews = async () =>  {
  try{
    const response = await api.get("/myitr-news/latest");
    return response.data;
  }
  catch(error){
    console.error("Lending Page News API error:", error);
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

// export const fetchDetailsNewsApi = async (slug) => {
//   try {
//     const response = await api.get(`/myitr-news/show/${slug}`);
//     if (response.status === 200) return response.data;

//   } catch (error) {
//     console.log("Show News API error:", error);
//     throw error;
//   }
// }
export const fetchDetailsNewsApi = async (slug) => {
  try {
    const response = await api.get(`/myitr-news/show/${slug}`);

    if (response.status === 200) {
      return response.data.news; // 👈 ONLY article
    }

    throw new Error("Invalid response");
  } catch (error) {
    console.error("Show News API error:", error);
    throw error;
  }
};

// export const translateText = async ({ text, from, to }) => {
//   const res = await fetch(
//     `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=${from}&to=${to}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Ocp-Apim-Subscription-Key": import.meta.env.VITE_TRANSLATOR_KEY,
//         "Ocp-Apim-Subscription-Region": import.meta.env.VITE_TRANSLATOR_REGION,
//       },
//       body: JSON.stringify([{ text }]),
//     }
//   );

//   const data = await res.json();

//   // 🔴 DEBUG (VERY IMPORTANT)
//   console.log("Translator API response:", data);

//   // ❌ If Azure returns error
//   if (!Array.isArray(data)) {
//     throw new Error(data?.error?.message || "Translation API error");
//   }

//   return data[0].translations[0].text;
// };
