import { FiCalendar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getCategoryColor } from "../../utility/categoryColor";
import { formatDateDDMMYY } from "../../utility/formatter";
import ReadMoreLess from "../../common/ReadMoreLess";

const LatestNews = ({ leftNews }) => {
  const navigate = useNavigate();
  const handleNavigate = (slug) => {
    navigate(`/detail-news/${slug}/myitronline`);
  };

  return (
    <div className="hidden lg:block lg:col-span-3 px-2 h-full ">
      <h1 className="text-3xl font-bold">Latest News</h1>
      <br />

      <div className="space-y-4">
        <div className="space-y-4">
          {leftNews.slice(0, 14).map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigate(item.slug)}
              className="border-b pb-3 pt-1"
            >
              <div className="flex flex-row gap-2 text-sm text-gray-700 items-center justify-between">
                <span
                  className={`font-semibold rounded-full px-3 text-xs py-1 
                  ${getCategoryColor(item.category || item.category_name)}`}
                >
                  {item.category_name || item.category}
                </span>

                <div className="flex items-center">
                  <FiCalendar className="w-4 h-4 mr-1" />
                  <span className="text-blue-500 py-1">
                    {item.date ||
                      formatDateDDMMYY(item.created_at || item.published_at)}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold">
                {item.title || item.news_title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                <ReadMoreLess text={item.excerpt || item.synopsis} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
