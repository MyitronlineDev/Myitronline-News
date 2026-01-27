// headerData.js

const CURRENT_YEAR = new Date().getFullYear();

export const NAV_CONTENT = {
  "Income Tax": [
    { label: "Articles", type: "article" },
    { label: "News", type: "news" },
    { label: "Circular", type: "circular" },
  ],

  Budget: [
    { label: `Budget ${CURRENT_YEAR}`, type: "news" },
  ],

  GST: [
    { label: "Articles", type: "article" },
    { label: "News", type: "news" },
    { label: "Circular", type: "circular" },
  ],

  RBI: [
    { label: "Articles", type: "article" },
    { label: "News", type: "news" },
    { label: "Circular", type: "circular" },
  ],

  Finance: [
    { label: "Articles", type: "article" },
    { label: "News", type: "news" },
    { label: "Notifications", type: "notifications" },
  ],

  "Corporate Law": [
    { label: "Articles", type: "article" },
    { label: "News", type: "news" },
    { label: "Notifications", type: "notifications" },
  ],

  "Global News": [
    { label: "Articles", type: "article" },
    { label: "News", type: "news" },
  ],
};
