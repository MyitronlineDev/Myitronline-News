import React from "react";

const LatestNews = ({ leftNews }) => {
  return (
    <div className="hidden lg:block lg:col-span-3 px-2">
      <h1 className="text-3xl font-bold">Latest News</h1>
      <br />

      <div className="space-y-4">
        {leftNews.map((item, index) => (
          <div key={index} className="border-b pb-3">
            <div className="flex flex-row gap-2 text-sm text-gray-700">
              <span className="font-semibold">{item.category}</span>
              <span className="text-yellow-500">{item.date}</span>
            </div>

            <h3 className="text-lg font-semibold">{item.title}</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
