export const dateTransformer = (dateString) => {
  const date = new Date(dateString);

  // Встановлюємо часовий пояс UTC
  date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  return date.toLocaleString();
};

export const compareCreatedAt = (a, b) => {
  if (a.createdAt > b.createdAt) return -1;
  if (a.createdAt < b.createdAt) return 1;
  return 0;
};
