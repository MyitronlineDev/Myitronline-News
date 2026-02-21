import React from "react";

const LegalDisclaimer = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-9 px-4 shadow-2xl">
      <div className="max-w-5xl mx-auto">
        
        {/* ================= HEADING ================= */}
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
          Legal Disclaimer
        </h1>

        {/* ================= CARD ================= */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-gray-700 leading-relaxed text-sm md:text-base space-y-4">
          
          <p>
            <span className="font-semibold">
              Myitronline Global Services Private Limited
            </span>{" "}
            operates Myitronline News as a digital financial news and
            information platform powered by MyITRonline. The content published
            on this website is intended strictly for general informational and
            educational purposes.
          </p>

          <p>
            All articles, news updates, analysis, commentary, and reports
            related to Income Tax, GST, corporate compliance, global finance,
            regulatory changes, and economic developments are prepared to
            simplify complex financial information. However, the content
            should not be considered as financial, legal, tax, accounting,
            or investment advice.
          </p>

          <p>
            Users are strongly advised to verify official notifications,
            circulars, government publications, and regulatory announcements
            before making any decisions based on the information available on
            this website. Professional consultation with qualified tax advisors,
            chartered accountants, legal experts, or compliance professionals
            is recommended wherever required.
          </p>

          <p>
            While we make reasonable efforts to ensure that the information
            provided is accurate, updated, and reliable, Myitronline News does
            not guarantee the completeness, timeliness, or absolute accuracy of
            any content. Regulatory frameworks frequently change, and
            interpretations may vary.
          </p>

          <p>
            Myitronline Global Services Private Limited shall not be liable
            for any direct, indirect, incidental, consequential, financial,
            or reputational damages arising from:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Reliance on any information published on this platform</li>
            <li>Errors or omissions in content</li>
            <li>Delays in updates</li>
            <li>Use or inability to use the website</li>
          </ul>

          <p>
            By accessing and using this website, you acknowledge and agree
            that you are doing so voluntarily and at your own risk, and you
            accept full responsibility for your decisions and actions.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">
            Intellectual Property Rights
          </h3>

          <p>
            All content including text, graphics, logos, layouts, and design
            elements are the intellectual property of Myitronline Global
            Services Private Limited unless otherwise stated. Unauthorized
            reproduction, distribution, or commercial use of content is
            strictly prohibited.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">
            External Links Disclaimer
          </h3>

          <p>
            This website may contain links to third-party websites for
            reference purposes. We do not control or endorse the content,
            policies, or practices of such external websites.
          </p>

          {/* ================= CONTACT SECTION ================= */}
          <div className="border-t pt-3 mt-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Contact Information
            </h3>

            <p className="mb-3">
              For any clarification regarding this Legal Disclaimer, please
              contact:
            </p>

            <div className="space-y-2">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@myitronline.com"
                  className="text-indigo-400 hover:underline"
                >
                  info@myitronline.com
                </a>
              </p>

              <p>
                Phone:{" "}
                <a
                  href="tel:+919971055886"
                  className="text-indigo-400 hover:underline"
                >
                  +91-9971055886 , 8130309886
                </a>
              </p>

              <p>
                Address:{" "}
                <span className="text-indigo-400">
                  305, 3rd Floor, Plot No. 51, Hasanpur, I.P. Extension,
                  Patparganj, Delhi – 110092
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default LegalDisclaimer;
