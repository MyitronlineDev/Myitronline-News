import React, { useMemo, useState } from "react";

const CorporateLawNotifications = () => {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "MCA", "SEBI", "RBI", "IBC", "GST", "Labour Law"];

  const notifications = [
    {
      id: 1,
      title: "MCA notifies amendments in Companies (Incorporation) Rules, 2026",
      dept: "MCA",
      type: "Notification",
      priority: "High",
      date: "Jan 18, 2026",
      refNo: "G.S.R. 102(E)",
      summary:
        "New compliance changes introduced for incorporation forms and additional disclosures for directors.",
      file: true,
    },
    {
      id: 2,
      title: "SEBI circular on enhanced disclosure norms for listed entities",
      dept: "SEBI",
      type: "Circular",
      priority: "Medium",
      date: "Jan 16, 2026",
      refNo: "SEBI/HO/CFD/2026/45",
      summary:
        "Introduces quarterly disclosure template updates for related party transactions and corporate governance.",
      file: true,
    },
    {
      id: 3,
      title: "RBI advisory for NBFCs on risk-based internal audit framework",
      dept: "RBI",
      type: "Advisory",
      priority: "Medium",
      date: "Jan 14, 2026",
      refNo: "RBI/2026-27/21",
      summary:
        "Strengthens audit controls, board review frequency and reporting structure for high-risk portfolios.",
      file: false,
    },
    {
      id: 4,
      title: "IBC: Update on insolvency resolution timelines for SMEs",
      dept: "IBC",
      type: "Update",
      priority: "Low",
      date: "Jan 11, 2026",
      refNo: "IBBI/2026/SME-02",
      summary:
        "Clarifies procedural relaxations for SME resolution professionals and submission deadlines.",
      file: false,
    },
    {
      id: 5,
      title: "MCA releases revised e-Form for CSR reporting (FY 2026)",
      dept: "MCA",
      type: "Update",
      priority: "High",
      date: "Jan 09, 2026",
      refNo: "MCA/CSR/2026-01",
      summary:
        "CSR reporting format updated: includes beneficiary metrics, project geo-tagging and impact reporting.",
      file: true,
    },
  ];

  const filtered = useMemo(() => {
    let data = notifications;

    if (activeFilter !== "All") {
      data = data.filter((n) => n.dept === activeFilter);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.summary.toLowerCase().includes(q) ||
          n.refNo.toLowerCase().includes(q)
      );
    }

    return data;
  }, [query, activeFilter]);

  const priorityBadge = (p) => {
    if (p === "High")
      return "bg-red-50 text-red-700 ring-1 ring-red-200";
    if (p === "Medium")
      return "bg-amber-50 text-amber-700 ring-1 ring-amber-200";
    return "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200";
  };

  const deptBadge = (d) => {
    if (d === "MCA") return "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200";
    if (d === "SEBI") return "bg-fuchsia-50 text-fuchsia-700 ring-1 ring-fuchsia-200";
    if (d === "RBI") return "bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200";
    if (d === "IBC") return "bg-slate-100 text-slate-700 ring-1 ring-slate-200";
    if (d === "GST") return "bg-orange-50 text-orange-700 ring-1 ring-orange-200";
    return "bg-lime-50 text-lime-700 ring-1 ring-lime-200";
  };

  // Sidebar stats
  const stats = useMemo(() => {
    const total = notifications.length;
    const high = notifications.filter((n) => n.priority === "High").length;
    const withDocs = notifications.filter((n) => n.file).length;
    const mca = notifications.filter((n) => n.dept === "MCA").length;

    return { total, high, withDocs, mca };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-indigo-600">Legal Updates</p>
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Corporate Law Notifications
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Latest MCA, SEBI, RBI circulars & compliance notifications.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
                Subscribe Alerts
              </button>
              <button className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                Download Digest
              </button>
            </div>
          </div>

          {/* SEARCH + FILTERS */}
          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-xl">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by notification, ref no, keyword..."
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-600"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500">
                Ctrl + K
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeFilter === f
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* LEFT LIST */}
          <div className="space-y-4 lg:col-span-2">
            {/* TOP BAR */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-600">
                Showing <span className="font-bold text-slate-900">{filtered.length}</span>{" "}
                results
              </p>

              <select className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm">
                <option>Sort: Latest</option>
                <option>Sort: Priority</option>
                <option>Sort: Department</option>
              </select>
            </div>

            {/* LIST */}
            {filtered.map((n) => (
              <div
                key={n.id}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  {/* LEFT */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${deptBadge(n.dept)}`}>
                        {n.dept}
                      </span>

                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityBadge(n.priority)}`}>
                        {n.priority} Priority
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                        {n.type}
                      </span>

                      <span className="text-xs text-slate-500">{n.date}</span>
                    </div>

                    <h3 className="mt-3 text-base font-bold text-slate-900">
                      {n.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                      {n.summary}
                    </p>

                    <p className="mt-3 text-xs text-slate-500">
                      Reference: <span className="font-semibold text-slate-700">{n.refNo}</span>
                    </p>
                  </div>

                  {/* RIGHT ACTIONS */}
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <button className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                      Read
                    </button>
                    {n.file ? (
                      <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">
                        View PDF
                      </button>
                    ) : (
                      <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
                        Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-semibold text-slate-900">No results found</p>
                <p className="mt-1 text-sm text-slate-600">
                  Try changing filters or search keywords.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            {/* STATS */}
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h4 className="text-base font-bold text-slate-900">Dashboard</h4>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <p className="text-xs font-semibold text-slate-600">Total Updates</p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-900">{stats.total}</p>
                </div>
                <div className="rounded-xl bg-red-50 p-4 ring-1 ring-red-200">
                  <p className="text-xs font-semibold text-red-600">High Priority</p>
                  <p className="mt-2 text-2xl font-extrabold text-red-700">{stats.high}</p>
                </div>
                <div className="rounded-xl bg-indigo-50 p-4 ring-1 ring-indigo-200">
                  <p className="text-xs font-semibold text-indigo-600">PDF Attachments</p>
                  <p className="mt-2 text-2xl font-extrabold text-indigo-700">{stats.withDocs}</p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-200">
                  <p className="text-xs font-semibold text-emerald-600">MCA Updates</p>
                  <p className="mt-2 text-2xl font-extrabold text-emerald-700">{stats.mca}</p>
                </div>
              </div>
            </div>

            {/* IMPORTANT ALERT */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-700 p-5 text-white shadow-sm">
              <h4 className="text-base font-bold">Important Compliance Alerts</h4>
              <p className="mt-2 text-sm text-white/80">
                Don’t miss deadlines. Enable notifications for High Priority legal updates.
              </p>

              <button className="mt-4 w-full rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-900 hover:bg-slate-200">
                Enable Alerts
              </button>
            </div>

            {/* QUICK LINKS */}
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h4 className="text-base font-bold text-slate-900">Quick Links</h4>

              <div className="mt-4 space-y-2 text-sm">
                <button className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-left font-semibold text-slate-900 hover:bg-slate-50">
                  📌 Companies Act Updates
                </button>
                <button className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-left font-semibold text-slate-900 hover:bg-slate-50">
                  📌 SEBI Circulars
                </button>
                <button className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-left font-semibold text-slate-900 hover:bg-slate-50">
                  📌 RBI Guidelines
                </button>
                <button className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-left font-semibold text-slate-900 hover:bg-slate-50">
                  📌 IBC Notifications
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CorporateLawNotifications;
