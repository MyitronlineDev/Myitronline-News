import React from "react";

const About = () => {
  return (
    <section className="bg-linear-to-b from-zinc-950 to-zinc-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== TOP SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-xs tracking-widest uppercase bg-yellow-300 text-yellow-600 rounded-full">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Safe, Comprehensive <br />
              <span className="text-yellow-400">and Fast Platform</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              The world’s financial industry is shifting from traditional,
              centralized systems to transparent, technology-driven and
              decentralized platforms. We believe the advancement of
              blockchain technology represents the fourth industrial and
              revolution.
            </p>

          
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-tr from-yellow-400/20 to-blue-500/10 rounded-2xl blur-2xl"></div>

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team discussion"
              className="relative rounded-2xl shadow-2xl border border-zinc-900"
            />
          </div>
        </div>

        {/* ===== STATS SECTION ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24">

          {[
            { label: "Number of Transactions", value: "20,123+" },
            { label: "Established Year", value: "2014" },
            { label: "Active Users", value: "13,560+" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-4xl font-semibold text-yellow-400 mb-2">
                {item.value}
              </h3>
              <p className="text-gray-400 tracking-wide text-sm uppercase">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About;
