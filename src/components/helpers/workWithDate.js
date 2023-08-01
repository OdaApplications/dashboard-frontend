export const dateTransformer = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

export const compareCreatedAt = (a, b) => {
  if (a.createdAt > b.createdAt) return -1;
  if (a.createdAt < b.createdAt) return 1;
  return 0;
};
