const shortDate = (dateStr) => {
  const date = new Date(dateStr);
  return (
    date.getDate() +
    "." +
    date.getMonth() +
    "." +
    Math.floor(date.getFullYear() % 100)
  );
};

const currentDate = () => new Date().toISOString().split("T")[0];

export { shortDate, currentDate };
