import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { newsDetails } from "./data/detailNewsData";

/* ================= SVG ICON ================= */
const SocialIcon = ({ children }) => (
  <span
    className="
      w-11 h-11 flex items-center justify-center rounded-full
      border border-gray-300 text-gray-600
      transition-all duration-200
      group-hover:bg-black
      group-hover:text-white
      group-hover:border-black
    "
  >
    {children}
  </span>
);

const Twitter = () => (
  <SocialIcon>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 sm:w-6 sm:h-6"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.47 4.47c0 .35.04.7.11 1.03A12.94 12.94 0 013 4s-4 9 5 13a13.07 13.07 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  </SocialIcon>
);

const LinkedIn = () => (
  <SocialIcon>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 sm:w-6 sm:h-6"
    >
      <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.98h4V21H3zM9 8.98h3.8v1.64h.05a4.17 4.17 0 013.75-2.06c4 0 4.75 2.63 4.75 6.05V21h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
    </svg>
  </SocialIcon>
);

const Instagram = () => (
  <SocialIcon>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 sm:w-6 sm:h-6"
    >
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  </SocialIcon>
);

const Facebook = () => (
  <SocialIcon>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 sm:w-6 sm:h-6"
    >
      <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0114 6h2.5v3H14c-.8 0-1 .4-1 1v1.9h3l-.5 3H13v7A10 10 0 0022 12z" />
    </svg>
  </SocialIcon>
);

/* ================= MAIN ================= */

const AuthorPage = () => {
  const { name } = useParams();

  const authorArticle = newsDetails.find((item) => item.author === name);

  if (!authorArticle) return <Navigate to="/" replace />;

  const { authorDetails } = authorArticle;

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-10">
        {/* LEFT – AUTHOR CARD */}
        <aside
          className="
            bg-white border border-gray-200 rounded-lg p-5 sm:p-6 h-fit
            md:sticky md:top-24
            translate-y-[-3px]
            shadow-[0_8px_0_rgba(0,0,0,0.05),0_22px_48px_rgba(0,0,0,0.18)]
          "
        >
          <div className="flex flex-col items-center text-center">
            <img
              src={authorDetails.avatar}
              alt={authorDetails.name}
              className="
                w-24 h-24 sm:w-28 sm:h-28
                rounded-full object-cover border
                shadow-[0_6px_18px_rgba(0,0,0,0.18)]
              "
            />

            <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
              {authorDetails.name}
            </h1>

            <p className="text-sm sm:text-md text-gray-600 mt-1">
              {authorDetails.role}
            </p>

            <p className="text-xs sm:text-sm text-gray-500">
              {authorDetails.location}
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-4">
              {authorDetails.socials?.twitter && (
                <a
                  href={authorDetails.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <Twitter />
                </a>
              )}
              {authorDetails.socials?.linkedin && (
                <a
                  href={authorDetails.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <LinkedIn />
                </a>
              )}
              {authorDetails.socials?.instagram && (
                <a
                  href={authorDetails.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <Instagram />
                </a>
              )}
              {authorDetails.socials?.facebook && (
                <a
                  href={authorDetails.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <Facebook />
                </a>
              )}
            </div>
          </div>
        </aside>

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
    </div>
  );
};

export default AuthorPage;
