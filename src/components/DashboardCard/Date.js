export default function DateComponent({ created_at }) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(created_at));

  return <time dateTime={created_at}>{formattedDate}</time>;
}
