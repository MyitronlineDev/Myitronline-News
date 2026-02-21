import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="bg-slate-50 text-gray-900">
      {/* ================= HEADER ================= */}
      <div className="bg-linear-to-r from-indigo-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-5 py-8">
          <h1 className="text-4xl font-semibold text-white mb-1">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-md max-w-2xl">
            Your privacy matters to us.
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* ================= ARTICLE ================= */}
        <article className="md:col-span-3 md:order-1 order-2">
          {/* INTRO */}
          <p className="text-base leading-relaxed text-gray-800 mb-2 max-w-3xl">
            <span className="font-semibold">
              Myitronline Global Services Private Limited
            </span>{" "}
            operates Myitronline News as a financial news and information
            platform powered by MyITRonline. This Privacy Policy explains how we
            collect, use, protect, and manage your personal information. By
            accessing or using this website, you agree to the terms outlined in
            this policy.
          </p>

          <div className="space-y-8">
            {/* 01 */}
            <section id="privacy-1" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">
                  01
                </span>
                <h2 className="text-3xl font-semibold">
                  Information We Collect
                </h2>
              </div>

              <h4 className="pl-6 font-semibold mt-1">
                A. Personal Information
              </h4>
              <ul className="list-disc pl-10 text-md text-gray-800 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Information submitted through contact forms</li>
              </ul>

              <h4 className="pl-6 font-semibold mt-2">
                B. Non-Personal Information
              </h4>
              <ul className="list-disc pl-10 text-md text-gray-800 space-y-1">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time spent on the website</li>
              </ul>

              <h4 className="pl-6 font-semibold mt-2">C. Subscription Data</h4>
              <p className="pl-6 text-md text-gray-800 leading-relaxed">
                If you subscribe to newsletters or updates, we may store your
                email preferences.
              </p>
            </section>

            {/* 02 */}
            <section id="privacy-2" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">
                  02
                </span>
                <h2 className="text-3xl font-semibold">
                  How We Use Your Information
                </h2>
              </div>

              <p className="pl-6 mt-1 text-md text-gray-800 leading-relaxed">
                Your information may be used for:
              </p>

              <ul className="list-disc pl-10 text-md text-gray-800 space-y-1">
                <li>Responding to queries</li>
                <li>Sending newsletters or updates</li>
                <li>Improving website functionality</li>
                <li>Analyzing website traffic</li>
                <li>Ensuring security and fraud prevention</li>
              </ul>

              <p className="pl-6 mt-1 text-md text-gray-800 leading-relaxed">
                We do not sell, rent, or trade your personal information to
                third parties.
              </p>
            </section>

            {/* 03 */}
            <section id="privacy-3" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">
                  03
                </span>
                <h2 className="text-3xl font-semibold">Cookies Policy</h2>
              </div>
              <p className="text-md mb-1 pl-6">We may use cookies to:</p>
              <ul className="list-disc pl-10 text-md text-gray-800 space-y-1">
                <li>Enhance user experience</li>
                <li>Store preferences</li>
                <li>Analyze site traffic</li>
                <li>Improve performance</li>
              </ul>

              <p className="pl-6 mt-1 text-md text-gray-800 leading-relaxed">
                Users may disable cookies through browser settings if desired.
              </p>
            </section>

            {/* 04 */}
            <section id="privacy-4" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">
                  04
                </span>
                <h2 className="text-3xl font-semibold">
                  Data Protection & Security
                </h2>
              </div>
              <p className="text-md mb-1 pl-6">
                We implement reasonable administrative and technical safeguards including:
              </p>

              <ul className="list-disc pl-10 text-md text-gray-800 space-y-1">
                <li>Secure HTTPS encryption</li>
                <li>Controlled access to data</li>
                <li>Regular security monitoring</li>
              </ul>

              <p className="pl-6 mt-1 text-md text-gray-800 leading-relaxed">
                While we strive to protect user information, no online platform
                can guarantee absolute security.
              </p>
            </section>

            {/* 05 */}
            <section id="privacy-5" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">
                  05
                </span>
                <h2 className="text-3xl font-semibold">Third-Party Links</h2>
              </div>

              <p className="pl-6 text-md text-gray-800 leading-relaxed">
                Our website may contain links to external websites. We are not
                responsible for the privacy practices or content of third-party
                platforms.
              </p>
            </section>

            {/* 06 */}
            <section id="privacy-6" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">
                  06
                </span>
                <h2 className="text-3xl font-semibold">User Rights</h2>
              </div>
              <p className="text-md mb-1 pl-6">
                Users may:
              </p>

              <ul className="list-disc pl-10 text-md text-gray-800 space-y-1">
                <li>Request access to personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of submitted information</li>
              </ul>

              <p className="pl-6 mt-1 text-md text-gray-800 leading-relaxed">
                Requests can be made via email at{" "}
                <a
                  href="mailto:info@myitronline.com"
                  className="text-indigo-600 hover:underline"
                >
                  info@myitronline.com
                </a>
              </p>
            </section>

            {/* 07 */}
            <section id="privacy-7" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">
                  07
                </span>
                <h2 className="text-3xl font-semibold">
                  Updates to Privacy Policy
                </h2>
              </div>

              <p className="pl-6 text-md text-gray-800 leading-relaxed">
                We reserve the right to update this policy as necessary. Changes
                will be reflected on this page.
              </p>
            </section>
          </div>
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="md:col-span-1 md:order-2 order-1">
          <div className="sticky top-20 border-l-2 border-indigo-400 pl-4">
            <h3 className="text-md font-semibold text-gray-500 uppercase mb-1">
              Contents
            </h3>

            <ul className="space-y-1 text-md">
              {[
                "Information We Collect",
                "How We Use Your Information",
                "Cookies Policy",
                "Data Protection & Security",
                "Third-Party Links",
                "User Rights",
                "Updates to Privacy Policy",
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
      </div>
    </main>
  );
};

export default PrivacyPolicy;
