import { screen } from '@testing-library/react';
import { renderWithTheme } from '@canvass/shared/test-utils';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('should render progress bar', () => {
    const { baseElement } = renderWithTheme(<ProgressBar />);
    expect(baseElement).toBeVisible();
    expect(screen.queryByText('%')).not.toBeInTheDocument();
  });

  test('should render a label when labelOption is right', () => {
    renderWithTheme(<ProgressBar labelOption="right" value={20} />);
    expect(screen.queryByText('20%')).toBeVisible();
  });

  test('should render a label when labelOption is bottomRight', () => {
    renderWithTheme(<ProgressBar labelOption="bottomRight" value={20} />);
    expect(screen.queryByText('20%')).toBeVisible();
  });

  test('should have indeterminate attribute when isIndeterminate is true', () => {
    renderWithTheme(<ProgressBar isIndeterminate />);
    const progressBarElement = screen.getByRole('progressbar');
    expect(progressBarElement).toHaveAttribute('data-indeterminate');
  });
});
