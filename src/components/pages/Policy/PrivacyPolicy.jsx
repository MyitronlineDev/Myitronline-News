import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="bg-slate-50 text-gray-900">

      {/* ================= HEADER ================= */}
      <div className="bg-linear-to-r from-indigo-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-5 py-10">
          <h1 className="text-4xl font-semibold text-white mb-1">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl">
            How we collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* ================= SIDEBAR ================= */}
        <aside className="md:col-span-1">
          <div className="sticky top-20 border-l-2 border-indigo-400 pl-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
              Contents
            </h3>

            <ul className="space-y-1 text-sm">
              {[
                "Introduction",
                "Information We Collect",
                "How We Use Information",
                "Cookies & Tracking",
                "Data Protection",
                "Third-Party Services",
                "User Rights",
                "Data Retention",
                "Policy Updates",
                "Contact Information",
              ].map((title, i) => (
                <li key={i}>
                  <a
                    href={`#privacy-${i + 1}`}
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
        <article className="md:col-span-3">

          {/* INTRO */}
          <p className="text-base leading-relaxed text-gray-800 mb-6 max-w-3xl">
            This Privacy Policy explains how{" "}
            <span className="font-semibold">Myitronline</span> collects, uses,
            stores, and protects your personal information when you access or
            use our website and services.
          </p>

          <div className="space-y-6">

            {/* ================= 01 ================= */}
            <section id="privacy-1" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">01</span>
                <h2 className="text-3xl font-semibold">Introduction</h2>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed pl-6 max-w-3xl">
                We are committed to safeguarding your privacy and ensuring that
                your personal data is handled responsibly and transparently.
              </p>
            </section>

            {/* ================= 02 ================= */}
            <section id="privacy-2" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">02</span>
                <h2 className="text-3xl font-semibold">
                  Information We Collect
                </h2>
              </div>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>Name, email address, phone number (if provided).</li>
                <li>Information submitted through contact forms.</li>
                <li>Technical data such as IP address, browser, and device type.</li>
              </ul>
            </section>

            {/* ================= 03 ================= */}
            <section id="privacy-3" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">03</span>
                <h2 className="text-3xl font-semibold">
                  How We Use Information
                </h2>
              </div>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>To provide and improve our services.</li>
                <li>To respond to queries and feedback.</li>
                <li>To send important updates or notices.</li>
                <li>To ensure website security and performance.</li>
              </ul>
            </section>

            {/* ================= 04 ================= */}
            <section id="privacy-4" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">04</span>
                <h2 className="text-3xl font-semibold">
                  Cookies & Tracking
                </h2>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed pl-6 max-w-3xl">
                We may use cookies and similar technologies to enhance user
                experience, analyze traffic, and improve website functionality.
              </p>
            </section>

            {/* ================= 05 ================= */}
            <section id="privacy-5" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">05</span>
                <h2 className="text-3xl font-semibold">
                  Data Protection
                </h2>
              </div>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>Reasonable security measures are implemented.</li>
                <li>Access to personal data is restricted.</li>
                <li>Complete security cannot be guaranteed.</li>
              </ul>
            </section>

            {/* ================= 06 ================= */}
            <section id="privacy-6" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">06</span>
                <h2 className="text-3xl font-semibold">
                  Third-Party Services
                </h2>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed pl-6 max-w-3xl">
                We may use third-party tools or services. We are not responsible
                for their privacy practices or content.
              </p>
            </section>

            {/* ================= 07 ================= */}
            <section id="privacy-7" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">07</span>
                <h2 className="text-3xl font-semibold">
                  User Rights
                </h2>
              </div>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>You may request access to your personal data.</li>
                <li>You may request correction or deletion.</li>
                <li>You may opt out of non-essential communications.</li>
              </ul>
            </section>

            {/* ================= 08 ================= */}
            <section id="privacy-8" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">08</span>
                <h2 className="text-3xl font-semibold">
                  Data Retention
                </h2>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed pl-6 max-w-3xl">
                Personal data is retained only as long as necessary for legal
                or operational purposes.
              </p>
            </section>

            {/* ================= 09 ================= */}
            <section id="privacy-9" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">09</span>
                <h2 className="text-3xl font-semibold">
                  Policy Updates
                </h2>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed pl-6 max-w-3xl">
                This Privacy Policy may be updated periodically. Continued use
                of the website implies acceptance of the revised policy.
              </p>
            </section>

            {/* ================= 10 ================= */}
            <section id="privacy-10" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">10</span>
                <h2 className="text-3xl font-semibold">
                  Contact Information
                </h2>
              </div>

              <p className="text-gray-800 text-sm leading-relaxed pl-6 max-w-3xl mb-2">
                For any questions or concerns regarding this Privacy Policy,
                please contact us using the details below:
              </p>

              <ul className="pl-10 text-sm text-gray-800 space-y-1">
                <li>
                  <span className="font-medium">Address:</span> 305, 3rd Floor,
                  Plot No. 51, Hasanpur, I.P. Extension, Patparganj, Delhi – 110092
                </li>
                <li>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:info@myitronline.com"
                    className="text-indigo-600 hover:underline"
                  >
                    info@myitronline.com
                  </a>
                </li>
                <li>
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href="tel:+919971055886"
                    className="text-indigo-600 hover:underline"
                  >
                    (+91) 9971055886
                  </a>
                </li>
              </ul>
            </section>

          </div>
        </article>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
