import React, { useEffect, useMemo, useState } from "react";
import LendingPage from "./LendingPage";
import Featured from "./Featured";
import Technology from "./Technology";
import TvSection from "./TvSection";
import FashionStay from "./FashionStay";
import CalibrityFood from "./CalibrityFood";
import LatestNews from "./LatestNews";
import {
  featureData,
  fetchGstFinanceBudget,
  globalRbiData,
  lendingPageNews,
} from "../../context/apiService/apiService";
import { getCache, setCache } from "../../utility/cacheUtils";
import { useDevice } from "../../context/DataProvider";
import { formatDateDDMMYY } from "../../utility/formatter";
import { buildImageUrl } from "../../utility/imageUtils";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [featuredData, setFeaturedData] = useState([]);
  const [gstData, setGstData] = useState([]);
  const [budgetData, setBudgetData] = useState([]);
  const [financeData, setFinanceData] = useState([]);
  const [globalRBIData, setGlobalRBIData] = useState(null);

  const { latestNewsData } = useDevice();
  const leftNews = [
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title: "Rovio reports strong mobile gaming growth in 2019",
      excerpt:
        "The Angry Birds maker recorded better-than-expected growth driven by mobile ads and in-game purchases...",
    },
    {
      category: "BUSINESS",
      date: "02/16/2019",
      title: "Global markets rise as investors react to trade optimism",
      excerpt:
        "Stocks climbed worldwide after positive signals from ongoing trade negotiations between major economies...",
    },
    {
      category: "SPORTS",
      date: "02/17/2019",
      title: "India clinches last-over thriller in T20 series",
      excerpt:
        "A stunning performance in the final over sealed a dramatic victory and thrilled fans across the country...",
    },
    {
      category: "ENTERTAINMENT",
      date: "02/18/2019",
      title: "New blockbuster film breaks opening weekend records",
      excerpt:
        "The much-awaited release smashed box office expectations with massive global ticket sales...",
    },
    {
      category: "HEALTH",
      date: "02/19/2019",
      title: "Experts recommend daily walking for heart health",
      excerpt:
        "Doctors say even 30 minutes of walking a day can significantly reduce the risk of heart disease...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/20/2019",
      title: "AI startups attract record funding in early 2019",
      excerpt:
        "Venture capital investment in artificial intelligence companies continues to surge globally...",
    },
    {
      category: "BUSINESS",
      date: "02/21/2019",
      title: "Startup layoffs highlight challenges in tech sector",
      excerpt:
        "Several fast-growing startups announced workforce reductions amid rising operational costs...",
    },
    {
      category: "SPORTS",
      date: "02/22/2019",
      title: "Football club announces new head coach",
      excerpt:
        "The management confirmed a major coaching change ahead of the upcoming season...",
    },
    {
      category: "ENTERTAINMENT",
      date: "02/23/2019",
      title: "Music streaming platforms see surge in subscribers",
      excerpt:
        "Exclusive releases and affordable plans are driving user growth across major platforms...",
    },
    {
      category: "HEALTH",
      date: "02/24/2019",
      title: "Study links better sleep habits to improved focus",
      excerpt:
        "Researchers found that consistent sleep schedules can enhance productivity and mental clarity...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title: "Rovio reports strong mobile gaming growth in 2019",
      excerpt:
        "The Angry Birds maker recorded better-than-expected growth driven by mobile ads and in-game purchases...",
    },
    {
      category: "BUSINESS",
      date: "02/16/2019",
      title: "Global markets rise as investors react to trade optimism",
      excerpt:
        "Stocks climbed worldwide after positive signals from ongoing trade negotiations between major economies...",
    },
    {
      category: "SPORTS",
      date: "02/17/2019",
      title: "India clinches last-over thriller in T20 series",
      excerpt:
        "A stunning performance in the final over sealed a dramatic victory and thrilled fans across the country...",
    },
    {
      category: "ENTERTAINMENT",
      date: "02/18/2019",
      title: "New blockbuster film breaks opening weekend records",
      excerpt:
        "The much-awaited release smashed box office expectations with massive global ticket sales...",
    },
    {
      category: "HEALTH",
      date: "02/19/2019",
      title: "Experts recommend daily walking for heart health",
      excerpt:
        "Doctors say even 30 minutes of walking a day can significantly reduce the risk of heart disease...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/20/2019",
      title: "AI startups attract record funding in early 2019",
      excerpt:
        "Venture capital investment in artificial intelligence companies continues to surge globally...",
    },
    {
      category: "BUSINESS",
      date: "02/21/2019",
      title: "Startup layoffs highlight challenges in tech sector",
      excerpt:
        "Several fast-growing startups announced workforce reductions amid rising operational costs...",
    },
    {
      category: "HEALTH",
      date: "02/24/2019",
      title: "Study links better sleep habits to improved focus",
      excerpt:
        "Researchers found that consistent sleep schedules can enhance productivity and mental clarity...",
    },
  ];

  // const landingPageData = {
  //   featured: {
  //     category: "Celebrities",
  //     author: "Vaughan Chance",
  //     title:
  //       "Cardi B Deletes Instagram After Social Media Backlash Over Her Historic Grammys Win",
  //     description:
  //       "Refreshingly, what was expected of her was the same thing that was expected of Lara Stone...",
  //     image:
  //       "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?auto=format&fit=crop&w=1000&q=80",
  //   },

  //   sideNews: [
  //     {
  //       id: 1,
  //       category: "Fashion",
  //       title: "Led Zeppelin to launch collection with Vans",
  //       description: "Refreshingly, what was expected of her was the same....",
  //       image:
  //         "https://mapi.associatedpress.com/v2/items/c9fead68a1124df7a77555482957df14/preview/AP.jpg",
  //     },
  //     {
  //       id: 2,
  //       category: "Fashion",
  //       title: "Led Zeppelin to launch collection with Vans",
  //       description: "Refreshingly, what was expected of her was the same....",
  //       image:
  //         "https://mapi.associatedpress.com/v2/items/c9fead68a1124df7a77555482957df14/preview/AP.jpg",
  //     },
  //   ],
  // };

  // const featuredItems = [
  //   {
  //     category: "FASHION",
  //     title:
  //       "Elsa Hosk Looks Like an Absolute Vision in Victoria’s Secret’s $1M Fantasy Bra",
  //     date: "02/15/2019",
  //     image:
  //       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  //   },
  //   {
  //     category: "FASHION",
  //     title:
  //       "Gabriela Hearst’s Fall Collection Is for the Sophisticated Minimalist",
  //     date: "02/15/2019",
  //     image:
  //       "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  //   },
  //   {
  //     category: "FASHION",
  //     title: "This £55 Bag Is Fast Becoming Part of the It-Girl Uniform",
  //     date: "02/15/2019",
  //     image:
  //       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  //   },
  //   {
  //     category: "FASHION",
  //     title:
  //       "Elsa Hosk Looks Like an Absolute Vision in Victoria’s Secret’s $1M Fantasy Bra",
  //     date: "02/15/2019",
  //     image:
  //       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  //   },
  //   {
  //     category: "FASHION",
  //     title:
  //       "Gabriela Hearst’s Fall Collection Is for the Sophisticated Minimalist",
  //     date: "02/15/2019",
  //     image:
  //       "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  //   },
  //   {
  //     category: "FASHION",
  //     title: "This £55 Bag Is Fast Becoming Part of the It-Girl Uniform",
  //     date: "02/15/2019",
  //     image:
  //       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  //   },
  // ];

  async function fetchFeatureData() {
    const cacheData = getCache("featureData");
    if (cacheData) {
      setFeaturedData(cacheData);
      return;
    }
    try {
      const response = await featureData();

      if (response?.status) {
        const formattedData = response.featured.map((item) => ({
          id: item.id,
          category: item.category_name,
          title: item.news_title,
          image: buildImageUrl(
            import.meta.env.VITE_API_BASE_URL,
            item.intro_image,
          ),
          slug: item.slug,
          date: formatDateDDMMYY(item.published_at),
        }));
        setCache("featureData", formattedData);
        setFeaturedData(formattedData);
      }
    } catch (error) {
      console.error("Feature Data error:", error);
    }
  }

  async function fetchFashionAndBelow() {
    const cacheData = getCache("fashionAndBelowData");

    // ✅ if cache exists
    if (cacheData) {
      setGstData(cacheData.gst);
      setBudgetData(cacheData.budget);
      setFinanceData(cacheData.finance);
      return;
    }

    try {
      const response = await fetchGstFinanceBudget(); // ✅ your api function

      if (response?.status) {
        const gstFormatted = response.data.gst.map((item, index) => ({
          id: index + 1,
          category: item.category_name,
          title: item.news_title,
          heading: item.news_heading,
          slug: item.slug,
          author: item.created_by_alias,
          date: formatDateDDMMYY(item.published_at),
        }));

        const budgetFormatted = response.data.budget.map((item, index) => ({
          id: index + 1,
          category: item.category_name,
          title: item.news_title,
          heading: item.news_heading,
          image: buildImageUrl(
            import.meta.env.VITE_API_BASE_URL,
            item.intro_image,
          ),
          slug: item.slug,
          author: item.created_by_alias,
          date: formatDateDDMMYY(item.published_at),
        }));

        const financeFormatted = response.data.finance.map((item, index) => ({
          id: index + 1,
          category: item.category_name,
          title: item.news_title,
          heading: item.news_heading,
          image: buildImageUrl(
            import.meta.env.VITE_API_BASE_URL,
            item.intro_image,
          ),
          slug: item.slug,
          author: item.created_by_alias,
          date: formatDateDDMMYY(item.published_at),
        }));

        // ✅ Store in cache as an object
        const finalData = {
          gst: gstFormatted,
          budget: budgetFormatted,
          finance: financeFormatted,
        };

        setCache("fashionAndBelowData", finalData);

        // ✅ set state for three components
        setGstData(gstFormatted);
        setBudgetData(budgetFormatted);
        setFinanceData(financeFormatted);
      }
    } catch (error) {
      console.error("FashionAndBelow error:", error);
    }
  }

  useEffect(() => {
    fetchFeatureData();
    lendingPageDisplay();
    fetchFashionAndBelow();
    globalRbiPageDisplay();
  }, []);

  async function lendingPageDisplay() {
    const cacheData = getCache("lendingPageNews");
    if (cacheData) {
      setLandingPageData(cacheData);
      return;
    }
    try {
      const response = await lendingPageNews();
      if (response?.status) {
        const data = response.data;

        const formattedData = {
          featured: {
            id: data.latest.id,
            slug: data.latest.slug,
            category: data.latest.category_name,
            author: "Krishna Gopal Varshney",
            title: data.latest.news_title,
            description: data.latest.synopsis,
            image: `${import.meta.env.VITE_API_BASE_URL}/${
              data.latest.intro_image
            }`,
          },
          sideNews: data.side.map((item) => ({
            id: item.id,
            slug: item.slug,
            category: item.category_name,
            title: item.news_title,
            description: item.synopsis,
            image: `${import.meta.env.VITE_API_BASE_URL}/${item.intro_image}`,
          })),
        };
        setLandingPageData(formattedData);
        setCache("lendingPageNews", formattedData);
      }
    } catch (error) {
      console.error("Lending page news error:", error);
    }
  }

  async function globalRbiPageDisplay() {
    const cacheData = getCache("globalRbiNews");
    if (cacheData) {
      setGlobalRBIData(cacheData);
      return;
    }

    try {
      const response = await globalRbiData();
      if (response?.status) {
        const data = response.data;

        const formattedData = {
          globalNews: data.global_news.map((item) => ({
            id: item.id,
            slug: item.slug,
            category: item.category_name,
            title: item.news_title,
            heading: item.news_heading,
            publishedAt: formatDateDDMMYY(item.published_at),
            image: `${import.meta.env.VITE_API_BASE_URL}/${item.intro_image}`,
          })),

          rbiNews: data.rbi.map((item) => ({
            id: item.id,
            slug: item.slug,
            category: item.category_name,
            title: item.news_title,
            heading: item.news_heading,
            publishedAt: formatDateDDMMYY(item.published_at),
            image: `${import.meta.env.VITE_API_BASE_URL}/${item.intro_image}`,
          })),
        };

        setGlobalRBIData(formattedData);
        setCache("globalRbiNews", formattedData);
      }
    } catch (error) {
      console.error("Global & RBI news error:", error);
    }
  }

  return (
    <div
      className="container mx-auto px-4 font-sans mt-1"
      style={{ maxWidth: "1400px" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 ">
        <LatestNews leftNews={latestNewsData} />

        {/* side  Section */}
        <div className="col-span-full lg:col-span-9 ">
          {landingPageData && <LendingPage landingPageData={landingPageData} />}

          <Featured featuredItems={featuredData} />
          <FashionStay fashionData={gstData} />

          <div className="grid grid-cols-1 lg:grid-cols-12 ">
            <div className="lg:col-span-8 ">
              <Technology articles={budgetData} />
            </div>
            <div className="lg:col-span-4 ">
              <TvSection tvArticles={financeData} />
            </div>
          </div>
          <CalibrityFood globalRbiData={globalRBIData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
