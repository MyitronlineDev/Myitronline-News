import React from "react";
import { useNavigate } from "react-router-dom";
import testAd from "../../../assets/testAd.jpeg";
import itr1_image from "../../../assets/itr1_image.png";
import itr2_image from "../../../assets/itr2_image.png";
import HoverCard from "../../common/HoverCard";

const CalibrityFood = ({ globalRbiData }) => {
  if (!globalRbiData) return null;

  const { globalNews = [], rbiNews = [] } = globalRbiData;

  // Latest global news (first item)
  const latestGlobalNews = globalNews[0];

  // Remaining 4 global news
  const remainingGlobalNews = globalNews.slice(1, 5);

  const navigate = useNavigate();
  const handleNavigate = (slug) => {
    navigate(`/detail-news/${slug}/myitronline`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-4">
      {/* LEFT SECTION – GLOBAL NEWS */}
      <div className="lg:col-span-7 px-4">
        <h2 className="text-3xl font-bold mb-6">GLOBAL NEWS</h2>

        {/* BIG THUMBNAIL (LATEST NEWS) */}
        {latestGlobalNews && (
          <>
            <div
              className="relative mb-8"
              onClick={() => {
                handleNavigate(latestGlobalNews.slug);
              }}
            >
              <img
                src={latestGlobalNews.image}
                className="w-full aspect-video object-cover"
                alt={latestGlobalNews.title}
              />
              <div className="border border-black absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-3 bg-white">
                <span className="font-semibold uppercase">
                  {latestGlobalNews.category}
                </span>
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold px-4">
                {latestGlobalNews.title}
              </h2>
              <p className="text-gray-500">{latestGlobalNews.heading}</p>
            </div>
          </>
        )}

        {/* BELOW 4 GLOBAL NEWS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {remainingGlobalNews.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                handleNavigate(item.slug);
              }}
            >
              <div className="relative h-40 w-full mb-2">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.title}
                />
                <span className="absolute border border-black -bottom-2 left-0 bg-white px-2 font-semibold uppercase">
                  {item.category}
                </span>
              </div>

              <h3 className="font-semibold text-xl">
                {item.title.length > 55
                  ? `${item.title.substring(0, 55)}...`
                  : item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.heading.length > 60
                  ? `${item.heading.substring(0, 60)}...`
                  : item.heading}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION – RBI NEWS */}
      <div className="lg:col-span-5 px-4">
        <h2 className="text-3xl font-bold tracking-tight mb-6">RBI</h2>

        <div className="space-y-4">
          {rbiNews.map((item) => (
            <article
              key={item.id}
              className="flex gap-3"
              onClick={() => {
                handleNavigate(item.slug);
              }}
            >
              {/* Thumbnail */}
              <div className="shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-20 object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold leading-snug">
                  {item.title.length > 52
                    ? `${item.title.substring(0, 52)}...`
                    : item.title}
                </h3>
                <span className="mt-1 font-semibold text-sm text-gray-500">
                  {item.publishedAt}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-4">

          <div className="flex-none  h-70">
            <HoverCard
              image={itr1_image}
              title="ITR-1"
              text="For salaried individuals with simple income sources."
              link="https://myitronline.com/application-form16-itr-1"
            />
          </div>

          <div className="flex-none  h-70">
            <HoverCard
              image={itr2_image}
              title="ITR-2"
              text="For individuals with capital gains or multiple income sources."
              link="https://myitronline.com/application-form16-itr-2"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CalibrityFood;
