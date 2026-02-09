import React from "react";

const About = () => {
  return (
    <main className="w-full font-sans text-gray-800">
      {/* ================= HERO ================= */}
      <section className="bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-20 items-center">
          {/* TEXT */}
          <div className="text-white max-w-lg">
            <h1 className="text-5xl font-light leading-tight mb-3">
              We are a <br />
              <span className="font-semibold text-[#c9a24d]">
                Digital Studio
              </span>
            </h1>

            <p className="text-white/70 mb-6 leading-relaxed">
              We create meaningful digital experiences that help brands grow,
              connect, and stand out in the modern world.
            </p>

            <button className="px-10 py-3 rounded-full border-2 border-[#c9a24d] text-sm tracking-wide text-[#c9a24d] hover:bg-[#c9a24d] hover:text-[#0f172a] transition duration-300">
              READ MORE
            </button>
          </div>

          {/* HERO IMAGE (priority load) */}
          <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-[#c9a24d]/20">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70"
              alt="Digital Studio"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-[1.03] transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT INTRO ================= */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <span className="uppercase text-md font-semibold tracking-[0.25em] text-gray-500">
            About Us
          </span>

          <h2 className="text-4xl font-semibold mt-3 mb-5 leading-tight text-gray-900">
            An overview of your <br />
            <span className="font-bold text-[#c9a24d]">digital strategy.</span>
          </h2>

          <button className="px-8 py-3 rounded-full border-2 border-[#c9a24d] text-sm text-[#c9a24d] hover:bg-[#c9a24d] hover:text-white transition duration-300">
            OUR MISSION
          </button>
        </div>
      </section>

      {/* ================= DARK SERVICES BLOCK ================= */}
     <section className="bg-white py-10">
  <div className="max-w-6xl mx-auto px-6">
    <div className="relative bg-[#0f172a] rounded-2xl shadow-2xl overflow-hidden">

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] lg:min-h-[520px]">

        {/* LEFT IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=70"
          alt="Team Work"
          loading="lazy"
          className="
            w-full
            h-64 sm:h-80 lg:h-[520px]
            object-cover
            transition
            duration-500
            hover:scale-[1.03]
            lg:rounded-l-2xl
          "
        />

       {/* RIGHT CONTENT */}
<div className="px-6 sm:px-10 lg:px-20 py-10 sm:py-14 lg:py-20 flex items-center justify-center">
  <div className="grid sm:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 lg:gap-y-14 text-sm text-white text-center lg:text-left">

    {[
      {
        title: "Design",
        items: ["Web Design", "Art Direction", "Logo & Branding", "UI / UX"],
      },
      {
        title: "Digital & Mobile",
        items: ["Websites", "Responsive Design", "Mobile & Tablet", "iOS & Android Apps"],
      },
      {
        title: "Development",
        items: ["Front-end & Back-end", "Interaction Design", "Magento", "WordPress / Laravel"],
      },
      {
        title: "Social Marketing",
        items: ["Social Strategy", "Community Management", "Influencers", "Reporting"],
      },
    ].map((block, i) => (
      <div
        key={i}
        className="flex flex-col items-center lg:items-start"
      >
        <span className="block text-xs sm:text-md uppercase tracking-widest text-[#c9a24d] mb-2">
          Services
        </span>

        <h4 className="font-semibold mb-2">{block.title}</h4>

        <ul className="space-y-3 text-white/70">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="hover:text-[#c9a24d] transition duration-200"
            >
              → {item}
            </li>
          ))}
        </ul>
      </div>
    ))}

  </div>
</div>


      </div>
    </div>
  </div>
</section>


      {/* ================= PRODUCT CARDS ================= */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl font-semibold mb-10 text-gray-900">
            We build <span className="font-bold text-[#c9a24d]">usable</span>{" "}
            products
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Design",
                img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
                items: [
                  "Product Mockup",
                  "Branding",
                  "Illustrations",
                  "UI/UX",
                  "Websites",
                ],
              },
              {
                title: "Marketing",
                img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
                items: [
                  "SEO",
                  "Content Strategy",
                  "Affiliate",
                  "Keywords",
                  "Copywriting",
                ],
              },
              {
                title: "Development",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
                items: [
                  "WordPress",
                  "Web Apps",
                  "Front-end",
                  "APIs",
                  "JavaScript",
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden hover:border hover:border-[#c9a24d]/50"
              >
                <img
                  src={`${card.img}?auto=format&fit=crop&w=600&q=70`}
                  alt={card.title}
                  loading="lazy"
                  
                  className="w-full h-44 object-cover hover:scale-[1.03] transition duration-500"
                />
                <div className="p-8">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 hover:text-[#c9a24d] transition duration-300">
                    {card.title}
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {card.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="hover:text-[#c9a24d] transition duration-200"
                      >
                        ✓ {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
