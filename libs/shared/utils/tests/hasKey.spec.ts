import { hasKey } from '../src/objectHelpers';

describe('Test Object Helpers', () => {
  test('has key', () => {
    const result = hasKey({ foundKey: 'abc' }, 'foundKey');
    expect(result).toBeTruthy();
  });
  test('does not have key', () => {
    const result = hasKey({ notFoundKey: 'abc' }, 'foundKey');
    expect(result).toBeFalsy();
  });
  test('object is undefined', () => {
    const result = hasKey(undefined, 'foundKey');
    expect(result).toBeFalsy();
  });
});
