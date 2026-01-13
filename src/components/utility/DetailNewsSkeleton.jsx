const SkeletonLine = ({ width = "100%", height = "h-4" }) => (
  <div
    className={`bg-gray-200 rounded ${height} animate-pulse`}
    style={{ width }}
  />
);

const DetailNewsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen mt-6">

      {/* HEADER SKELETON */}
      <div className="max-w-4xl space-y-4 mb-8">
        <SkeletonLine width="25%" height="h-3" />   {/* Category */}
        <SkeletonLine width="95%" height="h-8" />   {/* Title */}
        <SkeletonLine width="75%" height="h-6" />   {/* Sub-heading */}
        <SkeletonLine width="100%" height="h-4" />  {/* Synopsis line */}
        <SkeletonLine width="85%" height="h-4" />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-12 gap-4">

        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:block col-span-3">
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonLine key={i} height="h-4" />
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="col-span-12 lg:col-span-9">
          <article className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">

            {/* HERO IMAGE */}
            <div className="w-full aspect-video bg-gray-200 animate-pulse" />

            {/* CONTENT LINES */}
            <div className="p-4 space-y-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <SkeletonLine key={i} />
              ))}
            </div>

          </article>

          {/* RIGHT SIDEBAR (RELATED) */}
          <div className="hidden lg:block mt-8 space-y-3 max-w-sm">
            <SkeletonLine height="h-5" width="60%" />
            <SkeletonLine height="h-4" />
            <SkeletonLine height="h-4" />
            <SkeletonLine height="h-4" />
          </div>
        </main>

      </div>
    </div>
  );
};

export default DetailNewsSkeleton;
