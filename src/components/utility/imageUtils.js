export const buildImageUrl = (base, path) => {
  if (!path) return "";

  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};
