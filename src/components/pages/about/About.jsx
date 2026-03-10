import React from "react";
import gst from "../../../assets/gst.jpg";
import income from "../../../assets/income.jpeg";
import corporate from "../../../assets/corporate.jpg";
import Aboutus from "../../../assets/About.jpeg";
import about from "../../../assets/Aboutus.jpeg";

const About = () => {
  return (
    <main className="w-full font-sans text-gray-800">
      {/* ================= HERO ================= */}
      <section className="bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-20 items-center">
          {/* TEXT */}
          <div className="text-white max-w-lg">
            <h1 className="text-4xl font-light leading-tight mb-4">
              We are a <br />
              <span className="font-semibold text-4xl text-[#c9a24d]">
                Digital Financial News Studio
              </span>
            </h1>

            <p className="text-white/70 mb-1 leading-relaxed">
              We create structured, insightful, and simplified financial
              journalism that helps taxpayers, professionals, corporates,
              startups, and business owners stay ahead in a constantly evolving
              regulatory environment.
            </p>
            <p className="text-white/70 leading-relaxed">
              In today’s fast-changing financial landscape, staying informed is
              not optional. It is essential. Myitronline News bridges the gap
              between complex legal language and practical understanding.
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-[#c9a24d]/20">
            <img
              src={about}
              alt="Digital Studio"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-[1.03] transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT INTRO ================= */}
      {/* ================= ABOUT INTRO ================= */}
      <section className="bg-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold  mb-2 leading-tight text-gray-900">
            An Overview of Your <br />
            <span className="font-bold text-[#c9a24d]">
              Financial Information Strategy.
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-4xl">
            Myitronline News is a financial-focused news platform powered by
            MyITRonline, a trusted name in tax and compliance services.
          </p>

          <p className="mt-1 text-gray-600 leading-relaxed max-w-4xl">
            Our editorial focus includes:
          </p>

          <ul className="mt-1 text-gray-600 leading-relaxed max-w-4xl space-y-1">
            <li>• Income Tax amendments and rulings</li>
            <li>• GST notifications and circulars</li>
            <li>• Corporate law developments</li>
            <li>• MCA and ROC compliance updates</li>
            <li>• Budget announcements</li>
            <li>• Global economic and policy shifts</li>
          </ul>

          <p className="mt-2 text-gray-600 leading-relaxed max-w-4xl">
            We aim to deliver clarity, not confusion.
          </p>

          <h3 className="mt-2 text-xl font-semibold text-gray-900">
            Our Vision
          </h3>
          <p className="mt-1 text-gray-600 leading-relaxed max-w-4xl">
            To become a reliable digital source for financial and compliance
            journalism that professionals trust.
          </p>

          <h3 className="mt-2 text-xl font-semibold text-gray-900">
            Our Mission
          </h3>
          <p className="mt-1 text-gray-600 leading-relaxed max-w-4xl">
            To simplify regulatory updates and provide practical insights that
            help businesses and individuals make informed financial decisions.
          </p>
        </div>
      </section>

      {/* ================= DARK SERVICES BLOCK ================= */}
      <section className="bg-white py-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative bg-[#0f172a] rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] lg:min-h-[520px]">
              {/* LEFT IMAGE */}
              <img
                src={ Aboutus}
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
              <div className="px-8 sm:px-12 lg:px-20 py-12 lg:py-20 flex items-center">
                <div className="grid sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-6 text-sm text-white">
                  {[
                    {
                      title: "Financial News & Analysis",
                      items: [
                        "Income Tax updates and amendments",
                        "CBDT notifications",
                        "Tribunal and court rulings",
                        "Refund and notice alerts",
                      ],
                    },
                    {
                      title: "GST & Indirect Tax Coverage",
                      items: [
                        "GST Council decisions",
                        "Filing deadline alerts",
                        "ITC clarifications",
                        "E-invoicing changes",
                      ],
                    },
                    {
                      title: "Corporate & Regulatory News",
                      items: [
                        "MCA updates",
                        "ROC compliance news",
                        "Director responsibilities",
                        "Company law amendments",
                      ],
                    },
                    {
                      title: "Global Financial Developments",
                      items: [
                        "International tax reforms",
                        "Economic policy changes",
                        "Inflation and interest rate movements",
                        "Cross-border regulatory updates",
                      ],
                    },
                  ].map((block, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-sm uppercase tracking-[0.2em] text-[#c9a24d] mb-1">
                        Services
                      </span>

                      <h4 className="font-semibold text-sm text-white">
                        {block.title}
                      </h4>

                      <ul className="space-y-1 text-white/70">
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
      <section className="bg-white py-7">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl font-semibold mb-6 text-gray-900">
            We Build{" "}
            <span className="font-bold text-[#c9a24d]">Usable Financial</span>{" "}
            Insights
          </h2>

        <div className="grid md:grid-cols-3 gap-12">
  {[
    {
      title: "Income Tax",
      img: income,
      items: [
        "Section-wise amendments",
        "Tax regime comparisons",
        "ITR filing deadlines",
        "TDS/TCS compliance",
      ],
    },
    {
      title: "GST",
      img: gst,
      items: [
        "Rate revisions",
        "GSTR compliance",
        "Notices and penalties",
        "ITC eligibility",
      ],
    },
    {
      title: "Corporate",
      img: corporate,
      items: [
        "Annual filing alerts",
        "Board compliance",
        "Corporate penalties",
        "Startup ecosystem updates",
      ],
    },
  ].map((card, i) => (
    <div
      key={i}
      className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden hover:border hover:border-[#c9a24d]/50"
    >
      <img
        src={card.img}
        alt={card.title}
        loading="lazy"
        className="w-full h-44 object-cover hover:scale-[1.03] transition duration-500"
      />
      <div className="p-8">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 hover:text-[#c9a24d] transition duration-300">
          {card.title}
        </h3>
        <ul className="text-md text-gray-600 space-y-1">
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
          <p className="text-center mt-5 text-lg font-medium text-gray-600">
            Our goal is simple: actionable information, not complicated
            interpretation.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
