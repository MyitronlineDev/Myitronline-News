import React from "react";

const LegalDisclaimer = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-16 px-4 shadow-2xl">
      <div className="max-w-5xl mx-auto">
        {/* ================= HEADING ================= */}
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-10">
          Legal Disclaimer
        </h1>

        {/* ================= CARD ================= */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-gray-700 leading-relaxed text-sm md:text-base space-y-6">
          <p>
            <span className="font-semibold">
              Myitronline Global Services Private Limited
            </span>{" "}
            operates as a digital information and news platform. The content
            published on this website is provided strictly for general
            informational purposes.
          </p>

          <p>
            The information available on this website should not be interpreted
            as financial, legal, or professional advice. Users are encouraged to
            consult qualified professionals before making decisions.
          </p>

          <p>
            While we strive to ensure that all information presented is accurate
            and up to date, we make no warranties or representations regarding
            the completeness, reliability, or accuracy of any content.
          </p>

          <p>
            The company shall not be liable for any direct, indirect,
            incidental, consequential, or special damages arising from the use
            of, or inability to use, this website or reliance upon any
            information provided herein.
          </p>

          <p>
            By accessing and using this website, you agree that you are doing so
            at your own risk and that you accept full responsibility for your
            actions based on the content available on this platform.
          </p>

          {/* ================= CONTACT SECTION ================= */}
          <div className="border-t pt-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Contact Information
            </h3>

            <p className="mb-3">
              If you have any questions regarding this Legal Disclaimer, please
              contact us:
            </p>

            <div className="space-y-2">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@myitronline.com"
                  className="text-indigo-400 hover:underline "
                >
                  info@myitronline.com
                </a>
              </p>

              {/* Clickable Phone */}
              <p>
                Phone:{" "}
                <a
                  href="tel:+919999999999"
                  className="text-indigo-400 hover:underline "
                >
                  +919971055886
                </a>
              </p>

              <p>Address : <span className="text-indigo-400">305 3RD FLOOR PLOT NO 51, Hasanpur, I.P. Extension, Patparganj, Delhi, 110092</span></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LegalDisclaimer;
