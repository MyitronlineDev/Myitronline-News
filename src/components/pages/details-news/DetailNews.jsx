import { useParams } from "react-router-dom";
import ArticleMeta from "./ArticleMeta";
import Content from "./Content";
import ReadingProgress from "../../common/ReadingProgress";
import { useEffect, useState } from "react";
import { fetchDetailsNewsApi } from "../../context/apiService/apiService";
import Header from "./Header";

const DetailNews = () => {
  const { slug } = useParams();
  const [articles, setArticles] = useState();

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
      <div className="text-center mt-16 text-lg sm:text-xl">
        News Not Found
      </div>
    );
  }

  return (
    <>
      <ReadingProgress />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Keep article readable on large screens */}
        <div className="max-w-7xl mx-auto">
          <Header
            category={articles?.category_name}
            title={articles?.news_title}
            heading={articles?.news_heading}
            synopsis={articles?.synopsis}
            publishedAt={articles?.published_at}
            author={articles?.author || "~Krishna Gopal Varahney"}
          />

<<<<<<< HEAD
          {/* ARTICLE CONTENT */}
          <Content
            contents={articles.content}
          // featuredImage={articles.images}
          />

=======
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
>>>>>>> a582d398ac6b81ff3834a31c80c2b57d4fa76e6e
        </div>
      </div>
    </>
  );
};

export default DetailNews;
