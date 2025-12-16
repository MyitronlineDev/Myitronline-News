import { useParams } from "react-router-dom";
import { newsDetails } from "./data/detailNewsData";
import ArticleMeta from "./ArticleMeta";
import ArticleMetaActions from "./ArticleMetaActions";
import Content from "./Content";
import RelatedNews from "./RelatedNews";
import LatestNewsWrapper from "./LatestNewsWrapper";
import Tags from "./Tags";
import ReadingProgress from "../../common/ReadingProgress";
import LiveTime from "../../common/liveClock/LiveTime"

const DetailNews = () => {
  const { id } = useParams();
  const article = newsDetails.find((item) => item.id === Number(id));

  if (!article) {
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
          <p className="
          text-blue-600 uppercase tracking-wider 
          text-xs sm:text-sm font-semibold mb-3
        ">
            {article.category} / {article.subCategory}
          </p>

          {/* TITLE */}
          <h1 className="
            text-2xl sm:text-3xl md:text-4xl
            font-bold leading-snug
            text-neutral-900
          ">
            {article.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="
            text-base sm:text-lg
            text-neutral-600
            leading-relaxed
            border-l-4 border-neutral-300 pl-4 mt-3
          ">
            {article.description}
          </p>


          {/* META + ACTIONS */}
          <div
            className="
            flex flex-col sm:flex-row sm:justify-between
            sm:items-center gap-3
            border-b pb-4 mb-8
          "
          >
            <ArticleMeta
              dateUpdated={article.dateUpdated}
              author={article.author}
              slug={article.slug}
            />
            {/* <ArticleMetaActions /> */}
          </div>

          {/* ARTICLE CONTENT */}
          <Content
            contents={article.content}
            featuredImage={article.images}
          />

          {/* TAGS */}
          <div className="mt-10">
            <Tags tags={article.tags} />
          </div>

          {/* RELATED NEWS */}
          <div className="mt-14">
            <RelatedNews featuredItems={article.relatedNews} />
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
