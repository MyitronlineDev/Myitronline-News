import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Content from "./Content";
// import ReadingProgress from "../../common/ReadingProgress";
import { fetchDetailsNewsApi } from "../../context/apiService/apiService";
import Header from "./Header";
import RelatedNews from "./RelatedNews";
import { useDevice } from "../../context/DataProvider";
import LatestNews from "../home/LatestNews";
import LoaderUi from "../../common/LoaderUi"
import GoogleAd from "../../common/GoogleAd";

const DetailNews = () => {
  const { slug } = useParams();

  const [articles, setArticles] = useState(null);
  const [lang, setLang] = useState("en"); // hn | en
  const [loading, setLoading] = useState(false);

  const { latestNewsData } = useDevice();

  const fetchShowNews = async (slug, language) => {
    try {
      setLoading(true);
      const article = await fetchDetailsNewsApi(slug, language);
      setArticles(article);
    } catch (err) {
      console.error("FetchShowNewsApi error", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) fetchShowNews(slug, lang);
  }, [slug, lang]);

  if (!articles || loading) {
    return <LoaderUi />
  }

  // Image URL builder (safe)
  const buildImageUrl = (base, path) => {
    if (!path) return "";
    return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  };

  return (
    <div className="m-0 p-0">
      {/* <ReadingProgress /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen p-0">


        {/*  Header */}
        <Header
          category={articles?.news?.category_name}
          title={articles?.news?.news_title}
          heading={articles?.news?.news_heading}
          synopsis={articles?.news?.synopsis}
          publishedAt={articles?.news?.published_at}
          author={articles?.news?.created_by_alias || "~Krishna Gopal Varahney"}
          setLang={setLang}
          lang={lang}
        />

        {/*  GRID */}
        <div className="grid grid-cols-12 gap-4 mt-8">

          {/* LEFT SIDEBAR */}
          <aside className="hidden lg:block col-span-3">
            <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
              <LatestNews leftNews={articles?.right_side_news} />
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
                    className="absolute inset-0 w-full h-full aspect-video p-1 lg:p-2 rounded-2xl lg:rounded-4xl"
                    loading="lazy"
                  />
                </div>
              )}
              <Content contents={articles?.news?.content} />
            </article>
            {/* RIGHT / RELATED */}
            <div className="mt-8">
              <RelatedNews relatedNews={articles?.related_news} />
            </div>

            <GoogleAd />
          </main>
        </div>


      </div>
    </div>
  );
};

export default DetailNews;
