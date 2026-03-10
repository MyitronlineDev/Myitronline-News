import React from "react";
import { useNavigate } from "react-router-dom";

// const articles = [
//   {
//     id: 1,
//     title: "Samsung Galaxy S10 listed for pre-orders in US",
//     excerpt:
//       "Refreshingly, what was expected of her was the same thing that was expected of...",
//     author: "Vaughan Chance",
//     date: "02/15/2019",
//     image:
//       "https://th.bing.com/th/id/OIP.zHgren8jh2Md-qtBDzkDXgHaE8?w=261&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
//   },
//   {
//     id: 2,
//     title: "Apple to ship iPhones with only Qualcomm chips to German stores",
//     excerpt:
//       "Refreshingly, what was expected of her was the same thing that was expected of...",
//     author: "Vaughan Chance",
//     date: "02/15/2019",
//     image:
//       "https://th.bing.com/th/id/OIP.QQhJFxBDyflPwy0QSVmFbwHaE8?w=289&h=193&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
//   },
//   {
//     id: 3,
//     title: "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth quarter",
//     excerpt:
//       "Refreshingly, what was expected of her was the same thing that was expected of...",
//     author: "Vaughan Chance",
//     date: "02/15/2019",
//     image:
//       "https://www.bing.com/th/id/OIP.Io4NxaPEmw00gX43oJjpiwHaDt?w=281&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&pid=3.1&rm=2&ucfimg=1",
//   },
//   {
//     id: 4,
//     title: "Samsung says expects $4 billion in Indian sales of new smartphone range",
//     excerpt:
//       "Refreshingly, what was expected of her was the same thing that was expected of...",
//     author: "Vaughan Chance",
//     date: "02/15/2019",
//     image:
//       "https://th.bing.com/th/id/OIP.fQ7FnwMy4zLEH2mRbJdGngHaE8?w=255&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
//   },
// ];

function Technology({articles = []}) {
  const navigate = useNavigate();
  const handleNavigate = (slug) => {
    navigate(`/detail-news/${slug}/myitronline`);
  }
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 font-sans">
      <h2 className="text-3xl font-bold tracking-tight mb-6">
        Budget
      </h2>

      <div className="space-y-6">
        {articles.map((article) => (
          <article
            key={article.id}
            onClick={() => handleNavigate(article.slug)}
            className="flex gap-4 border-b border-gray-200 pb-4 last:border-b-0"
          >
            <div className="shrink-0">
              <img
                src={article.image}
                alt={article.title}
                  loading="lazy"
                className="w-28 h-24 object-cover "
              />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold">
                {article.title}
              </h3>

              <p className="mt-1 text-l text-gray-600">{article.excerpt}</p>

              <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-500 flex items-center gap-2">
                <span>{article.author}</span>
                <span className="w-1 h-1 rounded-full bg-gray-400" />
                <span className="text-gray-500 text-sm">{article.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Technology;
