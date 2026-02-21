import React from "react";

const TermsAndConditions = () => {
  return (
    <main className="bg-slate-50 text-gray-900">
      {/* ================= HEADER ================= */}
      <div className="bg-linear-to-r from-indigo-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-5 py-10">
          <h1 className="text-4xl font-semibold text-white mb-2">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 text-md max-w-2xl">
             By accessing Myitronline News, you agree to comply with these terms.
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* ================= ARTICLE ================= */}
        <article className="md:col-span-3 md:order-1 order-2">

          {/* INTRO */}
    

          <div className="space-y-10">

            {/* ================= 01 ================= */}
            <section id="section-1" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold">01</span>
                <h2 className="text-2xl font-semibold">Use of Website</h2>
              </div>

              <p className="text-gray-800 leading-relaxed pl-6 max-w-3xl">
                This website provides financial news, tax updates, compliance
                information, and global economic insights for informational purposes only.
              </p>

              <p className="pl-6 mt-1 font-medium text-gray-800">
                You agree not to:
              </p>

              <ul className="list-disc pl-10 mt-1 text-gray-800 space-y-1">
                <li>Use the site for unlawful purposes</li>
                <li>Attempt unauthorized access</li>
                <li>Reproduce content without permission</li>
                <li>Misuse published information</li>
              </ul>
            </section>

            {/* ================= 02 ================= */}
            <section id="section-2" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold">02</span>
                <h2 className="text-2xl font-semibold">No Professional Advice</h2>
              </div>

              <p className="text-gray-800 leading-relaxed pl-6 max-w-3xl">
                Content is for informational purposes only and does not constitute tax,
                legal, accounting, or financial advice.
              </p>

              <p className="pl-6 mt-1 text-gray-800 leading-relaxed max-w-3xl">
                Users must verify official notifications and consult professionals before acting.
              </p>
            </section>

            {/* ================= 03 ================= */}
            <section id="section-3" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold">03</span>
                <h2 className="text-2xl font-semibold">Intellectual Property</h2>
              </div>

              <p className="text-gray-800 leading-relaxed pl-6 max-w-3xl">
                All website content including articles, graphics, logos, and design
                elements are owned by Myitronline Global Services Private Limited.
              </p>

              <ul className="list-disc pl-10 mt-1 text-gray-800 space-y-2">
                <li>Unauthorized copying, reproduction, or commercial use is prohibited.</li>
              </ul>
            </section>

            {/* ================= 04 ================= */}
            <section id="section-4" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold">04</span>
                <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
              </div>

              <p className="text-gray-800 leading-relaxed pl-6 max-w-3xl">
                We are not liable for:
              </p>

              <ul className="list-disc pl-10 mt-1 text-gray-800 space-y-1">
                <li>Financial loss</li>
                <li>Compliance errors</li>
                <li>Business decisions taken based on website content</li>
                <li>Technical interruptions</li>
              </ul>

              <p className="pl-6 mt-1 text-gray-800 leading-relaxed max-w-3xl">
                Use of the website is at your own discretion.
              </p>
            </section>

            {/* ================= 05 ================= */}
            <section id="section-5" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold">05</span>
                <h2 className="text-2xl font-semibold">Modifications</h2>
              </div>

              <p className="text-gray-800 leading-relaxed pl-6 max-w-3xl">
                We reserve the right to modify content, features, or terms without prior notice.
              </p>
            </section>

          </div>
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="md:col-span-1 md:order-2 order-1">
          <div className="sticky top-24 border-l-2 border-indigo-400 pl-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
              Contents
            </h3>

            <ul className="space-y-1 text-sm">
              {[
                "Use of Website",
                "No Professional Advice",
                "Intellectual Property",
                "Limitation of Liability",
                "Modifications",
              ].map((title, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i + 1}`}
                    className="group flex items-center gap-3 rounded-md px-2 py-2
                               text-gray-700 hover:text-indigo-600
                               hover:bg-indigo-50 transition"
                  >
                    <span className="text-gray-400 group-hover:text-indigo-600 text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </main>
  );
};

export default TermsAndConditions;