import { useParams } from "react-router-dom";
import Content from "./Content";
import ReadingProgress from "../../common/ReadingProgress";
import { useEffect, useState } from "react";
import { fetchDetailsNewsApi } from "../../context/apiService/apiService";
import Header from "./Header";
import LeftSideBar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import DetailNewsSkeleton from "../../utility/DetailNewsSkeleton";
import { useDevice } from "../../context/DataProvider";
import LatestNews from "../home/LatestNews";


const DetailNews = () => {
  const { slug } = useParams();
  const [articles, setArticles] = useState();

  const { latestNewsData } = useDevice()

  const fetchShowNews = async (slug) => {
    try {
      const article = await fetchDetailsNewsApi(slug);
      setArticles(article);
    } catch (err) {
      console.log("FetchShowNewsApi error", err.message);
    }
  };

  useEffect(() => {
    if (slug) fetchShowNews(slug);
    
  }, [slug]);

  if (!articles) {
    return (
      <DetailNewsSkeleton />
    );
  }

  console.log(import.meta.env.VITE_API_BASE_URL)

  return (
    <>
      <ReadingProgress />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen">
        {/* Keep article readable on large screens */}
        <div className="max-w-7xl ">
          <Header
            category={articles?.category_name}
            title={articles?.news_title}
            heading={articles?.news_heading}
            synopsis={articles?.synopsis}
            publishedAt={articles?.published_at}
            author={articles?.author || "~Krishna Gopal Varahney"}
          />

          {/* GRID */}
          <div className="grid grid-cols-12 gap-4 mt-8">

            {/* LEFT */}
            <aside className="hidden lg:block col-span-3">
              <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
                <LatestNews leftNews={latestNewsData} />
              </div>
            </aside>

            {/* CENTER CONTENT */}
            <main className="col-span-12 lg:col-span-9">

              <article className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">

                {/* HERO IMAGE */}
                {articles?.intro_image && (
                  <div className="relative w-full aspect-[16/9] bg-gray-100">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL}/${articles.intro_image}`}
                      alt={articles?.news_title || "News image"}
                      className="
                      absolute inset-0
                      w-full h-full
                      object-cover
                    "
                      loading="lazy"
                    />
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-2">
                  <Content contents={articles.content} />
                </div>

              </article>

              {/* RIGHT / RELATED */}
              <div className="mt-8">
                <RightSidebar />
              </div>

            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailNews;
