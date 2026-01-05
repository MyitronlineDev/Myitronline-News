import { useTextSize } from "../../context/TextSizeContext";

const Content = ({ contents }) => {
  const { scale } = useTextSize();

  if (!contents || typeof contents !== "string") return null;

  return (
    <article
      className="
        article-content
        prose
        max-w-none
        overflow-x-hidden
      "
      style={{ fontSize: `${scale}rem` }}
      dangerouslySetInnerHTML={{ __html: contents }}
    />
  );
};

export default Content;

