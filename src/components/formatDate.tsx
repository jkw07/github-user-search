export const formatDate = (dateString: string | number | null) => {
  if (!dateString) return "unknown";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
