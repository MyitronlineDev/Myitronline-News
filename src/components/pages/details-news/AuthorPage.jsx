import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { newsDetails } from "./data/detailNewsData";

const AuthorPage = () => {
  const { name } = useParams();

  // Find author from any article
  const authorArticle = newsDetails.find(
    (item) => item.author === name
  );

  if (!authorArticle) {
    return <Navigate to="/" replace />;
  }

  const { authorDetails } = authorArticle;

  return (
    <div className="max-w-6xl mx-auto px-4 mt-12">
      <div className="flex items-center gap-6">
        <img
          src={authorDetails.avatar}
          alt={authorDetails.name}
          className="w-24 h-24 rounded-full object-cover "
        />

        <div>
          <h1 className="text-2xl font-bold">
            {authorDetails.name}
          </h1>
          <p className="text-gray-600">
            {authorDetails.role}
          </p>
          <p className="text-sm text-gray-500">
            {authorDetails.location}
          </p>
        </div>
      </div>

      <p className="mt-6 text-gray-700 leading-relaxed text-justify">
        {authorDetails.bio}
      </p>

      <p className="mt-4 text-sm text-gray-500">
        Writing for Myitronline News since {authorDetails.joined}
      </p>
    </div>
  );
};

export default AuthorPage;
