import React from "react";

const TermsAndConditions = () => {
  return (
    <main className="bg-slate-50 text-gray-900">
      {/* ================= HEADER ================= */}
      <div className="bg-linear-to-r from-indigo-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-5 py-10">
          <h1 className="text-4xl font-semibold text-white mb-1">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl">
            Rules, responsibilities, and policies governing the use of our
            platform.
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ================= SIDEBAR ================= */}
            <article className="md:col-span-3 md:order-1 order-2">
          {/* INTRO */}
          <p className="text-base leading-relaxed text-gray-800 mb-4 max-w-3xl">
            Welcome to <span className="font-semibold">Myitronline Global Services Private Limited</span>.
            By accessing or using this website, you confirm that you have read,
            understood, and agreed to these Terms and Conditions.
          </p>

          <div className="space-y-6">
            {/* ================= 01 ================= */}
            <section id="section-1" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">
                  01
                </span>
                <h2 className="text-3xl font-semibold">Scope of Service</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                We operate as a digital news and information platform providing
                editorial content, analysis, opinion pieces, and related
                services.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>
                  Services may be modified, expanded, or discontinued at any
                  time.
                </li>
                <li>Content availability depends on editorial priorities.</li>
                <li>
                  Access to certain features may be restricted without notice.
                </li>
              </ul>
            </section>

            {/* ================= 02 ================= */}
            <section id="section-2" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">
                  02
                </span>
                <h2 className="text-3xl font-semibold">Use of Content</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                All content published on this website is intended strictly for
                personal and non-commercial use.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>
                  Reproduction or redistribution without permission is
                  prohibited.
                </li>
                <li>Content must not be altered or misrepresented.</li>
                <li>Proper attribution is required where permitted.</li>
              </ul>
            </section>

            {/* ================= 03 ================= */}
            <section id="section-3" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">
                  03
                </span>
                <h2 className="text-3xl font-semibold">
                  Copyright and Ownership
                </h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                All intellectual property rights in the content published on
                this platform are owned by the company or its partners.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>Includes articles, images, videos, graphics, and logos.</li>
                <li>Unauthorized use may result in legal action.</li>
              </ul>
            </section>

            {/* ================= 04 ================= */}
            <section id="section-4" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">
                  04
                </span>
                <h2 className="text-3xl font-semibold">
                  User Responsibilities
                </h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                Users must access and use the platform responsibly and lawfully.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>No disruption of website security or functionality.</li>
                <li>No abusive, defamatory, or unlawful content.</li>
                <li>Violations may result in suspension or termination.</li>
              </ul>
            </section>

            {/* ================= 05 ================= */}
            <section id="section-5" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">
                  05
                </span>
                <h2 className="text-3xl font-semibold">
                  Accuracy of Information
                </h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                Information may change as new facts or clarifications emerge.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>No guarantee of absolute accuracy.</li>
                <li>Opinions belong to respective authors.</li>
                <li>
                  Readers should verify critical information independently.
                </li>
              </ul>
            </section>

            {/* ================= 06 ================= */}
            <section id="section-6" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">
                  06
                </span>
                <h2 className="text-3xl font-semibold">Third-Party Links</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                The website may contain links to third-party websites.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>No control or endorsement of external websites.</li>
                <li>Accessing external links is at the user’s discretion.</li>
              </ul>
            </section>

            {/* ================= 07 ================= */}
            <section id="section-7" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">
                  07
                </span>
                <h2 className="text-3xl font-semibold">
                  Privacy and Data Protection
                </h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                We handle personal information responsibly and transparently.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>Data handled according to our Privacy Policy.</li>
                <li>Security measures are implemented.</li>
                <li>Absolute security cannot be guaranteed.</li>
              </ul>
            </section>

            {/* ================= 08 ================= */}
            <section id="section-8" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">
                  08
                </span>
                <h2 className="text-3xl font-semibold">
                  Limitation of Liability
                </h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                Use of this website is at your own risk. These Terms and
                Conditions are governed by the laws of India.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>No liability for indirect or consequential damages.</li>
                <li>No responsibility for technical issues or downtime.</li>
              </ul>
            </section>

            {/* ================= 09 ================= */}
            <section id="section-9" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">
                  09
                </span>
                <h2 className="text-3xl font-semibold">Governing Law</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                These Terms and Conditions are governed by the laws of India.
                These Terms and Conditions are governed by the laws of India.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>All disputes fall under Indian jurisdiction.</li>
              </ul>
            </section>
          </div>
        </article>

        <aside className="md:col-span-1 md:order-2 order-1">
          <div className="sticky top-20 border-l-2 border-indigo-400 pl-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
              Contents
            </h3>

            <ul className="space-y-1 text-sm">
              {[
                "Scope of Service",
                "Use of Content",
                "Copyright and Ownership",
                "User Responsibilities",
                "Accuracy of Information",
                "Third-Party Links",
                "Privacy and Data Protection",
                "Limitation of Liability",
                "Governing Law",
              ].map((title, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i + 1}`}
                    className="group flex items-center gap-3 rounded-md px-2 py-1.5
                               text-gray-700 hover:text-indigo-600
                               hover:bg-indigo-50 transition"
                  >
                    <span className="text-gray-400 group-hover:text-indigo-600 text-md">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ================= ARTICLE ================= */}
    
      </div>
    </main>
  );
};

export default TermsAndConditions;
