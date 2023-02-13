import { formatNumber } from './formatNumber';

export const PERCENT_PRECISION = 2;
export const PRECISION = 3;
const PLACEHOLDER = 'placeholder';

export function formatCell(
  value: number | string | null | undefined,
  isLoading: boolean,
  precision = PRECISION
) {
  if (isLoading) {
    // skeleton is refusing to show up unless there is text within it
    return PLACEHOLDER;
  }
  if (typeof value === 'number') return formatNumber(value, precision);
  return value;
}
