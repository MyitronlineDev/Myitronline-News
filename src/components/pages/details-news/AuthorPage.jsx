import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { newsDetails } from "./data/detailNewsData";
import Modal from "../../common/Modal";

const AuthorPage = () => {
  let { name } = useParams();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  name = name.replaceAll(" ", "-");
  const authorArticle = newsDetails.find((item) => item.author === name);

  if (!authorArticle) return <Navigate to="/" replace />;

  const { authorDetails } = authorArticle;

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-10">
      

        {/* RIGHT – BIO */}
        <section
          className="
            bg-white border border-gray-200 rounded-lg
            p-5 sm:p-6 md:p-8
            translate-y-[-3px]
            shadow-[0_8px_0_rgba(0,0,0,0.05),0_22px_48px_rgba(0,0,0,0.18)]
          "
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            About the Author
          </h2>

          <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
            {authorDetails.bio}
          </p>

          <p className="mt-6 text-md sm:text-md text-gray-500">
            Writing for{" "}
            <span className="font-medium text-gray-800">Myitronline News</span>{" "}
            since {authorDetails.joined}
          </p>

          
        </section>

      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <img
            src={authorDetails.avatar}
            alt={authorDetails.name}
            className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
          />
      </Modal>
    </div>
  );
};

export default AuthorPage;
