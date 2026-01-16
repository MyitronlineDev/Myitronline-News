import React from "react";

/* ================= DATA ================= */
const sections = [
  {
    id: "scope",
    title: "Scope of Service",
    paragraphs: [
      "We operate as a digital news and information platform providing editorial content, analysis, opinion pieces, and related services to readers. Our aim is to deliver timely, accurate, and relevant information across multiple domains."
    ],
    points: [
      "Services may be modified, expanded, or discontinued at any time.",
      "Content availability depends on editorial priorities and operational requirements.",
      "Access to certain features may be restricted without prior notice."
    ],
  },
  {
    id: "content",
    title: "Use of Content",
    paragraphs: [
      "All content published on this website is intended strictly for personal and non-commercial use. Any use beyond this scope requires prior written permission from the company."
    ],
    points: [
      "Reproduction, redistribution, or republication without permission is prohibited.",
      "Content must not be altered or misrepresented.",
      "Proper attribution is required where content sharing is explicitly permitted."
    ],
  },
  {
    id: "copyright",
    title: "Copyright and Ownership",
    paragraphs: [
      "Unless otherwise stated, all intellectual property rights in the content published on this platform are owned by the company or its content partners."
    ],
    points: [
      "This includes articles, images, videos, graphics, logos, and design assets.",
      "Use of copyrighted material without authorisation may result in legal action."
    ],
  },
  {
    id: "user",
    title: "User Responsibilities",
    paragraphs: [
      "Users are expected to access and use the platform responsibly, ethically, and in compliance with applicable laws and regulations."
    ],
    points: [
      "Do not attempt to disrupt website security or functionality.",
      "Do not publish misleading, abusive, defamatory, or unlawful content.",
      "Do not engage in activities that may harm the platform or other users.",
      "Violation may result in suspension or termination of access."
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy of Information",
    paragraphs: [
      "We strive to ensure accuracy and credibility in our reporting. However, information published on the website may evolve over time as new facts, developments, or official clarifications emerge."
    ],
    points: [
      "We do not guarantee absolute accuracy or completeness.",
      "Opinions expressed in articles belong to respective authors.",
      "Readers are encouraged to independently verify critical information."
    ],
  },
  {
    id: "links",
    title: "Third-Party Links",
    paragraphs: [
      "This website may contain links to third-party websites for reference, convenience, or additional context."
    ],
    points: [
      "We do not control or endorse third-party websites or their content.",
      "We are not responsible for the accuracy or reliability of external information.",
      "Accessing third-party links is done at the user’s discretion."
    ],
  },
  {
    id: "privacy",
    title: "Privacy and Data Protection",
    paragraphs: [
      "Protecting user privacy is important to us. We collect, store, and process personal information in a transparent and responsible manner."
    ],
    points: [
      "Personal data is handled in accordance with our Privacy Policy.",
      "Reasonable security measures are implemented to protect user information.",
      "Despite safeguards, absolute security cannot be guaranteed."
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    paragraphs: [
      "Use of this website is at your own risk. The company shall not be held responsible for losses or damages arising from reliance on the content published on the platform."
    ],
    points: [
      "No liability for indirect, incidental, or consequential damages.",
      "We are not responsible for technical issues or service interruptions.",
      "Liability is limited to the extent permitted under applicable law."
    ],
  },
  {
    id: "law",
    title: "Governing Law",
    paragraphs: [
      "These Terms and Conditions are governed by and interpreted in accordance with the laws of India."
    ],
    points: [
      "All disputes shall fall under the exclusive jurisdiction of Indian courts.",
      "Users agree to submit to the jurisdiction of such courts."
    ],
  },
];

/* ================= COMPONENT ================= */
const TermsAndConditions = () => {
  return (
    <main className="bg-slate-50 text-gray-900">

      {/* HEADER */}
      <div className="bg-linear-to-r from-indigo-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-5 py-10">
          <h1 className="text-4xl font-semibold text-white mb-1">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl">
            Rules, responsibilities, and policies governing the use of our platform.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* SIDEBAR */}
        <aside className="md:col-span-1">
          <div className="sticky top-20 border-l-2 border-indigo-400 pl-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
              Contents
            </h3>

            <ul className="space-y-1 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="
                      group flex items-center gap-3 rounded-md px-2 py-1.5
                      text-gray-700 hover:text-indigo-600
                      hover:bg-indigo-50 transition
                    "
                  >
                    <span className="text-gray-400 group-hover:text-indigo-600 text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ARTICLE */}
        <article className="md:col-span-3">

          {/* INTRO */}
          <p className="text-base leading-relaxed text-gray-800 mb-3 max-w-3xl">
            Welcome to <span className="font-semibold">Your Company Name</span>.
            By accessing or using this website, you confirm that you have read,
            understood, and agreed to these Terms and Conditions.
          </p>

          {/* SECTIONS */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-indigo-600 font-semibold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-semibold">
                    {section.title}
                  </h2>
                </div>

                {/* Paragraphs */}
                {section.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-800 leading-relaxed text-sm mb-2 pl-6 max-w-3xl"
                  >
                    {para}
                  </p>
                ))}

                {/* Points */}
                {section.points.length > 0 && (
                  <ul className="list-disc pl-10 text-sm text-gray-800 space-y-1">
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

         
        </article>
      </div>
    </main>
  );
};

export default TermsAndConditions;
