import { removeTzIfString } from './transformations';

export function isStartLessThanEnd(
  start: string | null | undefined,
  end: string | null | undefined
) {
  const startDate = removeTzIfString(start);
  const endDate = removeTzIfString(end);
  if (!startDate || !endDate) {
    return true;
  }
  return Date.parse(startDate) < Date.parse(endDate);
}

export function isStartLessThanOrEqualToEnd(
  start: string | null | undefined,
  end: string | null | undefined
) {
  const startDate = removeTzIfString(start);
  const endDate = removeTzIfString(end);
  if (!startDate || !endDate) {
    return true;
  }
  return Date.parse(startDate) <= Date.parse(endDate);
}

export function isDateBetween(
  start: string | null | undefined,
  middle: string | null | undefined,
  end: string | null | undefined
) {
  const startDate = removeTzIfString(start);
  const middleDate = removeTzIfString(middle);
  const endDate = removeTzIfString(end);
  if (!startDate || !endDate || !middleDate) {
    return true;
  }
  return (
    Date.parse(startDate) < Date.parse(middleDate) &&
    Date.parse(middleDate) < Date.parse(endDate)
  );
}
