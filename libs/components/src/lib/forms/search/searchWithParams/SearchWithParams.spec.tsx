import { SearchParamsDisplay } from '@canvass/shared/test-utils';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import SearchWithParams from './SearchWithParams';

describe('Search', () => {
  const user = userEvent.setup();

  const BackButton = () => {
    const navigate = useNavigate();
    return <button onClick={() => navigate(-1)}>Back</button>;
  };

  test('should change the URL search params', async () => {
    render(
      <MemoryRouter>
        <SearchWithParams dataTestId="search-with-params-input" />
        <SearchParamsDisplay />
      </MemoryRouter>
    );

    const searchInput = screen.getByTestId('search-with-params-input');
    expect(searchInput).toHaveValue('');
    await user.type(searchInput, 'boiler');
    expect(searchInput).toHaveValue('boiler');
    expect(screen.getByTestId('search-params-display')).toHaveTextContent(
      'boiler'
    );
  });

  test('should render value of URL search param', async () => {
    render(
      <MemoryRouter initialEntries={['/?q=boiler']}>
        <SearchWithParams dataTestId="search-with-params-input" />
        <SearchParamsDisplay />
      </MemoryRouter>
    );

    const searchInput = screen.getByTestId('search-with-params-input');
    expect(searchInput).toHaveValue('boiler');
  });

  test('should only push the query to the history stack', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <SearchWithParams dataTestId="search-with-params-input" />
        <BackButton />
        <SearchParamsDisplay />
      </MemoryRouter>
    );

    const searchInput = screen.getByTestId('search-with-params-input');
    await user.type(searchInput, 't');
    await user.type(searchInput, 'e');
    await user.type(searchInput, 's');
    await user.type(searchInput, 't');
    expect(searchInput).toHaveValue('test');
    expect(screen.getByTestId('search-params-display')).toHaveTextContent(
      'test'
    );

    await user.click(screen.getByRole('button'));
    expect(searchInput).toHaveValue('');
    expect(screen.getByTestId('search-params-display')).toHaveTextContent('');
  });
});
