import React from "react";

const SecurityPolicy = () => {
  return (
    <main className="bg-slate-50 text-gray-900">
      {/* ================= HEADER ================= */}
      <div className="bg-linear-to-r from-indigo-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-5 py-10">
          <h1 className="text-4xl font-semibold text-white mb-1">
            Security Policy
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl">
            Our commitment to safeguarding user data and digital infrastructure.
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* ================= ARTICLE ================= */}
        <article className="md:col-span-3 md:order-1 order-2">

          {/* INTRO */}
          <p className="text-base leading-relaxed text-gray-800 mb-4 max-w-3xl">
            At <span className="font-semibold">Myitronline Global Services Private Limited</span>, 
            we are committed to protecting our systems, users, and digital assets 
            against unauthorized access, misuse, and cyber threats.
          </p>

          <div className="space-y-6">

            {/* 01 */}
            <section id="section-1" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">01</span>
                <h2 className="text-3xl font-semibold">Scope of Security</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                This policy applies to all users, employees, contractors, and third-party partners.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>Protection of website infrastructure and servers.</li>
                <li>Safeguarding user account information.</li>
                <li>Prevention of unauthorized access.</li>
              </ul>
            </section>

            {/* 02 */}
            <section id="section-2" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">02</span>
                <h2 className="text-3xl font-semibold">Data Protection Measures</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                We implement industry-standard safeguards to secure sensitive information.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>HTTPS encrypted communication.</li>
                <li>Regular security audits and vulnerability testing.</li>
                <li>Restricted internal data access.</li>
              </ul>
            </section>

            {/* 03 */}
            <section id="section-3" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">03</span>
                <h2 className="text-3xl font-semibold">User Account Security</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                Users are responsible for protecting their login credentials.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>Use strong and unique passwords.</li>
                <li>Do not share login details.</li>
                <li>Report suspicious activity immediately.</li>
              </ul>
            </section>

            {/* 04 */}
            <section id="section-4" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">04</span>
                <h2 className="text-3xl font-semibold">Prohibited Activities</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                The following actions are strictly prohibited:
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>Attempting to exploit system vulnerabilities.</li>
                <li>Uploading malware or malicious code.</li>
                <li>Unauthorized data scraping.</li>
              </ul>
            </section>

            {/* 05 */}
            <section id="section-5" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">05</span>
                <h2 className="text-3xl font-semibold">Monitoring and Logging</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                We monitor system activity to detect and prevent potential threats.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>Automated threat detection tools.</li>
                <li>Maintenance of audit logs.</li>
                <li>Immediate action against suspicious behavior.</li>
              </ul>
            </section>

            {/* 06 */}
            <section id="section-6" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-indigo-600 font-semibold text-sm">06</span>
                <h2 className="text-3xl font-semibold">Incident Response</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl">
                In case of a security breach, we take immediate corrective action.
              </p>
              <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                <li>Isolate affected systems.</li>
                <li>Notify impacted users if required.</li>
                <li>Strengthen security measures.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="md:col-span-1 md:order-2 order-1">
          <div className="sticky top-20 border-l-2 border-indigo-400 pl-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
              Contents
            </h3>

            <ul className="space-y-1 text-sm">
              {[
                "Scope of Security",
                "Data Protection Measures",
                "User Account Security",
                "Prohibited Activities",
                "Monitoring and Logging",
                "Incident Response",
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

      </div>
    </main>
  );
};

export default SecurityPolicy;
