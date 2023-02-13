import { screen, render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import SearchControlled from './SearchControlled';

describe('Search Controlled', () => {
  const searchedText = 'test';
  test('should be visible', async () => {
    let value = '';
    const onChangeSpy = jest.fn();
    onChangeSpy
      .mockReturnValueOnce('t')
      .mockReturnValueOnce('e')
      .mockReturnValueOnce('s')
      .mockReturnValueOnce('t');

    render(
      <SearchControlled
        onChange={() => {
          value += onChangeSpy();
        }}
        value={value}
        dataTestId="search-controlled-input"
      />
    );

    const searchInput = screen.getByTestId('search-controlled-input');
    expect(searchInput).toBeVisible();
    await userEvent.type(searchInput, searchedText);
    expect(onChangeSpy).toHaveBeenCalledTimes(searchedText.length);
    expect(value).toBe(searchedText);
  });
});
