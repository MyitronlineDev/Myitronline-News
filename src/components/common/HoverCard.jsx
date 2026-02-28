import React from "react";
import { Link } from "react-router-dom";

const HoverCard = ({ image, title, text, link }) => {
    return (
        <Link to={link} target="_blank">
            <div
                className="
                    relative w-full h-full rounded-xl overflow-hidden 
                    shadow-md transition-all duration-300 
                    hover:scale-105 hover:shadow-xl cursor-pointer 
                "
                >
                {/* Full Image Cover — NO GAP */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Hover Overlay */}
                <div
                    className="
                    absolute inset-0 bg-black/60 
                    flex flex-col justify-center items-center 
                    opacity-0 hover:opacity-100 
                    transition-opacity duration-300
                    p-4 text-center
                    "
                >
                    <h3 className="text-white text-lg font-semibold mb-2">
                        {title}
                    </h3>

                    {text && (
                        <p className="text-gray-200 text-sm mb-3 leading-snug">
                            {text}
                        </p>
                    )}

                    <button
                        className="
                        bg-white text-black px-4 py-1.5 rounded-md 
                        text-sm font-medium shadow 
                        hover:bg-gray-200 transition
                        "
                    >
                        Explore →
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default HoverCard;