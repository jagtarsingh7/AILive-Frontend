import { useState } from 'react';

export enum LOCAL_KEYS {
  IS_SIDEBAR_EXPANDED = 'isSidebarExpanded',
  HAS_MIDDLE_BAR = 'hasMiddleBar',
  DATA_TAB_INDEX = 'dataTabIndex',
}

// Documentation: https://usehooks.com/useLocalStorage/
export function useSafeLocalStorage<T>(key: LOCAL_KEYS, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`useSafeLocalStorage > getItem('${key}')`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      // eslint-disable-next-line no-console
      console.error(`useSafeLocalStorage > setItem('${key}')`, error);
    }
  };
  return [storedValue, setValue] as const;
}

export default useSafeLocalStorage;
