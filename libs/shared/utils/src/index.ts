export { formatBytes } from './formatBytes';
export {
  formatDate,
  formatDateTime,
  formatDateTimeShortenVersion,
} from './dates/formatDate';
export {
  getDateFromStringOrDate,
  getDateWithoutTz,
  removeTzIfString,
} from './dates/transformations';
export {
  isStartLessThanEnd,
  isStartLessThanOrEqualToEnd,
  isDateBetween,
} from './dates/comparisons';
export { addOpacity } from './colors/addOpacity';
export {
  ROUTES,
  SIDEBAR_WIDTH,
  HEADER_HEIGHT,
  MIDDLE_BAR_AND_SIDEBAR_WIDTH,
} from './constants';
export { formatNumber } from './formatNumber';
export { getEnv } from './getEnv';
export { hasKey } from './objectHelpers';
export * from './formatTableCellValues';

// Hooks
export * from './hooks';

const emptyFnReturn = {};
export const noop = () => emptyFnReturn;
