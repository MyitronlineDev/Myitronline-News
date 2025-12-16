import Carousel from "../../common/Carousel";

const RelatedNews = ({ featuredItems = [] }) => {
  if (!featuredItems.length) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      {/* LEFT */}
      <div className="lg:col-span-3 flex items-center">
        <div>
          <h2 className="text-3xl font-bold">Related News</h2>
          <p className="text-gray-600">
            Stories recommended just for you
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:col-span-9 w-full">
        <Carousel
          items={featuredItems}
          slidesPerView={3}
          renderItem={(item) => (
            <div className="group cursor-pointer min-h-[280px] flex flex-col">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute -bottom-2 left-0 bg-white text-xs font-semibold px-2 py-1">
                  {item.category}
                </span>
              </div>

              <h3 className="mt-4 font-semibold text-lg leading-snug line-clamp-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {item.date}
              </p>

            </div>
          )}
        />
      </div>
    </div>
  );
};

export default RelatedNews;
