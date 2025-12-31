import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./Header";
import Content from "./Content";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import ReadingProgress from "../../common/ReadingProgress";
import { fetchDetailsNewsApi } from "../../context/apiService/apiService";

const DetailNews = () => {
  const { slug } = useParams();
  const [articles, setArticles] = useState();

  useEffect(() => {
    if (!slug) return;

    const fetchShowNews = async () => {
      try {
        const article = await fetchDetailsNewsApi(slug);
        setArticles(article);
      } catch (err) {
        console.log("FetchShowNewsApi error", err.message);
      }
    };

    fetchShowNews();
  }, [slug]);

  if (!articles) {
    return (
      <div className="text-center mt-16 text-lg sm:text-xl">
        News Not Found
      </div>
    );
  }

  return (
    <>
      <ReadingProgress />

      <div className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* HEADER */}
          <Header
            category={articles?.category_name}
            title={articles?.news_title}
            heading={articles?.news_heading}
            synopsis={articles?.synopsis}
            publishedAt={articles?.published_at}
            author={articles?.author || "Krishna Gopal Varahney"}
          />

          {/* GRID */}
          <div className="grid grid-cols-12 gap-2 mt-8">

            <LeftSidebar />

            <main className="col-span-12 lg:col-span-8 order-2 lg:order-none">
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200">
                <div className="px-4 sm:px-8 lg:px-10 py-6 sm:py-8">
                  <Content contents={articles.content} />
                </div>
              </div>
            </main>

            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailNews;
