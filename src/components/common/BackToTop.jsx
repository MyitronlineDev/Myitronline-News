import { useEffect, useState } from "react";

export default function BackToTop() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed right-8 bottom-8 h-12 w-12 rounded-full
                 border-2 border-black-400
                 flex items-center justify-center
                 bg-transparent overflow-hidden"
    >
      {/* Fill */}
      <span
        className="absolute bottom-0 left-0 w-full bg-yellow-400 transition-all duration-200"
        style={{ height: `${scrollPercent}%` }}
      />

      {/* Arrow */}
      <svg
        className="relative z-10 h-5 w-5 text-black"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden
      >
        <path
          d="M5 15l7-7 7 7"
          strokeWidth="2"   
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
