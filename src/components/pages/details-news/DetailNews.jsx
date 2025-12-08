import { useParams } from "react-router-dom";
import { newsDetails } from "./detailNewsData"
import ReadMoreLess from "../../common/ReadMoreLess";
import ArticleMeta from "./ArticleMeta";
import ArticleMetaActions from "./ArticleMetaActions";
import Content from "./Content";
import RelatedNews from "./RelatedNews";
import Socials from "../socials/Socials";

const DetailNews = () => {
  const { id } = useParams();
  console.log(`id: ${id}`);
  const newsDatas = newsDetails;

  return (
    <div className="mx-16">
      <p>News Details</p>
      {
        newsDatas.map((newsData) => {
          return (
            <div key={newsData.id}>

              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-semibold leading-tight">
                  {newsData.title.toUpperCase()}
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {newsData.description}
                </p>
              </div>

              <div className="flex gap-2 justify-between mt-2">
                <ArticleMeta dateUpdated={newsData.dateUpdated} author={newsData.author} slug={newsData.slug} />
                <ArticleMetaActions />
              </div>

              <Content contents={newsData.content} />
              <RelatedNews />

              <Socials />
            </div>

          )
        })
      }
    </div>
  )
}

export default DetailNews