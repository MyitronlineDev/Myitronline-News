import React from "react";

const SecurityPolicy = () => {
  return (
    <main className="bg-slate-50 text-gray-900">
      {/* ================= HEADER ================= */}
      <div className="bg-linear-to-r from-indigo-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-5 py-8">
          <h1 className="text-4xl font-semibold text-white mb-1">
            Security Policy
          </h1>
          <p className="text-gray-300 text-md max-w-2xl">
            Our Commitment to Safeguarding User Data and Digital Infrastructure
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-2">

        {/* ================= ARTICLE ================= */}
        <article className="md:col-span-3 md:order-1 order-2">

          {/* INTRO */}
          <p className="text-base leading-relaxed text-gray-800 mb-6 max-w-3xl">
            At <span className="font-semibold">
              Myitronline Global Services Private Limited
            </span>, we understand the importance of data protection and digital security.
            We maintain robust systems to safeguard our infrastructure and user information.
          </p>

          <div className="space-y-8">

            {/* 01 Scope */}
            <section id="section-1" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">01</span>
                <h2 className="text-2xl font-semibold">Scope of Security</h2>
              </div>

              <p className="text-md mb-1 pl-6">
                This policy applies to:
              </p>

              <ul className="list-disc pl-10 text-md space-y-1">
                <li>Website users</li>
                <li>Subscribers</li>
                <li>Employees</li>
                <li>Contractors</li>
                <li>Third-party service providers</li>
              </ul>

              <p className="text-md mt-2 pl-6">
                We focus on protecting:
              </p>

              <ul className="list-disc pl-10 text-md space-y-1 mt-1">
                <li>Website servers and infrastructure</li>
                <li>User-submitted information</li>
                <li>Internal digital systems</li>
              </ul>
            </section>

            {/* 02 Data Protection */}
            <section id="section-2" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">02</span>
                <h2 className="text-2xl font-semibold">
                  Data Protection Measures
                </h2>
              </div>

              <p className="text-md mb-1 pl-6">
                We adopt reasonable and industry-accepted security measures, including:
              </p>

              <ul className="list-disc pl-10 text-md space-y-1">
                <li>Secure HTTPS encryption</li>
                <li>Firewall and server-level protection</li>
                <li>Regular vulnerability assessments</li>
                <li>Access control mechanisms</li>
                <li>Secure hosting infrastructure</li>
              </ul>

              <p className="text-md mt-2 pl-6">
                Sensitive data access is restricted to authorized personnel only.
              </p>
            </section>

            {/* 03 User Security */}
            <section id="section-3" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">03</span>
                <h2 className="text-2xl font-semibold">
                  User Account Security
                </h2>
              </div>

              <p className="text-md pl-6 mb-1">
                Users are responsible for maintaining the confidentiality of their credentials.
              </p><p className="text-md mb-1 pl-6">
                We recommend:
              </p>

              <ul className="list-disc pl-10 text-md space-y-1">
                <li>Using strong passwords</li>
                <li>Enabling two-factor authentication where available</li>
                <li>Avoiding password sharing</li>
                <li>Logging out from shared devices</li>
              </ul>
            </section>

            {/* 04 Prohibited */}
            <section id="section-4" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">04</span>
                <h2 className="text-2xl font-semibold">
                  Prohibited Activities
                </h2>
              </div>
                <p className="text-md mb-1 pl-6">
                Users must not:
              </p>

              <ul className="list-disc pl-10 text-md space-y-1">
                <li>Attempt unauthorized access</li>
                <li>Exploit system vulnerabilities</li>
                <li>Upload harmful scripts</li>
                <li>Conduct automated scraping</li>
                <li>Engage in malicious activities</li>
              </ul>

              <p className="text-md mt-2 pl-6">
                Violations may result in restricted access or legal action.
              </p>
            </section>

            {/* 05 Monitoring */}
            <section id="section-5" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">05</span>
                <h2 className="text-2xl font-semibold">
                  Monitoring and Logging
                </h2>
              </div>

              <p className="text-md pl-6 mb-1">
                We maintain monitoring systems to:
              </p>

              <ul className="list-disc pl-10 text-md space-y-1">
                <li>Detect suspicious activity</li>
                <li>Prevent cyber threats</li>
                <li>Maintain audit trails</li>
              </ul>

              <p className="text-md mt-2 pl-6">
                Logs may be reviewed for security and compliance purposes.
              </p>
            </section>

            {/* 06 Incident Response */}
            <section id="section-6" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-indigo-600 font-semibold text-md">06</span>
                <h2 className="text-2xl font-semibold">
                  Incident Response
                </h2>
              </div>

              <p className="text-md pl-6 mb-1">
                In case of a security breach:
              </p>

              <ul className="list-disc pl-10 text-md space-y-1">
                <li>Affected systems will be isolated</li>
                <li>Immediate corrective measures will be implemented</li>
                <li>Impacted users may be notified where required</li>
                <li>Security protocols will be strengthened</li>
              </ul>
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
                    className="flex items-center gap-3 px-2 py-1.5 rounded-md
                    text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition"
                  >
                    <span className="text-gray-400">
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
