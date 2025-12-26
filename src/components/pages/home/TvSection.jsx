import React from "react";

const tvArticles = [
  {
    id: 1,
    title:
      "Ariana Grande supports fans boycotting her song 7 Rings for this funny reason",
    date: "02/15/2019",
    image:
      "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title:
      "Frozen 2 trailer: Elsa and crew are back in a scarier, darker sequel",
    date: "02/15/2019",
    image:
      "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Chance the Rapper releasing debut album this summer",
    date: "02/15/2019",
    image:
      "https://th.bing.com/th/id/OIP.EyWHRmqhSvwcqyeR-85GBAHaGR?w=179&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
  },
  {
    id: 4,
    title:
      "Kate Gosselin to star in new reality show, Kate Plus Date",
    date: "02/15/2019",
    image:
      "https://images.pexels.com/photos/2706379/pexels-photo-2706379.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function TvSection() {
  return (
    <section className="w-full px-2 py-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold tracking-tight mb-4">TV</h2>

      {/* List */}
      <div className="space-y-5">
        {tvArticles.map((item) => (
          <article
            key={item.id}
            className="flex gap-4 items-start"
          >
            {/* Thumbnail */}
            <div className="shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-16 md:w-28 md:h-20 object-cover rounded"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-sm md:text-base font-semibold leading-snug hover:text-blue-600 cursor-pointer line-clamp-2">
                {item.title}
              </h3>

              <span className="mt-1 block text-xs font-semibold text-gray-500">
                {item.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TvSection;
