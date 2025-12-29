import { useTextSize } from "../../context/TextSizeContext";

const Content = ({ contents }) => {
  const { scale } = useTextSize();

  if (!contents || typeof contents !== "string") return null;

  return (
    <article
      className="article-content max-w-3xl mx-auto leading-relaxed"
      style={{ fontSize: `${scale}rem` }}
      dangerouslySetInnerHTML={{ __html: contents }}
    />
  );
};

export default Content;
