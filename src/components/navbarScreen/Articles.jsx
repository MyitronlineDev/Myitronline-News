import React from "react";
import {
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";

const Articles = ({ data }) => {
  console.log("Articles data:", data);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      {/* HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-3">
            Latest Updates
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Tax Insights & Articles
          </h1>

          <p className="text-gray-600 max-w-2xl">
            Read expert-written articles on income tax rules, deductions,
            compliance, and important updates.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* ARTICLES GRID */}
        {data?.length === 0 ? (
          <p className="text-center text-gray-500">
            No articles available
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border"
              >
                {/* IMAGE */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={`https://www.apnokaca.com/${item.intro_image}`}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* BODY */}
                <div className="p-6">

                  {/* CATEGORY + DATE */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {item.category_name}
                    </span>

                    <span className="flex items-center text-xs text-gray-500">
                      <FiCalendar className="mr-1" />
                      {new Date(item.published_at).toDateString()}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* SYNOPSIS */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.synopsis}
                  </p>

                  {/* READ MORE */}
                  <a
                    href={`/articles/${item.slug}`}
                    className="inline-flex items-center text-blue-600 font-medium text-sm hover:underline"
                  >
                    Read More
                    <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
