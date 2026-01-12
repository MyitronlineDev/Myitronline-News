import { useTextSize } from "../../context/TextSizeContext";
import DOMPurify from "dompurify";




const Content = ({ contents }) => {
  const { scale } = useTextSize();
  const cleanHTML = DOMPurify.sanitize(contents, {
  USE_PROFILES: { html: true },
});

  if (!contents || typeof contents !== "string") return null;

  return (
    <article
      lang="hi"
      dir="ltr"
      className="
      article-content
      prose
      prose-neutral
      max-w-none
      overflow-x-hidden

      prose-p:leading-[1.9]
      prose-p:my-4
      prose-li:leading-[1.8]

      prose-h2:mt-10
      prose-h2:mb-4
      prose-h3:mt-8
      prose-h3:mb-3
    "
      style={{ fontSize: `${scale}rem` }}
      dangerouslySetInnerHTML={{ __html: cleanHTML }}
    />

  );
};

export default Content;

