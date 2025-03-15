export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr) {
  if (!dateStr) return "Invalid date"; // Handle undefined/null cases

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "Invalid date"; // Handle invalid date formats

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Change to true for AM/PM format
    timeZone: "UTC",
  }).format(date);
}




export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
