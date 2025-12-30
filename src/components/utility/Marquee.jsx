import React from "react";

function Marquee() {
  const headlines = [
    "Earthquake reported in Tokyo, magnitude 6.1",
    "Global markets rise amid inflation slowdown",
    "Prime Minister to address the nation tonight",
  ];

  return (
    <>
      <div className="flex items-center h-11 bg-zinc-900 text-white overflow-hidden">
        {/* BREAKING label */}
        <span className="bg-red-600 px-3 py-1 text-sm font-bold tracking-wide shrink-0">
          BREAKING
        </span>

        {/* Marquee area */}
        <div className="relative flex-1 overflow-hidden ml-3">
          <div className="flex whitespace-nowrap marquee">
            {headlines.map((text, index) => (
              <span key={index} className="mr-12 text-sm">
                {text}
                <span className="mx-6 text-zinc-500">•</span>
              </span>
            ))}

            {/* Duplicate content for smooth infinite scroll */}
            {headlines.map((text, index) => (
              <span key={`dup-${index}`} className="mr-12 text-sm">
                {text}
                <span className="mx-6 text-zinc-500">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Marquee;
