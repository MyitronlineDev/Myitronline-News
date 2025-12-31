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

          {/* ARTICLE CONTENT */}
          <Content
            contents={articles.content}
          // featuredImage={articles.images}
          />

        </div>
      </div>
    </>
  );
};

export default DetailNews;
