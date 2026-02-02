import React from "react";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import { articleHeaderContent } from "./articleHeaderContent.js";
import articlesHeaderBg from "../../assets/temp2.png"

const Articles = ({ data }) => {
    const activeHeader = articleHeaderContent.find(
        (item) => item.category_name === data?.[0]?.category_name
    ) || articleHeaderContent[0];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div
                className="relative bg-white overflow-hidden bg-contain bg-top bg-no-repeat pt-10 pb-16"
                style={{ backgroundImage: `url(${articlesHeaderBg})` }}
            >

                {/* Very Light Overlay */}
                <div className="absolute inset-0 bg-black/5"></div>

                {/* CONTENT */}
                <div className="relative max-w-5xl mx-auto px-4 text-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold shadow-sm transition-all border">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {activeHeader.title}
                    </span>

                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
                        {activeHeader.h1}
                    </h1>

                    <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                        {activeHeader.p}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-1 lg:px-4 py-10">
                {data?.length === 0 ? (
                    <p className="text-center text-gray-500">No articles available</p>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all "
                            >
                                <div className="h-48 w-full overflow-hidden">
                                    <img
                                        src={`https://www.apnokaca.com/${item.intro_image}`}
                                        alt={item.title}
                                        className="w-full h-full hover:scale-105 transition-transform duration-300 aspect-video"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                                            {item.category_name}
                                        </span>

                                        <span className="flex items-center text-xs text-gray-500">
                                            <FiCalendar className="mr-1" />
                                            {new Date(item.published_at).toDateString()}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {item.synopsis}
                                    </p>

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
