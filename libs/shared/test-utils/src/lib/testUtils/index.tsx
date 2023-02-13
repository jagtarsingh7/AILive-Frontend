import { useLocation } from 'react-router-dom';
import { act } from '@testing-library/react';

export * from './renders';

export const ensureRender = async () => {
  await act(() => Promise.resolve());
};

export function noopPromise(_?: unknown): Promise<unknown> {
  throw new Error('Empty function');
}

export const LocationPathNameDisplay = () => {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
};

export const SearchParamsDisplay = () => {
  const location = useLocation();
  return <div data-testid="search-params-display">{location.search}</div>;
};

export const generateStringByLength = (length: number) => {
  return 's'.repeat(length + 1);
};
