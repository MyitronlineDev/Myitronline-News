
export const formatDateDDMMYY = (dateValue) => {
  if (!dateValue) return "";

  const date = new Date(dateValue);

  if (isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
