// headerData.js

const CURRENT_YEAR = new Date().getFullYear();

export const NAV_CONTENT = {
  "Income Tax": [
    { label: "Articles", route: "navbar/income-tax/article" },
    { label: "News", route: "navbar/income-tax/news" },
    { label: "Circular", route: "navbar/income-tax/circular" },
  ],

  Budget: [
    { label: `Budget ${CURRENT_YEAR}`, route: `/navbar/budget/${CURRENT_YEAR}` },
    { label: `Budget ${CURRENT_YEAR - 1}`, route: `/navbar/budget/${CURRENT_YEAR - 1}` },
  ],

  GST: [
    { label: "Articles", route: "navbar/gst/article" },
    { label: "News", route: "navbar/gst/news" },
    { label: "Circular", route: "navbar/gst/circular" },
  ],

  RBI: [
    { label: "Articles", route: "navbar/rbi/article" },
    { label: "News", route: "navbar/rbi/news" },
    { label: "Circular", route: "navbar/rbi/circular" },
  ],

  Finance: [
    { label: "Articles", route: "navbar/finance/article" },
    { label: "News", route: "navbar/finance/news" },
    { label: "Notifications", route: "navbar/finance/notifications" },
  ],

  "Corporate Law": [
    { label: "Articles", route: "navbar/corporate-law/article" },
    { label: "News", route: "navbar/corporate-law/news" },
    { label: "Notifications", route: "navbar/corporate-law/notifications" },
  ],

  "Global News": [
    { label: "Articles", route: "navbar/global/article" },
    { label: "News", route: "navbar/global/news" },
  ],
};
