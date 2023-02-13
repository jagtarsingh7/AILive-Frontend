import { screen } from '@testing-library/react';
import { renderWithTheme } from '@canvass/shared/test-utils';

import Loading from './Loading';

const defaultText = 'Loading...';
const loadingText = 'Processing...';

describe('Loading', () => {
  it('should render Loading... as default', () => {
    renderWithTheme(<Loading />);
    expect(screen.getAllByText(defaultText)).toHaveLength(2);
  });

  it('should render loading text', () => {
    renderWithTheme(<Loading loadingText={loadingText} />);
    expect(screen.getAllByText(loadingText)).toHaveLength(2);
  });
});
