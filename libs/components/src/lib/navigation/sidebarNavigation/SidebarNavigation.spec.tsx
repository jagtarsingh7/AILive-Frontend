import { fireEvent, screen, waitFor, within } from '@testing-library/react';
import {
  LocationPathNameDisplay,
  renderWithRoute,
  setup,
} from '@canvass/shared/test-utils';

import SidebarNavigation, {
  type SidebarNavigationProps,
} from './SidebarNavigation';
import routesMock from './routes.mock';
import { noop } from '@canvass/shared/utils';

const defaultUser = { name: 'John Doe' };
const defaultUserOptions = [{ title: 'Action Title', onClick: noop }];

describe('Sidebar Navigation', () => {
  function render(props?: Partial<SidebarNavigationProps>) {
    const {
      isExpanded = true,
      user = defaultUser,
      userOptions = defaultUserOptions,
    } = props ?? {};

    return renderWithRoute(
      <>
        <SidebarNavigation
          navigation={routesMock}
          isExpanded={isExpanded}
          user={user}
          userOptions={userOptions}
        />
        <LocationPathNameDisplay />
      </>
    );
  }

  test('should render 4 buttons', async () => {
    render();
    const nav = screen.getByRole('navigation');
    const container = within(nav);

    await waitFor(() => expect(nav).toBeVisible());
    const USER_AVATAR = 1;
    expect(container.getAllByRole('button')).toHaveLength(
      routesMock.length + USER_AVATAR
    );
  });

  test('should set active when button is clicked', () => {
    render();

    const firstBtn = screen.getByRole('button', { name: routesMock[0].label });
    const secondBtn = screen.getByRole('button', { name: routesMock[1].label });

    expect(firstBtn).toHaveAttribute('data-active');
    expect(secondBtn).not.toHaveAttribute('data-active');

    fireEvent.click(secondBtn);
    expect(firstBtn).not.toHaveAttribute('data-active');
    expect(secondBtn).toHaveAttribute('data-active');
  });

  test('should change route when button is clicked', () => {
    render();

    expect(screen.getByTestId('location-display')).toHaveTextContent('/');

    const { path, label } = routesMock[1];
    fireEvent.click(screen.getByRole('button', { name: label }));
    expect(screen.getByTestId('location-display')).toHaveTextContent(path);
  });

  test('should hide sidebar when isExpanded is false', async () => {
    render({ isExpanded: false });

    await waitFor(() =>
      expect(screen.queryByTestId('app-sidebar')).not.toBeInTheDocument()
    );
  });

  test('should have Avatar as the last item', () => {
    render();

    const avatar = screen.getByTestId('user-avatar');
    expect(avatar.textContent).toBeTruthy();
  });

  test('list of user actions when Avatar is clicked', async () => {
    const onClickSpy = jest.fn();
    const userOptions = [{ ...defaultUserOptions[0], onClick: onClickSpy }];
    const { user } = setup(
      render({
        userOptions,
      })
    );

    const avatar = screen.getByTestId('user-avatar');
    await user.click(avatar);

    const menu = await screen.findByRole('menu');
    const firstOption = within(menu).getByRole('menuitem', {
      name: userOptions[0].title,
    });
    await user.click(firstOption);
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  test.todo('should show tooltip when hover');
});
