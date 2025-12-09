const RelatedNews = ({ related = [] }) => {
  if (related.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Related News</h2>

      <div className="space-y-3">
        {related.map((item) => (
          <div
            key={item.id}
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition cursor-pointer"
          >
            ➜ {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedNews;
