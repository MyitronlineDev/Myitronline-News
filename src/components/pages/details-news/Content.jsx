import { useTextSize } from "../../context/TextSizeContext";
import ReadMoreLess from "../../common/ReadMoreLess";

const Content = ({ contents, featuredImage = [] }) => {
  const { scale } = useTextSize();
  const image = featuredImage?.[0];

  if (typeof contents === "string") {
    return (
      <div
        className="relative  max-w-none"
        style={{ fontSize: `${scale}rem`}}
        dangerouslySetInnerHTML={{ __html: contents }}
      />
    );
  }

  if (!Array.isArray(contents) || contents.length === 0) {
    return null;
  }

  return (
    <div className="relative" style={{ fontSize: `${scale}rem` }}>

      {/* IMAGE FLOATS ONLY FOR FIRST PARAGRAPH */}
      {/* {image && (
        <div className="float-right ml-6 w-100 sm:w-150 wrap-image">
          <img
            src={image.url}
            alt={image.caption}
            className="rounded-xl w-full h-auto shadow-md"
          />
          <p className="text-xs text-gray-500 italic mt-2">
            {image.caption}
          </p>
        </div>
      )} */}

      {/* FIRST PARAGRAPH */}
      {/* <p className="text-gray-800 leading-relaxed mb-6 text-justify">
        {contents[0]?.text}
      </p> */}

      {/* <div className="clear-both"></div> */}

      {/* REST CONTENT */}
      {/* <div className="flex flex-col gap-6 leading-relaxed text-justify">
        {contents.slice(1).map((item) => {
          if (item.type === "paragraph") {
            return (
              <ReadMoreLess
                key={item.id}
                text={item.text}
                wordCount={150}
              />
            );
          }

          if (item.type === "quote") {
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
          }

          return null;
        })}
      </div> */}
    </div>
  );
};

export default Content;
