import React from "react";
import { useNavigate } from "react-router-dom";

const LendingPage = ({ landingPageData }) => {
  const { featured, sideNews } = landingPageData;

  const navigate = useNavigate();

  const handleNavigate = (slug) => {
    navigate(`/detail-news/${slug}/myitronline`);
  };
  return (
    <div className="flex flex-col lg:flex-row gap-6 mb-7">
      {/* Featured Section */}
      <div className="lg:w-2/3"
        onClick={() => handleNavigate(featured.slug)}
      >
        <div className="relative mb-8">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full aspect-video object-contian bg-white-100"
          />

          <div className="border border-black absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 bg-white">
            <span className="font-semibold uppercase">{featured.category}</span>
          </div>
        </div>

        <div className="text-center space-y-3 px-2">
          <h2 className="text-3xl font-bold">
            {featured.title.length > 83
              ? `${featured.title.substring(0, 82)}...`
              : featured.title}
          </h2>
          <p className="text-gray-500">
            {featured.description.length > 89
              ? `${featured.description.substring(0, 87)}...`
              : featured.description}
          </p>
          <p className="text-gray-500 font-bold uppercase">{featured.author}</p>
        </div>
      </div>

      {/* Right-side News */}
      <div className="lg:w-1/3 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {sideNews.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavigate(item.slug)}
            className="space-y-2"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] object-contain bg-white-100 "
              />

              <div className="border border-black px-3 -bottom-2 left-0 bg-white absolute">
                <span className="uppercase font-semibold">{item.category}</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold leading-tight">
              {/* {item.title.length > 45
                ? `${item.title.substring(0, 44)}...`
                : item.title} */}
            </h2>

            <p className="leading-tight text-gray-600">
              {/* {item.description.length > 53
                ? `${item.description.substring(0, 52)}...`
                : item.description} */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LendingPage;
