import { useTextSize } from "../../context/TextSizeContext";
import ReadMoreLess from "../../common/ReadMoreLess";

const Content = ({ contents = [], featuredImage = [] }) => {
  const image = featuredImage?.[0];

  // Get current font size from context
  const { scale } = useTextSize();

  return (
    <div className="relative" style={{ fontSize: `${scale}rem` }}>

      {/* IMAGE FLOATS ONLY FOR FIRST PARAGRAPH */}
      {image && (
        <div
          className="
          float-right ml-6
          w-100 sm:w-150
          wrap-image
          transition-all duration-300
        ">
          <img
            src={image.url}
            alt={image.caption}
            className="
            rounded-xl w-full h-auto
            shadow-md
            transition-all duration-500
            hover:shadow-xl hover:scale-[1.03]
          "/>
          <p className="text-xs sm:text-sm text-gray-500 italic mt-2">
            {image.caption}
          </p>
        </div>
      )}

      {/* FIRST PARAGRAPH ONLY (WRAPPED AROUND IMAGE) */}
      {contents[0] && (
        <p className="text-gray-800 leading-relaxed mb-6 text-justify">
          {contents[0].text}
        </p>
      )}

      {/* STOP FLOAT HERE → NO GAP BELOW IMAGE */}
      <div className="clear-both"></div>

      {/* REST PARAGRAPHS FULL-WIDTH */}
      <div className="flex flex-col gap-6 leading-relaxed text-justify">
        {contents.slice(1).map((item) => {
          switch (item.type) {
            case "paragraph":
              return (
                <ReadMoreLess
                  key={item.id}
                  text={item.text}
                  wordCount={150}
                />
              );

            case "quote":
              return (
                <blockquote
                  key={item.id}
                  className="border-l-4 pl-4 italic text-gray-600"
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
