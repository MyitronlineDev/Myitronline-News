import React from "react";

const Budget2026 = () => {
  const highlights = [
    { title: "Total Budget", value: "₹48.2 Lakh Cr", note: "FY 2026-27" },
    { title: "Fiscal Deficit", value: "5.1%", note: "Targeted" },
    { title: "Capital Expenditure", value: "₹11.8 Lakh Cr", note: "+9% YoY" },
    { title: "Tax Relief", value: "Middle Class", note: "Income tax updates" },
  ];

  const sectors = [
    { name: "Infrastructure", amount: "₹3.2 Lakh Cr", change: "+12%" },
    { name: "Education", amount: "₹1.4 Lakh Cr", change: "+8%" },
    { name: "Healthcare", amount: "₹98,000 Cr", change: "+10%" },
    { name: "Defence", amount: "₹6.1 Lakh Cr", change: "+7%" },
    { name: "Railways", amount: "₹2.5 Lakh Cr", change: "+11%" },
    { name: "Agriculture", amount: "₹1.2 Lakh Cr", change: "+6%" },
  ];

  const budgetNews = [
    {
      title: "Income tax slabs revised for FY 2026 — what changes for salaried people?",
      time: "2h ago",
      tag: "Tax",
    },
    {
      title: "Big push for infrastructure: Govt increases capex allocation by 9%",
      time: "5h ago",
      tag: "Policy",
    },
    {
      title: "Healthcare gets a boost with new AI hospitals and district health programs",
      time: "1d ago",
      tag: "Healthcare",
    },
    {
      title: "Railway modernization plan announced: new trains and station upgrades",
      time: "1d ago",
      tag: "Infra",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-indigo-600">Special Coverage</p>
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Union Budget 2026
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Highlights, allocations, major announcements and impact on citizens.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
                Download PDF
              </button>
              <button className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                Watch Live Updates
              </button>
              <button className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* LEFT MAIN */}
          <div className="space-y-6 lg:col-span-2">
            {/* HIGHLIGHTS */}
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Budget Highlights</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-700">{item.title}</p>
                    <p className="mt-2 text-2xl font-extrabold text-slate-900">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* REVENUE / EXPENDITURE */}
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-bold text-slate-900">
                Revenue vs Expenditure
              </h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-700">Total Revenue</p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-900">₹34.6 Lakh Cr</p>
                  <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 w-[72%] rounded-full bg-emerald-500" />
                  </div>
                  <p className="mt-2 text-xs text-slate-600">72% of projected target</p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-700">
                    Total Expenditure
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-900">₹48.2 Lakh Cr</p>
                  <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 w-[88%] rounded-full bg-indigo-600" />
                  </div>
                  <p className="mt-2 text-xs text-slate-600">88% planned spending</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-indigo-50 p-4 text-sm text-indigo-900">
                <span className="font-bold">Note:</span> These values can be replaced with
                real API data anytime.
              </div>
            </div>

            {/* SECTOR ALLOCATION */}
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-slate-900">Key Sector Allocation</h2>
                <select className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm">
                  <option>FY 2026</option>
                  <option>FY 2025</option>
                  <option>FY 2024</option>
                </select>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {sectors.map((s, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-bold text-slate-900">{s.name}</p>
                        <p className="mt-2 text-xl font-extrabold text-slate-900">
                          {s.amount}
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {s.change}
                      </span>
                    </div>

                    <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                      <div className="h-2 w-[65%] rounded-full bg-slate-900" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            {/* QUICK SUMMARY */}
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-base font-bold text-slate-900">Quick Summary</h3>

              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p className="flex items-center justify-between">
                  <span>Budget Year</span> <span className="font-semibold">2026-27</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Presented By</span> <span className="font-semibold">Finance Minister</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Focus</span> <span className="font-semibold">Growth + Jobs</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Markets Reaction</span>{" "}
                  <span className="font-semibold text-emerald-600">Positive</span>
                </p>
              </div>

              <button className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">
                See Full Analysis
              </button>
            </div>

            {/* LATEST BUDGET NEWS */}
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">Latest Budget News</h3>
                <button className="text-sm font-semibold text-indigo-600 hover:underline">
                  View all
                </button>
              </div>

              <div className="mt-4 space-y-4">
                {budgetNews.map((news, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        {news.tag}
                      </span>
                      <span className="text-xs text-slate-500">{news.time}</span>
                    </div>

                    <p className="mt-2 text-sm font-semibold text-slate-900 leading-snug">
                      {news.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm text-slate-700">
            <span className="font-bold text-slate-900">Tip:</span> You can connect this UI with
            your backend API and replace all dummy values (total budget, sectors, news list etc.).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Budget2026;
