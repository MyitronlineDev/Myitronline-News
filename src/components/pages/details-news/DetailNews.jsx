import { useParams } from "react-router-dom";
import { newsDetails } from "./detailNewsData";
import ArticleMeta from "./ArticleMeta";
import ArticleMetaActions from "./ArticleMetaActions";
import Content from "./Content";
import RelatedNews from "./RelatedNews";
import Socials from "../socials/Socials";

const DetailNews = () => {
  const { id } = useParams();

  // ✅ Shows ONLY the selected article
  const article = newsDetails.find((item) => item.id === Number(id));

  if (!article) return <div className="text-center mt-10 text-xl">News Not Found</div>;

  return (
    <div className="max-w-7xl mx-auto">

      <p className="text-blue-600 uppercase tracking-wider text-sm font-semibold mb-3">
        {article.category} / {article.subCategory}
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        {article.title}
      </h1>

      <p className="text-lg text-gray-700 mb-6">{article.description}</p>

      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <ArticleMeta
          dateUpdated={article.dateUpdated}
          author={article.author}
          slug={article.slug}
        />
        <ArticleMetaActions />
      </div>

      <Content contents={article.content} featuredImage={article.images} />

      <div className="flex flex-wrap gap-2 mt-10 mb-8">
        {article.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* RELATED NEWS */}
      <RelatedNews related={article.relatedNews} />

      {/* SOCIAL SHARE */}
      <div className="border-t mt-10 pt-6">
        <Socials />
      </div>
    </div>
  );
};

export default DetailNews;
