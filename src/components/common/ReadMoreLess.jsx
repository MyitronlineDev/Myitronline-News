import { useState } from "react";

const ReadMoreLess = ({ text = " ", wordCount = 20 }) => {
  const words = text.split(" ");
  const shortText = words.slice(0, wordCount).join(" ");

  const [isExpended, setIsExpended] = useState(false);

  const displayText = isExpended ? text : shortText + (words.length > wordCount ? "..." : "");

  return (
    <p>{displayText} <span>
      {
        words.length > wordCount && (
          <button onClick={() => setIsExpended(!isExpended)}>
            {isExpended ? "...Read Less" : "Read More"}
          </button>
        )
      }
    </span>
    </p>
  )
}

export default ReadMoreLess