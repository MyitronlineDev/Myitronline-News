import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { authorData } from "./data/authorData";
import Modal from "../../common/Modal";
import { FaWhatsapp } from "react-icons/fa";

const AuthorPage = () => {
  let { name } = useParams();
  const [open, setOpen] = useState(false);
  name = name.replaceAll(" ", "-");
  const authorArticle = authorData.find((item) => item.author === name);

  if (!authorArticle) return <Navigate to="/" replace />;
  const { authorDetails } = authorArticle;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div
              className="relative group cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-black/10 to-black/5 rounded-3xl blur-lg opacity-70"></div>
              <img
                className="relative w-56 sm:w-64 md:w-72 rounded-3xl transition duration-500 group-hover:scale-105 animate-float"
                src={authorDetails.avatar}
                alt="author"
              />
              <div className="absolute inset-0 rounded-3xl bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  Preview
                </span>
              </div>
            </div>

            {/* AUTHOR INFO */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                Author Profile
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mt-3 text-gray-900">
                {authorDetails.name}
              </h1>
              <div className="mt-4 space-y-1 text-gray-600 text-sm md:text-base">
                <p className="font-medium">{authorDetails.role}</p>
                <p>{authorDetails.location}</p>
                <p>{authorDetails.Call}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition duration-300 shadow-md hover:scale-105"
                >
                  <FaWhatsapp className="text-xl" />
                  Message Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FULL WIDTH BIO ===== */}
        <div className="mt-16 md:mt-20 bg-white p-8 md:p-12 rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            {authorDetails.header}
          </h3>

          <p className="text-gray-600 leading-relaxed text-justify text-base md:text-lg">
            {authorDetails.bio}
          </p>
        </div>

      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex justify-center">
          <img
            src={authorDetails.avatar}
            alt="author"
            className="max-h-[85vh] w-auto rounded-3xl"
          />
        </div>
      </Modal>
    </div>
  );
};

export default AuthorPage;
