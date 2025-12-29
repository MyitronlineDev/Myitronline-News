import { useParams } from "react-router-dom";
import { newsDetails } from "./data/detailNewsData";
import ArticleMeta from "./ArticleMeta";
import ArticleMetaActions from "./ArticleMetaActions";
import Content from "./Content";
import RelatedNews from "./RelatedNews";
import LatestNewsWrapper from "./LatestNewsWrapper";
import ReadingProgress from "../../common/ReadingProgress";
import { useEffect, useState } from "react";
import { fetchDetailsNewsApi } from "../../context/apiService/apiService";

const DetailNews = () => {
  // const { id } = useParams();
  const { slug } = useParams();
  // const article = newsDetails.find((item) => item.id === Number(id));

  const [articles, setArticles] = useState();
  console.log(`articles data : `, articles);
  console.log(`category name : `, articles?.category_name);

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

          {/* CATEGORY */}
          {articles?.category_name && (
            <span
              className="
              inline-block mt-2
              px-3 py-1
              text-xs sm:text-sm font-semibold
              uppercase tracking-wider
              rounded-full
              text-white
              bg-gradient-to-r from-blue-500 to-indigo-600
              shadow-sm
            "
            >
              {articles.category_name}
            </span>
          )}


          {/* TITLE */}
          <h1
            className="
            text-2xl sm:text-3xl md:text-4xl
            font-bold leading-snug
            text-neutral-900
          "
          >
            {articles?.news_title}
          </h1>

          {/* DESCRIPTION / SYNOPSIS */}
          {articles?.synopsis && (
            <p
              className="
              text-base sm:text-lg
              text-neutral-600
              leading-relaxed
              border-l-4 border-neutral-300
              pl-4 mt-3
            "
            >
              {articles.synopsis}
            </p>
          )}

          {/* NEWS HEADING (Optional Highlight) */}
          {articles?.news_heading && (
            <h2
              className="
              mt-4 text-lg sm:text-xl
              font-semibold text-neutral-800
            "
            >
              {articles.news_heading}
            </h2>
          )}


          {/* META + ACTIONS */}
          {/* <div
            className="
            flex flex-col sm:flex-row sm:justify-between
            sm:items-center gap-3
            border-b pb-4 mb-8
          "
          >
            <ArticleMeta
              dateUpdated={articles?.published_at}
              author={articles.author || "krishna-gopal-varshnay"}
              slug={articles.slug}
            />
            <ArticleMetaActions />
          </div> */}

          {/* ARTICLE CONTENT */}
          <Content
            contents={articles.content}
          // featuredImage={articles.images}
          />

          {/* RELATED NEWS */}
          <div className="mt-14">
            <RelatedNews featuredItems={articles.relatedNews} />
          </div>

          {/* LATEST NEWS */}
          <div className="mt-14">
            <LatestNewsWrapper />
          </div>

        </div>
      </div>
    </>
  );
};

export default DetailNews;
