/**
 * @param isoDateString - a string in ISO format ending in 'Z' e.g. '2021-01-22T00:00:00.000Z'
 * @returns returns a string representation of date formatted in a current language as '22 Jan 2022'
 */
export function formatDate(isoDateString: string): string {
  const date = new Date(isoDateString);
  const language = 'en-US';

  const day = date.getDate();
  const month = date.toLocaleString(language, { month: 'short' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

const addZero = (num: number) => `${num}`.padStart(2, '0');

/**
 * format Date in the format of `hh:mm AM/PM DD M YY` or `DD M, YYYY, hh:mm AM/PM`
 * @example
 * formatDateTime("2023-01-22T00:00:00.000Z", true);
 * // returns 12:00 AM 22 Jan 23
 *
 * formatDateTime("2023-01-22T00:00:00.000Z", false);
 * // returns 22 Jan, 2023, 12:00 AM
 * @returns {string} Returns the formatted value of
 */
export function formatDateTime(
  isoDateString: string | null | undefined,
  timeFirst?: boolean
): string {
  if (!isoDateString) return '';
  const date = new Date(isoDateString);
  const language = 'en-US';

  const day = date.getDate();
  const month = date.toLocaleString(language, { month: 'short' });
  const fullYear = date.getFullYear();
  const shortYear = fullYear.toString().slice(-2);
  const hour = date.getHours();
  const minute = addZero(date.getMinutes());
  const dayPeriod = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  const formattedHourWithZero = addZero(formattedHour);

  if (timeFirst) {
    return `${formattedHourWithZero}:${minute} ${dayPeriod} ${day} ${month} ${shortYear}`;
  }
  return `${month} ${day}, ${fullYear}, ${formattedHourWithZero}:${minute} ${dayPeriod}`;
}

/**
 * format Date in the format of hh:mm a D/M/YY
 * @example
 * formatDateTime(2023-01-22T00:00:00.000Z);
 * // returns 12:00 AM 22/1/23
 * @returns {string} Returns the formatted value of
 */
export function formatDateTimeShortenVersion(isoDateString: string): string {
  const date = new Date(isoDateString);
  const language = 'en-US';

  const day = date.getDate();
  const month = date.toLocaleString(language, { month: 'numeric' });
  const year = date.getFullYear().toString().slice(-2);
  const hour = date.getHours();
  const minute = addZero(date.getMinutes());
  const dayPeriod = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  const formattedHourWithZero = addZero(formattedHour);

  const formattedDateTime = `${formattedHourWithZero}:${minute} ${dayPeriod} ${day}/${month}/${year}`;

  return formattedDateTime;
}
