import '@testing-library/jest-dom';
import { mockApiServer } from './libs/shared/test-utils/src';

// Enable API mocking before tests.
beforeAll(() => {
  mockApiServer.listen();
  // The below code is for Match Media
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    })),
  });
  // Fix animation / transition errors
  window.scrollTo = jest.fn();
});

// Reset any runtime request handlers we may add during the tests.
afterEach(() => mockApiServer.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => mockApiServer.close());
