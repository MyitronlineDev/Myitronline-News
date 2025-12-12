import React from "react";

const CalibrityFood = () => {
const foodArticles = [
  {
    id: 1,
    title: "Ben & Jerry’s Added Two New Vegan Flavors To Its Dairy-Free Line-Up",
    date: "02/15/2019",
    image:
      "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "The 10 Best Keto Cookbooks Out There",
    date: "02/15/2019",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "The best ways to get more fibre in your diet",
    date: "02/15/2019",
    image:
      "https://images.pexels.com/photos/236781/pexels-photo-236781.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Where your favourite fruits and vegetables are grown",
    date: "02/15/2019",
    image:
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-4">
      <div className="lg:col-span-7 px-4">
        <h2 className="text-3xl font-bold mb-6">CELEBRITES</h2>
        <div className="relative mb-8">
          <img
            src="https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            className="w-full aspect-video object-cover "
            alt="Thumbnail"
          />
          <div className="border border-black absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-3 bg-white">
            <span className="font-semibold">CELEBRITES</span>
          </div>
        </div>
        <div className="text-center ">
          <h2 className="text-3xl font-bold px-4">
            Who Didn't Go to the Grammys This Year?
          </h2>
          <p className="text-gray-500 ">
            Refreshingly, what was expected of her was the same...
          </p>
          <p className="text-gray-500 font-bold uppercase">Vaughan Chance</p>
        </div>
      </div>
      <div className="lg:col-span-5 px-4">
        <h2 className="text-3xl font-bold tracking-tight mb-6">FOOD & DRINK</h2>

        {/* List */}
        <div className="space-y-4">
          {foodArticles.map((item) => (
            <article key={item.id} className="flex gap-3">
              {/* Thumbnail */}
              <div className="shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-25 h-18 object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-l font-semibold leading-snug ">
                  {item.title}
                </h3>
                <span className="mt-1 font-semibold text-sm text-gray-500">
                  {item.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalibrityFood;
