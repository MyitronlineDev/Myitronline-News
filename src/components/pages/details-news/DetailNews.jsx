import { newsDetails } from "./detailNewsData"
import ReadMoreLess from "../../common/ReadMoreLess";

const DetailNews = () => {
  const newsDatas = newsDetails;
  console.log(newsDatas)
  return (
    <div>
      <p>News Details</p>
    {
      newsDatas.map(( newsData ) => {
        return (<p key={newsData.id}>
          {<ReadMoreLess text={newsData.title} wordCount={5} />}
        </p>)
      })
    }
    </div>
  )
}

export default DetailNews