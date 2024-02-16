export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTime(): Date {
  const now = new Date();
  const offSet = -5;
  now.setHours(now.getUTCHours() + offSet);

  return now;
}

export function formatTime(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Bogota"
  };

  let formattedTime = new Intl.DateTimeFormat("es-EC", options).format(date);
  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("es-EC", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
