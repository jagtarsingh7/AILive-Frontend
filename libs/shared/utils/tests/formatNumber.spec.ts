import { formatNumber } from '../src/formatNumber';

describe('Test Number Formatter', () => {
  test('format to default decimal places', () => {
    const result = formatNumber(23.1234);
    expect(result).toEqual('23.12');
  });
  test('format to 1 decimal place', () => {
    const result = formatNumber(23.1234, 1);
    expect(result).toEqual('23.1');
  });
  test('format to 0 decimal place', () => {
    const result = formatNumber(23.1234, 0);
    expect(result).toEqual('23');
  });
  test('format zero', () => {
    const result = formatNumber(0);
    expect(result).toEqual('0.00');
  });
  test('format invalid number', () => {
    const result = formatNumber(undefined);
    expect(result).toBeNull();
  });
  test('format null number', () => {
    const result = formatNumber(null);
    expect(result).toBeNull();
  });
});
