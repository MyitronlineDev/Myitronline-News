const CURRENT_YEAR = new Date().getFullYear();

console.log(CURRENT_YEAR)
export const NAV_ITEMS = [
  {
    label: "Income Tax",
    content: [
      { label: "Articles", route: "navbar/income-tax/article" },
      { label: "News", route: "navbar/income-tax/news" },
      { label: "Circular", route: "navbar/income-tax/circular" },
      { label: "Notifications", route: "navbar/income-tax/notifications" },
      { label: "Judiciary", route: "navbar/income-tax/judiciary" },
      { label: "ITR", route: "navbar/income-tax/itr" },
    ],
  },
  {
    label: "Budget",
    content: [
      { label: CURRENT_YEAR-0, route: "/navbar/budget/2025" },
      { label: CURRENT_YEAR-0, route: "/navbar/budget/2024" },
      { label: CURRENT_YEAR-0, route: "/navbar/budget/2023" },
      { label: "Budget 2022", route: "/navbar/budget/2022" },
    ],
  },
  {
    label: "Company Law",
    content: [
      { label: "Articles", route: "/navbar/company-law/article" },
      { label: "News", route: "/navbar/company-law/news" },
    ],
  },
  {
    label: "GST",
    content: [
      { label: "Articles", route: "/navbar/gst/article" },
      { label: "News", route: "/navbar/gst/news" },
      { label: "Circular", route: "/navbar/gst/circular" },
      { label: "Notifications", route: "/navbar/gst/notifications" },
      { label: "Notifications CGST", route: "/navbar/gst/notifications-cgst" },
      { label: "Notifications IGST", route: "/navbar/gst/notifications-igst" },
      { label: "Notifications SGST", route: "/navbar/gst/notifications-sgst" },
    ],
  },
  {
    label: "RBI",
    content: [
      { label: "Articles", route: "/navbar/rbi/article" },
      { label: "News", route: "/navbar/rbi/news" },
      { label: "Circular", route: "/navbar/rbi/circular" },
      { label: "Notifications", route: "/navbar/rbi/notifications" },
    ],
  },
  {
    label: "Finance",
    content: [
      { label: "Articles", route: "navbar/finance/article" },
      { label: "News", route: "/navbar/finance/news" },
      { label: "Notifications", route: "/navbar/finance/notifications" },
    ],
  },
  {
    label: "Corporate Law",
    content: [
      { label: "Articles", route: "/navbar/corporate-law/article" },
      { label: "News", route: "/navbar/corporate-law/news" },
      { label: "Notifications", route: "/navbar/corporate-law/notifications" },
    ],
  },
  {
    label: "Global News",
    content: [
      { label: "Articles", route: "/navbar/global/article" },
      { label: "News", route: "/navbar/global/news" },
    ],
  },
  {
    label: "Crypto",
    content: [
      { label: "Articles", route: "/navbar/crypto/article" },
      { label: "News", route: "/navbar/crypto/news" },
    ],
  },
];
