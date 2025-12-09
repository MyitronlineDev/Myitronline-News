const Content = ({ contents = [], featuredImage = [] }) => {
  const image = featuredImage?.[0];

  return (
    <div className="relative">

      {/* IMAGE FLOATS ONLY FOR FIRST PARAGRAPH */}
      {image && (
        <div
          className="
            float-right 
            ml-6 
            mb-4 
            w-100 
            sm:w-150 
            wrap-image
          "
        >
          <img
            src={image.url}
            alt={image.caption}
            className="rounded-xl shadow-md w-full h-auto"
          />
         
          <p className="text-sm text-gray-500 italic mt-1">{image.caption}</p>
        </div>
      )}

      {/* FIRST PARAGRAPH ONLY (WRAPPED AROUND IMAGE) */}
      {contents[0] && (
        <p className="text-gray-800 text-lg leading-relaxed mb-6 text-justify">
          {contents[0].text}
        </p>
      )}

      {/* STOP FLOAT HERE → NO GAP BELOW IMAGE */}
      <div className="clear-both"></div>

      {/* REST PARAGRAPHS FULL-WIDTH */}
      <div className="flex flex-col gap-6 text-lg leading-relaxed text-justify">
        {contents.slice(1).map((item) => {
          switch (item.type) {
            case "paragraph":
              return <p key={item.id}>{item.text}</p>;

            case "quote":
              return (
                <blockquote
                  key={item.id}
                  className="border-l-4 pl-4 italic text-gray-600 text-xl"
                >
                  “{item.text}”
                  <span className="block mt-2 text-sm text-gray-500">
                    — {item.by}
                  </span>
                </blockquote>
              );

            default:
              return null;
          }
        })}
      </div>

    </div>
  );
};

export default Content;
