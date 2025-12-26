import React from "react";

const Articles = () => {
  return (
    <div className="container mx-auto px-4 py-6 space-y-10">

      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-800">
        Latest Tax News & Updates
      </h1>

      {/* Section 1: Income Tax News */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          Income Tax Updates
        </h2>

        <div className="space-y-3">
          <article className="border-b pb-3">
            <h3 className="font-semibold">
              New ITR filing deadline announced for AY 2025-26
            </h3>
            <p className="text-sm text-gray-600">
              The Income Tax Department has extended the due date for filing
              income tax returns for individual taxpayers.
            </p>
          </article>

          <article>
            <h3 className="font-semibold">
              Changes in Section 80C deductions explained
            </h3>
            <p className="text-sm text-gray-600">
              Here’s what taxpayers need to know about the latest updates under
              Section 80C.
            </p>
          </article>
        </div>
      </section>

      {/* Section 2: GST News */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          GST News
        </h2>

        <div className="space-y-3">
          <article className="border-b pb-3">
            <h3 className="font-semibold">
              GST rate changes on essential goods
            </h3>
            <p className="text-sm text-gray-600">
              The GST council has revised tax rates on selected essential items.
            </p>
          </article>

          <article>
            <h3 className="font-semibold">
              New GST return filing system coming soon
            </h3>
            <p className="text-sm text-gray-600">
              A simplified GST return filing mechanism is expected to reduce
              compliance burden.
            </p>
          </article>
        </div>
      </section>

      {/* Section 3: Budget & Policy Updates */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Budget & Policy Updates
        </h2>

        <div className="space-y-3">
          <article className="border-b pb-3">
            <h3 className="font-semibold">
              Union Budget 2025 highlights for taxpayers
            </h3>
            <p className="text-sm text-gray-600">
              Key announcements from the budget that directly impact salaried
              and business taxpayers.
            </p>
          </article>

          <article>
            <h3 className="font-semibold">
              New tax regime vs old tax regime comparison
            </h3>
            <p className="text-sm text-gray-600">
              Which tax regime should you choose in the current financial year?
            </p>
          </article>
        </div>
      </section>

      {/* Section 4: Expert Tips */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          Tax Saving Tips
        </h2>

        <div className="space-y-3">
          <article className="border-b pb-3">
            <h3 className="font-semibold">
              Top tax-saving investments before March 31
            </h3>
            <p className="text-sm text-gray-600">
              Smart investment options to reduce your tax liability legally.
            </p>
          </article>

          <article>
            <h3 className="font-semibold">
              Common mistakes to avoid while filing ITR
            </h3>
            <p className="text-sm text-gray-600">
              Avoid these common errors that may lead to notices from the tax
              department.
            </p>
          </article>
        </div>
      </section>

    </div>
  );
};

export default Articles;
