import React from "react";

const Article = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-25 pt-6 text-sm text-gray-500">
        Home <span className="mx-1">›</span> Finance <span className="mx-1">›</span> Articles
      </div>

      {/* Article */}
      <article className="max-w-5xl mx-auto px-4 py-6">

        {/* Category */}
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
          Finance
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          India’s Stock Market Gains Momentum as Global Inflation Eases
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
          <span>
            By <b className="text-gray-700">Mukesh Kumar</b>
          </span>
          <span>📅 26 Dec 2025</span>
          <span>⏱️ 5 min read</span>
          <span>👁️ 12.4k views</span>
        </div>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
            alt="Finance market"
            className="w-full h-[350px] object-cover rounded-lg"
          />
          <p className="text-xs text-gray-500 mt-2">
            Indian markets react positively to global economic cues.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p>
            Indian equity markets opened higher on Thursday as global markets
            turned optimistic following signals of cooling inflation in major
            economies. Banking and IT stocks led the rally.
          </p>

          <h3>What’s Driving the Rally?</h3>

          <ul>
            <li>Positive global inflation data</li>
            <li>Strong banking sector performance</li>
            <li>Foreign institutional investor inflows</li>
          </ul>

          <p>
            Analysts believe that India’s economic fundamentals remain strong,
            providing confidence to both domestic and international investors.
          </p>

          <blockquote>
            “India continues to be one of the most attractive emerging markets
            globally,” said a senior market strategist.
          </blockquote>

          <p>
            Experts, however, advise caution ahead of upcoming central bank
            policy announcements that could influence market sentiment.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {["Finance", "Stock Market", "Economy", "India"].map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t">
          <div className="flex gap-4 text-gray-600">
            <button className="hover:text-black">🔖 Bookmark</button>
            <button className="hover:text-black">💬 Comment</button>
            <button className="hover:text-black">👍 Like</button>
          </div>
          <button className="text-blue-600 hover:underline">🔗 Share</button>
        </div>

      </article>
    </div>
  );
};

export default Article;
