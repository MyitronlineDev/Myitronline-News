import React, { useMemo, useState } from "react";
import { 
  FiSearch, 
  FiDownload, 
  FiExternalLink, 
  FiCalendar, 
  FiFilter,
  FiFileText,
  FiChevronRight 
} from "react-icons/fi";
import { 
  TbSection, 
  TbCategory2 
} from "react-icons/tb";

function Circular() {
  // ✅ Enhanced dummy data with more details
  const circulars = [
    {
      id: 1,
      circularNo: "Circular No. 01/2026",
      date: "15 Jan 2026",
      section: "Section 80C",
      type: "CBDT Circular",
      subject: "Clarification on deduction under Section 80C for new investment instruments.",
      pdfUrl: "#",
      importance: "High",
      tags: ["Investment", "Deduction", "Tax Savings"],
      readTime: "5 min read"
    },
    {
      id: 2,
      circularNo: "Circular No. 22/2025",
      date: "30 Dec 2025",
      section: "Section 194Q",
      type: "CBDT Circular",
      subject: "Guidelines for TDS compliance under Section 194Q and applicability criteria.",
      pdfUrl: "#",
      importance: "Medium",
      tags: ["TDS", "Compliance", "Business"],
      readTime: "8 min read"
    },
    {
      id: 3,
      circularNo: "Circular No. 19/2025",
      date: "10 Nov 2025",
      section: "Section 10(10D)",
      type: "Income Tax Notification",
      subject: "Notification regarding exemption rules for insurance maturity and related amendments.",
      pdfUrl: "#",
      importance: "High",
      tags: ["Insurance", "Exemption", "Notification"],
      readTime: "6 min read"
    },
    {
      id: 4,
      circularNo: "Circular No. 18/2025",
      date: "25 Oct 2025",
      section: "Section 44ADA",
      type: "CBDT Circular",
      subject: "Revised presumptive taxation scheme for professionals under Section 44ADA.",
      pdfUrl: "#",
      importance: "Medium",
      tags: ["Professionals", "Presumptive", "Scheme"],
      readTime: "7 min read"
    },
    {
      id: 5,
      circularNo: "Circular No. 15/2025",
      date: "15 Sep 2025",
      section: "Section 80D",
      type: "Income Tax Notification",
      subject: "Enhanced deduction limits for health insurance premiums.",
      pdfUrl: "#",
      importance: "High",
      tags: ["Health", "Insurance", "Deduction"],
      readTime: "4 min read"
    },
    {
      id: 6,
      circularNo: "Circular No. 12/2025",
      date: "20 Aug 2025",
      section: "Section 194IB",
      type: "CBDT Circular",
      subject: "Clarification on TDS for rent payments by individuals/HUF.",
      pdfUrl: "#",
      importance: "Low",
      tags: ["Rent", "TDS", "Individuals"],
      readTime: "3 min read"
    },
  ];

  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [importanceFilter, setImportanceFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");

  const filteredCirculars = useMemo(() => {
    let data = [...circulars];

    // Search
    if (search.trim()) {
      data = data.filter((c) =>
        `${c.circularNo} ${c.subject} ${c.section} ${c.tags.join(" ")}`
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Year filter
    if (yearFilter !== "All") {
      data = data.filter((c) => c.date.includes(yearFilter));
    }

    // Type filter
    if (typeFilter !== "All") {
      data = data.filter((c) => c.type === typeFilter);
    }

    // Importance filter
    if (importanceFilter !== "All") {
      data = data.filter((c) => c.importance === importanceFilter);
    }

    // Sort
    if (sortBy === "Latest") {
      data = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "Oldest") {
      data = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return data;
  }, [search, yearFilter, typeFilter, importanceFilter, sortBy]);

  // Stats
  const stats = useMemo(() => ({
    total: circulars.length,
    cbdt: circulars.filter(c => c.type === "CBDT Circular").length,
    notification: circulars.filter(c => c.type === "Income Tax Notification").length,
    highPriority: circulars.filter(c => c.importance === "High").length,
  }), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-4 md:p-8">
      {/* HEADER WITH GRADIENT */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 p-6 md:p-8 text-white mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <FiFileText className="text-xl" />
                </div>
                <span className="text-sm font-medium text-blue-200">Income Tax Department</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Tax Circulars & Notifications
              </h1>
              <p className="text-lg text-blue-200 max-w-3xl">
                Official CBDT circulars, notifications, and clarifications for tax professionals and taxpayers
              </p>
            </div>
            
            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">{stats.total}</div>
                <div className="text-xs text-blue-200">Total</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">{stats.cbdt}</div>
                <div className="text-xs text-blue-200">CBDT</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">{stats.notification}</div>
                <div className="text-xs text-blue-200">Notifications</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">{stats.highPriority}</div>
                <div className="text-xs text-blue-200">High Priority</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* SEARCH BAR */}
        <div className="relative mb-8">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <FiSearch className="text-gray-400 text-xl" />
          </div>
          <input
            className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border-0 shadow-lg text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Search circulars by number, section, keyword, or topic..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FILTERS BAR */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FiFilter className="text-gray-400" />
            <span className="font-semibold text-gray-700">Filters</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                <FiCalendar className="inline mr-2" />
                Year
              </label>
              <select
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
              >
                <option value="All">All Years</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                <TbCategory2 className="inline mr-2" />
                Type
              </label>
              <select
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="CBDT Circular">CBDT Circular</option>
                <option value="Income Tax Notification">Notification</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                <TbSection className="inline mr-2" />
                Priority
              </label>
              <select
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={importanceFilter}
                onChange={(e) => setImportanceFilter(e.target.value)}
              >
                <option value="All">All Priority</option>
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Sort By
              </label>
              <select
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="Latest">Latest First</option>
                <option value="Oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* RESULTS COUNT */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Circulars & Notifications
            </h2>
            <p className="text-gray-600">
              {filteredCirculars.length} of {circulars.length} documents found
            </p>
          </div>
          <div className="text-sm text-gray-500">
            Showing {filteredCirculars.length} results
          </div>
        </div>

        {/* CIRCULARS GRID */}
        {filteredCirculars.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <FiFileText className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              No circulars found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCirculars.map((c) => (
              <div
                key={c.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* IMPORTANCE BADGE */}
                <div className={`px-4 py-2 text-xs font-semibold ${
                  c.importance === "High" 
                    ? "bg-red-50 text-red-700 border-b border-red-100"
                    : c.importance === "Medium"
                    ? "bg-amber-50 text-amber-700 border-b border-amber-100"
                    : "bg-green-50 text-green-700 border-b border-green-100"
                }`}>
                  {c.importance} Priority
                </div>

                <div className="p-6">
                  {/* HEADER */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          c.type === "CBDT Circular" 
                            ? "bg-blue-100 text-blue-700"
                            : "bg-purple-100 text-purple-700"
                        }`}>
                          {c.type}
                        </span>
                        <span className="text-sm text-gray-500">
                          <FiCalendar className="inline mr-1" />
                          {c.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {c.circularNo}
                      </h3>
                    </div>
                  </div>

                  {/* SECTION BADGE */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                      <TbSection />
                      {c.section}
                    </span>
                  </div>

                  {/* SUBJECT */}
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {c.subject}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {c.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-50 text-gray-600 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* FOOTER WITH ACTIONS */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      {c.readTime}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={c.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        <FiExternalLink />
                        View Document
                      </a>
                      <a
                        href={c.pdfUrl}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
                      >
                        <FiDownload />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FOOTER NOTE */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            This portal is updated regularly with the latest circulars from the Central Board of Direct Taxes (CBDT).
            For official verification, please refer to the Income Tax Department website.
          </p>
          <p className="mt-2">
            Last updated: {new Date().toLocaleDateString('en-IN', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Circular;