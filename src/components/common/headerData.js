const CURRENT_YEAR = new Date().getFullYear();

console.log(CURRENT_YEAR);
export const NAV_ITEMS = [
  {
    label: "Income Tax",
    content: [
      { label: "Articles", route: "navbar/income-tax/article" },
      { label: "News", route: "navbar/income-tax/news" },
      { label: "Circular", route: "navbar/income-tax/circular" },
    ],
  },
  {
    label: "Budget",
    content: [
      {
        label: `Budget ${CURRENT_YEAR - 0}`,
        route: `/navbar/budget/${CURRENT_YEAR - 0}`,
      },
      {
        label: `Budget ${CURRENT_YEAR - 1}`,
        route: `/navbar/budget/${CURRENT_YEAR - 1}`,
      },
    ],
  },

  {
    label: "GST",
    content: [
      { label: "Articles", route: "navbar/gst/article" },
      { label: "News", route: "navbar/gst/news" },
      { label: "Circular", route: "navbar/gst/circular" },
    ],
  },
  {
    label: "RBI",
    content: [
      { label: "Articles", route: "navbar/rbi/article" },
      { label: "News", route: "navbar/rbi/news" },
      { label: "Circular", route: "navbar/rbi/circular" },
    ],
  },
  {
    label: "Finance",
    content: [
      { label: "Articles", route: "navbar/finance/article" },
      { label: "News", route: "navbar/finance/news" },
      { label: "Notifications", route: "navbar/finance/notifications" },
    ],
  },
  {
    label: "Corporate Law",
    content: [
      { label: "Articles", route: "navbar/corporate-law/article" },
      { label: "News", route: "navbar/corporate-law/news" },
      { label: "Notifications", route: "navbar/corporate-law/notifications" },
    ],
  },
  {
    label: "Global News",
    content: [
      { label: "Articles", route: "navbar/global/article" },
      { label: "News", route: "navbar/global/news" },
    ],
  },
];
