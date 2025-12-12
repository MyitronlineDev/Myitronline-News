import { useParams } from "react-router-dom";
import { newsDetails } from "./data/detailNewsData";
import ArticleMeta from "./ArticleMeta";
import ArticleMetaActions from "./ArticleMetaActions";
import Content from "./Content";
import RelatedNews from "./RelatedNews";
import Socials from "../socials/Socials";
import Featured from "../home/Featured";
import LatestNews from "../home/LatestNews";
import { LatestNewsData } from "./data/LatestNewsData";

import newsDetail from "../../../assets/newsDetails.avif";


const DetailNews = () => {
  const { id } = useParams();

  const article = newsDetails.find((item) => item.id === Number(id));

  if (!article) return <div className="text-center mt-10 text-xl">News Not Found</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-4">
      <p className="
        text-blue-600 uppercase tracking-wider text-xs 
        sm:text-sm font-semibold mb-3
      ">
        {article.category} / {article.subCategory}
      </p>

      <h1 className="
        text-3xl sm:text-4xl md:text-5xl 
        font-bold mb-4 leading-tight
      ">
        {article.title}
      </h1>

      <p className="text-base sm:text-lg text-gray-700 mb-6">
        {article.description}
      </p>

      <div
        className="
        flex flex-col sm:flex-row sm:justify-between 
        sm:items-center gap-4 sm:gap-0 
        border-b pb-4 mb-6
      "
      >
        <ArticleMeta
          dateUpdated={article.dateUpdated}
          author={article.author}
          slug={article.slug}
        />
        <ArticleMetaActions />
      </div>

      <Content
        contents={article.content}
        featuredImage={article.images}
      />

      <div className="flex flex-wrap gap-2 mt-10 mb-8">
        {article.tags.map((tag, i) => (
          <span
            key={i}
            className="
            bg-gray-200 px-3 py-1 rounded-full 
            text-xs sm:text-sm text-gray-700
          "
          >
            #{tag}
          </span>
        ))}
      </div>

      <RelatedNews featuredItems={article.relatedNews} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* LEFT SIDE: Latest News */}
        <div>
          <LatestNews leftNews={LatestNewsData} />
        </div>

        {/* RIGHT SIDE: Image + Overlay Text */}
        <div className="relative flex justify-center items-center">
          <img
            src={newsDetail}
            alt="news-detail"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

          {/* TEXT ON TOP OF IMAGE */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="text-xl font-bold mb-2">Your Title Goes Here</h2>
            <p className="text-sm text-gray-200">
              Short description text goes here. Something like a news summary.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default DetailNews;
