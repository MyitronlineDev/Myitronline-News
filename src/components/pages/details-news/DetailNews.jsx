import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Content from "./Content";
import ReadingProgress from "../../common/ReadingProgress";
import { fetchDetailsNewsApi } from "../../context/apiService/apiService";
import Header from "./Header";
import LeftSideBar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import DetailNewsSkeleton from "../../utility/DetailNewsSkeleton";
import { useDevice } from "../../context/DataProvider";
import LatestNews from "../home/LatestNews";
import LoaderUi from "../../common/LoaderUi"

import sidenews1 from "../../../../src/assets/sidenews1.jpeg";

const DetailNews = () => {
  const { slug } = useParams();

  const [articles, setArticles] = useState(null);
  console.log(`left-sidebar-news`, articles?.right_side_news)
  const [lang, setLang] = useState("en"); // hn | en
  const [loading, setLoading] = useState(false);

  const { latestNewsData } = useDevice();


  //  Fetch news by slug & language
  const fetchShowNews = async (slug, language) => {
    try {
      setLoading(true);
      const article = await fetchDetailsNewsApi(slug, language);
      setArticles(article);
    } catch (err) {
      console.log("FetchShowNewsApi error", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Refetch when slug or language changes
  useEffect(() => {
    if (slug) fetchShowNews(slug, lang);
  }, [slug, lang]);

  if (true) {
    // return <DetailNewsSkeleton />;
    return <LoaderUi />
  }

  // Image URL builder (safe)
  const buildImageUrl = (base, path) => {
    if (!path) return "";
    return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  };

  console.log(
    `from detail news`, buildImageUrl(import.meta.env.VITE_API_INTRO_IMG, articles.intro_image)
  );

  return (
    <>
      <ReadingProgress />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen">
        <div className="max-w-7xl">

          {/*  Header */}
          <Header
            category={articles?.news?.category_name}
            title={articles?.news?.news_title}
            heading={articles?.news?.news_heading}
            synopsis={articles?.news?.synopsis}
            publishedAt={articles?.news?.published_at}
            author={articles?.news?.created_by_alias || "~Krishna Gopal Varahney"}
          />

          {/*  Language Toggle */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition
                ${lang === "en"
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
                }`}
            >
              English
            </button>

            <button
              onClick={() => setLang("hn")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition
                ${lang === "hn"
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
                }`}
            >
              हिंदी
            </button>
          </div>

          {/*  GRID */}
          <div className="grid grid-cols-12 gap-4 mt-8">

            {/* LEFT SIDEBAR */}
            <aside className="hidden lg:block col-span-3">
              <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
                <LatestNews leftNews={articles?.right_side_news} />
                {/* <div className="flex flex-col gap-4 justify-center items-center">
                  <img src={sidenews1} alt="side news" height={"400px"} />
                  <img src={sidenews1} alt="side news" />
                </div> */}
              </div>
            </aside>

            {/* CENTER CONTENT */}
            <main className="col-span-12 lg:col-span-9">

              <article className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">

                {/* HERO IMAGE */}
                {articles?.news?.intro_image && (
                  <div className="relative w-full aspect-video bg-gray-100 p-2">
                    <img
                      src={buildImageUrl(
                        import.meta.env.VITE_API_BASE_URL,
                        articles?.news?.intro_image
                      )}
                      alt={articles?.news?.news_title || "News image"}
                      className="absolute inset-0 w-full h-full object-contain "
                      loading="lazy"
                    />
                  </div>
                )}


                <Content contents={articles?.news?.content} />

              </article>

              {/* RIGHT / RELATED */}
              <div className="mt-8">
                <RightSidebar relatedNews={articles?.related_news} />

              </div>

            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailNews;
