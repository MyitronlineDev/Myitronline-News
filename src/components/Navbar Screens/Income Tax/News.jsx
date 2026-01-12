import React, { useState } from "react";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedNews, setExpandedNews] = useState(null);

  const incomeTaxNews = [
    {
      id: 1,
      title: "Income Tax Return Filing Deadline Extended",
      description: "The Income Tax Department has extended the ITR filing deadline for AY 2025-26 to provide relief to taxpayers.",
      fullContent: "The Central Board of Direct Taxes (CBDT) has announced an extension of the Income Tax Return (ITR) filing deadline for Assessment Year 2025-26. The new deadline is now December 31, 2025, providing taxpayers with additional time to compile their documents and file returns accurately. This extension comes as a relief measure considering the recent changes in tax regulations.",
      date: "15 Aug 2025",
      category: "ITR Update",
      readTime: "2 min read",
      priority: "high"
    },
    {
      id: 2,
      title: "New Tax Slab Benefits Under Revised Regime",
      description: "Government announces additional tax benefits for salaried individuals under the new tax regime.",
      fullContent: "The Finance Ministry has introduced enhanced tax benefits under the new tax regime, increasing the basic exemption limit and adding more deductions. Salaried individuals earning up to ₹15 lakhs annually can now benefit from reduced tax rates. The revised slabs are expected to benefit over 2 crore taxpayers across the country.",
      date: "10 Aug 2025",
      category: "Tax Regime",
      readTime: "3 min read",
      priority: "medium"
    },
    {
      id: 3,
      title: "PAN-Aadhaar Linking Mandatory",
      description: "Taxpayers must link PAN with Aadhaar to avoid higher TDS and penalties to avoid higher TDS and penalties.",
      fullContent: "The Income Tax Department has made PAN-Aadhaar linking mandatory for all taxpayers. Failure to link by the deadline will result in higher TDS deductions and possible penalties. The department has provided an extended grace period until March 31, 2026, for completing this process.",
      date: "05 Aug 2025",
      category: "PAN & Aadhaar",
      readTime: "2 min read",
      priority: "high"
    },
    {
      id: 4,
      title: "Heavy Penalty for Late ITR Filing",
      description: "Late filing of income tax returns may attract penalties up to ₹5,000 under Section 234F.",
      fullContent: "Taxpayers filing returns after the due date will face penalties under Section 234F ranging from ₹1,000 to ₹5,000, depending on income levels. For returns filed after December 31st, additional interest under Section 234A will also apply. The department advises early filing to avoid these charges.",
      date: "01 Aug 2025",
      category: "Penalty",
      readTime: "2 min read",
      priority: "high"
    },
    {
      id: 5,
      title: "Digital Tax Assessment Initiative Launched",
      description: "CBDT introduces AI-powered assessment system for faster processing.",
      fullContent: "The Income Tax Department has launched a new AI-powered assessment system that aims to reduce processing time by 70%. The system automatically verifies documents and flags discrepancies, making the assessment process more efficient and transparent.",
      date: "28 Jul 2025",
      category: "Digital Initiative",
      readTime: "4 min read",
      priority: "medium"
    },
    {
      id: 6,
      title: "New TDS Rules for Online Transactions",
      description: "Updated TDS regulations for e-commerce and digital payments.",
      fullContent: "Starting October 1, 2025, new TDS rules will apply to online transactions above ₹50,000. E-commerce operators and payment gateways will be required to deduct TDS at 1% for certain categories of transactions.",
      date: "25 Jul 2025",
      category: "TDS Updates",
      readTime: "3 min read",
      priority: "medium"
    }
  ];

  const categories = ["All", "ITR Update", "Tax Regime", "PAN & Aadhaar", "Penalty", "Digital Initiative", "TDS Updates"];
  
  const filteredNews = selectedCategory === "All" 
    ? incomeTaxNews 
    : incomeTaxNews.filter(news => news.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedNews(expandedNews === id ? null : id);
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Premium Header with Gradient */}
      <div className=" text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                Income Tax News Hub
              </h1>
              <p className="text-black mt-3 text-lg max-w-2xl">
                Latest updates, announcements, and guidelines from the Income Tax Department of India
              </p>
            </div>
            <div className="hidden lg:flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <div className="text-center">
                <div className="text-2xl font-bold">{incomeTaxNews.length}</div>
                <div className="text-xs npm run ">Total Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        {/* Featured News Card */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden mb-12 transform hover:-translate-y-1 transition-transform duration-300">
          <div className="p-8 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                  Featured Update
                </span>
                <span className="text-sm opacity-90">18 Aug 2025</span>
              </div>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                High Priority
              </span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              CBDT Issues New Guidelines for ITR Verification
            </h2>
            <p className="text-lg opacity-95 mb-6">
              The Central Board of Direct Taxes (CBDT) has released comprehensive guidelines 
              to simplify the income tax return verification process, introducing 
              AI-powered validation and reduced processing times.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm opacity-90">Income Tax Department</span>
                <span className="text-sm opacity-90">•</span>
                <span className="text-sm opacity-90">4 min read</span>
              </div>
              <button className="px-6 py-2.5 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                View Guidelines
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                    {incomeTaxNews.filter(n => n.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* News Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(news.priority)}`}>
                      {news.priority === 'high' ? '🚨 ' : news.priority === 'medium' ? '⚠️ ' : ''}
                      {news.category}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${news.priority === 'high' ? 'bg-red-500' : 'bg-amber-500'}`}></span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{news.date}</span>
                    <span>•</span>
                    <span>{news.readTime}</span>
                  </div>
                </div>

                {/* News Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {news.title}
                </h3>

                {/* News Description */}
                <p className="text-gray-600 mb-4">
                  {news.description}
                </p>

                {/* Expanded Content */}
                {expandedNews === news.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-gray-700">{news.fullContent}</p>
                    <div className="mt-4 pt-4 border-t border-gray-300">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Takeaways:</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Updated compliance requirements</li>
                        <li>Revised deadlines and penalties</li>
                        <li>New digital submission processes</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Interactive Footer */}
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={() => toggleExpand(news.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center space-x-1"
                  >
                    <span>{expandedNews === news.id ? 'Show Less' : 'Read Full Update'}</span>
                    <span className={`transition-transform duration-200 ${expandedNews === news.id ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>
                  
                  <div className="flex items-center space-x-3">
                    <button className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress Bar for Urgency */}
              <div className={`h-1 ${news.priority === 'high' ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-gradient-to-r from-blue-400 to-blue-600'}`}></div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {incomeTaxNews.filter(n => n.priority === 'high').length}
              </div>
              <div className="text-gray-700 font-medium">High Priority Updates</div>
              <div className="text-sm text-gray-500 mt-1">Require immediate attention</div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-gray-700 mb-2">
                {new Date().getFullYear()}
              </div>
              <div className="text-gray-700 font-medium">Current Assessment Year</div>
              <div className="text-sm text-gray-500 mt-1">AY 2025-26</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">
                24/7
              </div>
              <div className="text-gray-700 font-medium">Latest Updates</div>
              <div className="text-sm text-gray-500 mt-1">Continuously monitored</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;