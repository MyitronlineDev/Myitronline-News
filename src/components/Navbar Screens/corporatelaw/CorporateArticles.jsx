import React from "react";

function Articles() {
  return (
    <main className="bg-white text-gray-900">
      {/* Article Wrapper */}
      <article className="max-w-5xl mx-auto px-4 py-12">
        {/* Article Type */}
        <p className="text-center text-sm text-gray-500 mb-2">
          Professional News Article     
        </p>

        {/* Title */}
        <h1 className="text-center text-5xl sm:text-4xl font-semibold leading-snug mb-2">
          The Timeless Value of Professional News Articles: A Historical Record
          for the Future
        </h1>

        {/* Author */}
        <p className="text-center text-sm text-gray-500 mb-3">
          Prepared by: <span className="font-medium">Editorial Desk</span>
        </p>

        <hr className="mb-4" />

        {/* Section I */}
        <section className="mb-5">
          <h2 className="text-xl font-semibold mb-2">I. Introduction</h2>
          <p className="leading-relaxed">
            In an era where information is constantly evolving, the role of
            professional news articles in preserving a historical record of
            events is more vital than ever. These articles provide a detailed
            account of developments, ensuring that future generations can look
            back on significant moments with accuracy and context. professional
            news articles in preserving a historical record of events is more
            vital than ever. These articles provide a detailed account of
            developments, ensuring that future generations can look back on
            significant moments with accuracy and context.
          </p>
        </section>

        {/* Image */}
        <figure className="mb-6">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200"
            alt="Newspaper"
            className="w-240 h-140 rounded"
          />
        </figure>

        {/* Section II */}
        <section className="mb-5">
          <h2 className="text-xl font-semibold mb-3">
            II. The Role of Professional News Articles in Historical
            Documentation
          </h2>

          <h3 className="text-lg font-medium mb-2">
            A. Ensuring Accuracy and Integrity
          </h3>

          <p className="leading-relaxed">
            Professional news articles are created with a strong commitment to
            accuracy and integrity. Journalists verify information through
            credible sources and follow strict editorial standards to ensure
            reliability. Professional news articles are created with a strong
            commitment to accuracy and integrity. Journalists verify information
            through credible sources and follow strict editorial standards to
            ensure reliability.
          </p>
        </section>

        {/* Paragraph */}
        <section className="mb-5">
          <p className="leading-relaxed">
            This discipline allows news articles to function as reliable
            resources for historians, researchers, policymakers, and the general
            public.This discipline allows news articles to function as reliable
            resources for historians, researchers, policymakers, and the general
            public.
          </p>
        </section>

        <hr className="mt-4" />

        {/* Footer Meta */}
        <footer className="mt-3 text-sm text-gray-500">
          <p>Published on: January 5, 2026</p>
        </footer>
      </article>
    </main>
  );
}

export default Articles;
