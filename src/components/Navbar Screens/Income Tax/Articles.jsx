import React from "react";
import {
  FiCalendar,
  FiTrendingUp,
  FiFileText,
  FiShield,
  FiArrowRight,
  FiClock,
  FiBookOpen
} from "react-icons/fi";

const Articles = () => {
  const categories = [
    { name: "Income Tax", count: 4, active: true},
    { name: "GST", count: 3 },
    { name: "Budget", count: 3 },
    { name: "Tax Saving", count: 2 },
  ];

  const featuredArticles = [
    {
      title: "New ITR filing deadline announced for AY 2025-26",
      description: "The Income Tax Department has extended the due date for filing income tax returns for individual taxpayers.",
      category: "Income Tax",
      date: "Mar 15, 2025",
      readTime: "4 min read",
      premium: true
    },
    {
      title: "GST rate changes on essential goods effective April 2025",
      description: "The GST council has revised tax rates on selected essential items impacting household budgets.",
      category: "Income Tax",
      date: "Mar 12, 2025",
      readTime: "5 min read",
      premium: false
    }
  ];

const articles = [
  {
    title: "Changes in Section 80C deductions explained",
    description:
      "Here's what taxpayers need to know about the latest updates under Section 80C for maximum savings.",
    category: "Income Tax",
    date: "Mar 10, 2025",
    readTime: "3 min read",
    icon: FiTrendingUp
  },
  {
    title: "New GST return filing system coming soon",
    description:
      "A simplified GST return filing mechanism is expected to reduce compliance burden significantly.",
    category: "Income Tax",
    date: "Mar 8, 2025",
    readTime: "4 min read",
    icon: FiFileText
  },
  {
    title: "Union Budget 2025 highlights for taxpayers",
    description:
      "Key announcements from the budget that directly impact salaried and business taxpayers.",
    category: "Income Tax",
    date: "Mar 5, 2025",
    readTime: "6 min read",
    icon: FiShield
  },
  {
    title: "New tax regime vs old tax regime comparison",
    description:
      "Which tax regime should you choose in the current financial year? Detailed analysis inside.",
    category: "Income Tax",
    date: "Mar 3, 2025",
    readTime: "5 min read",
    icon: FiBookOpen
  },
  {
    title: "Top tax-saving investments before March 31",
    description:
      "Smart investment options to reduce your tax liability legally with maximum returns.",
    category: "Income Tax",
    date: "Feb 28, 2025",
    readTime: "4 min read",
    icon: FiTrendingUp
  },
  {
    title: "Common mistakes to avoid while filing ITR",
    description:
      "Avoid these common errors that may lead to notices from the tax department.",
    category: "Income Tax",
    date: "Feb 25, 2025",
    readTime: "3 min read",
    icon: FiShield
  }
];


  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-3">
                Latest Updates
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Tax Insights & Updates
              </h1>
              <p className="text-gray-600 max-w-2xl">
                Stay informed with the latest tax news, policy changes, and expert 
                analysis to optimize your financial planning.
              </p>
            </div>

          </div>

          {/* Category Filter
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  cat.active
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {cat.name}
                <span className="ml-2 text-xs opacity-80">({cat.count})</span>
              </button>
            ))}
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Articles */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Latest Article</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {featuredArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      {article.premium && (
                        <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-medium">
                          Premium
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <FiCalendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* All Articles */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Articles Archive</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start">
                    <div className="shrink-0 mr-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <article.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center">
                          <FiClock className="w-3 h-3 mr-1" />
                          {article.date}
                        </span>
                        <button className="text-blue-600 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                          Read more
                          <FiArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending Topics */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-8">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <FiTrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                Trending Topics
              </h3>
              <div className="space-y-4">
                {[
                  "Section 80C Deductions",
                  "GST Rate Changes",
                  "New Tax Regime",
                  "ITR Filing Deadline",
                  "Tax Saving Investments"
                ].map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <span className="text-gray-700 group-hover:text-blue-600">
                      {topic}
                    </span>
                    <div className="text-xs text-gray-400 group-hover:text-blue-500">
                      {Math.floor(Math.random() * 50) + 10} articles
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;