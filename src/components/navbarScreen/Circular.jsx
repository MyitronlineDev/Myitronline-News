import React from "react";
import {
  FiCalendar,
  FiExternalLink,
  FiDownload,
  FiFileText,
  FiArrowRight,
  FiBell,
  FiAlertCircle,
} from "react-icons/fi";
import { formatDateDDMMYY } from "../utility/formatter";

const Circular = ({ data }) => {
  // Get current category from first item
  const currentCategory = data[0]?.category_name || "Circulars";

  const categoryColors = {
    Default: "from-[#1546E1] to-[#0F37B5]",
  };

  const categoryColor =
    categoryColors[currentCategory] || categoryColors.Default;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* MODERN HEADER WITH GRADIENT */}
        <div
          className={`relative overflow-hidden bg-linear-to-r ${categoryColor} text-white rounded-2xl shadow-2xl mb-12`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-20"></div>

          <div className="relative p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <FiFileText className="text-xl" />
              </div>
              <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {currentCategory}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Circulars &<br />
              <span className="text-blue-200">Notifications</span>
            </h1>

            <p className="text-lg text-white/80 max-w-2xl">
              Official {currentCategory.toLowerCase()} circulars, notifications,
              and regulatory updates
            </p>

            <div className="flex items-center gap-2 mt-6 text-sm text-white/60">
              <FiAlertCircle />
              <span>
                Updated in real-time • Official sources • Verified documents
              </span>
            </div>
          </div>
        </div>
        {/* CIRCULARS GRID */}
        {data?.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <FiFileText className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No circulars found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              There are currently no {currentCategory.toLowerCase()} circulars
              available. Check back later for updates.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`h-2 ${index === 0 ? "bg-linear-to-r from-blue-500 to-purple-500" : "bg-linear-to-r from-gray-300 to-gray-400"}`}
                ></div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      {/* BADGE AND DATE */}
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            item.category_name === "Income Tax"
                              ? "bg-emerald-100 text-emerald-700"
                              : item.category_name === "GST"
                                ? "bg-violet-100 text-violet-700"
                                : item.category_name === "RBI"
                                  ? "bg-rose-100 text-rose-700"
                                  : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {item.category_name}
                        </span>

                        <div className="flex items-center text-sm text-gray-500">
                          <FiCalendar className="mr-1" />
                          {formatDateDDMMYY(item.published_at)}
                        </div>
                      </div>

                      {/* TITLE - Larger for first item */}
                      <h3
                        className={`font-bold text-gray-900 mb-2 ${
                          index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* HEADING */}
                      <p
                        className={`font-medium text-gray-700 mb-3 ${
                          index === 0 ? "text-lg" : "text-base"
                        }`}
                      >
                        {item.circular_heading}
                      </p>
                    </div>

                    {/* PDF BADGE */}
                    {item.pdf_file && (
                      <div className="shrink-0">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-lg text-red-700 font-medium">
                          <FiFileText />
                          <span>PDF</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className={`text-gray-600 mb-6 ${
                      index === 0 ? "text-lg line-clamp-4" : "line-clamp-3"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* ACTION BUTTONS */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                        Official
                      </span>
                      <span>•</span>
                      <span>Reference: #{item.id}</span>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={item.pdf_file}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all group/btn"
                      >
                        <FiExternalLink className="group-hover/btn:translate-x-1 transition-transform" />
                        View Document
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FOOTER NOTE */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FiAlertCircle className="text-blue-600 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">
                About these circulars
              </h4>
              <p className="text-gray-600 text-sm">
                These are official {currentCategory.toLowerCase()} circulars
                published by regulatory authorities. Always refer to the
                original PDF documents for legal purposes. This page is updated
                automatically as new circulars are published.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circular;
