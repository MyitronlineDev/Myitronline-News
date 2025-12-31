export const CATEGORY_COLORS = [
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-purple-100 text-purple-700",
  "bg-yellow-100 text-yellow-700",
  "bg-red-100 text-red-700",
];


export const getCategoryColor = (category = "") => {

  const hash = category
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return CATEGORY_COLORS[hash % CATEGORY_COLORS.length];
};
