import { useEffect } from "react";
import DOMPurify from "dompurify";
import { useTextSize } from "../../context/TextSizeContext";

const Content = ({ contents }) => {
  const { scale } = useTextSize();

  if (!contents || typeof contents !== "string") return null;

  useEffect(() => {
    // Remove old injected style (avoid duplicates)
    const oldStyle = document.getElementById("mat-style-block");
    if (oldStyle) oldStyle.remove();

    // Extract <style> from API HTML
    const styleMatch = contents.match(/<style[^>]*>([\s\S]*?)<\/style>/i);

    if (styleMatch) {
      const style = document.createElement("style");
      style.id = "mat-style-block";
      style.innerHTML = styleMatch[1];
      document.head.appendChild(style);
    }

    return () => {
      const cleanupStyle = document.getElementById("mat-style-block");
      if (cleanupStyle) cleanupStyle.remove();
    };
  }, [contents]);

  // Remove <style> tag from HTML before rendering body
  const bodyHTML = contents.replace(/<style[^>]*>[\s\S]*?<\/style>/i, "");

  const cleanHTML = DOMPurify.sanitize(bodyHTML, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["id"],
  });

  return (
    <div style={{ fontSize: `${scale}rem` }} className="">
      <article dangerouslySetInnerHTML={{ __html: cleanHTML }} className="w-full m-0 p-1 lg:p-3 "/>
    </div>
  );
};

export default Content;
