import {
  formatDate,
  formatDateTime,
  formatDateTimeShortenVersion,
} from './formatDate';

describe('formatDate', () => {
  it('should return a string representation of the date formatted in the current language', () => {
    const isoDateString = '2023-01-22T00:00:00.000Z';
    const expected = '22 Jan 2023';
    const result = formatDate(isoDateString);
    expect(result).toBe(expected);
  });

  it('should return a string representation of the datetime formatted in the current language', () => {
    const isoDateString = '2023-01-22T13:45:00.000';
    const expected = 'Jan 22, 2023, 01:45 PM';
    const result = formatDateTime(isoDateString);
    expect(result).toBe(expected);
  });
});

describe('formatDateTime', () => {
  it('should return a string of the date and time formatted with time in the beginning', () => {
    const isoDateString = '2023-01-22T00:00:00.000Z';
    const expected = `12:00 AM 22 Jan 23`;
    const result = formatDateTime(isoDateString, true);
    expect(result).toBe(expected);
  });

  it('should return a string of the date and time formatted with time in the end and full year', () => {
    const isoDateString = '2023-01-22T00:00:00.000Z';
    const expected = `Jan 22, 2023, 12:00 AM`;
    const result = formatDateTime(isoDateString, false);
    expect(result).toBe(expected);
  });
});

describe('formatDateTimeShortenVersion', () => {
  it('should return a string representation of the date and time formatted in the current language in short version', () => {
    const isoDateString = '2023-01-22T00:00:00.000Z';
    const expected = `12:00 AM 22/1/23`;
    const result = formatDateTimeShortenVersion(isoDateString);
    expect(result).toBe(expected);
  });
});
