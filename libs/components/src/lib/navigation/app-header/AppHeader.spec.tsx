import { screen } from '@testing-library/react';
import { renderWithTheme, setup } from '@canvass/shared/test-utils';

import AppHeader, { type AppHeaderProps } from './AppHeader';
import { noop } from '@canvass/shared/utils';

describe('AppHeader', () => {
  function renderHeader(props?: Partial<AppHeaderProps>) {
    const { onSidebarToggle = noop } = props ?? {};
    return setup(
      renderWithTheme(
        <AppHeader
          isSidebarExpanded={true}
          onSidebarToggle={onSidebarToggle}
          toggleButtonAriaLabel="toggle sidebar button"
          {...props}
        />
      )
    );
  }

  test('should render header', () => {
    renderHeader();

    expect(screen.getByTestId('app-header')).toBeVisible();
    expect(screen.getByTestId('toggle-sidebar-button')).toBeVisible();
  });

  test('should call toggle action when clicking the collapse button', async () => {
    const toggleSpy = jest.fn();
    const { user } = renderHeader({ onSidebarToggle: toggleSpy });

    await user.click(screen.getByTestId('toggle-sidebar-button'));

    expect(toggleSpy).toHaveBeenCalledTimes(1);
  });

  test('expand button should be disabled if isSidebarDisabled is true', async () => {
    renderHeader({ isSidebarDisabled: true });

    expect(screen.getByTestId('toggle-sidebar-button')).toBeDisabled();
  });
});
