/**
 * @param {number} value - the number to be formatted
 * @param {number} [precision=2] - the number of decimal places to return
 * @returns {number | null} number formatted to the specified number of
 * decimal places or null if value was not parseable
 */
export function formatNumber(value: number | undefined | null, precision = 2) {
  if (value === undefined || value === null) {
    return null;
  }
  return value.toFixed(precision);
}
