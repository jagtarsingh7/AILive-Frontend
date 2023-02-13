import { navigationLinkList } from '../navigation.mock';
import MiddleLinkNavigation from './MiddleLinkNavigation';
import {
  LocationPathNameDisplay,
  renderWithRoute,
  setup,
} from '@canvass/shared/test-utils';
import { screen, within } from '@testing-library/react';

const testId = 'middle-bar-navigation-links';

describe('Middle Navigation Links', () => {
  const renderMiddleLinkNavigation = (
    nav = navigationLinkList,
    mainRoute: string[] = ['/']
  ) =>
    setup(
      renderWithRoute(
        <>
          <MiddleLinkNavigation navigation={nav} data-testid={testId} />
          <LocationPathNameDisplay />
        </>,
        mainRoute
      )
    );

  test('should render multiple buttons', () => {
    renderMiddleLinkNavigation();

    const middleBarContainer = screen.getByTestId(testId);
    expect(middleBarContainer).toBeVisible();
    expect(
      within(middleBarContainer).getAllByTestId(`${testId}-button`)
    ).toHaveLength(navigationLinkList.length);
  });

  test('should render title', () => {
    const title = 'Data Summary';
    renderMiddleLinkNavigation([{ ...navigationLinkList[0], title }]);

    expect(screen.getByText(title)).toBeVisible();
    expect(screen.getByTestId(`${testId}-button-title`)).toHaveTextContent(
      title
    );
  });

  test('when clicking button, should navigate to "to" prop', async () => {
    const to = '/data-summary';
    const title = 'Data Summary';
    const { user } = renderMiddleLinkNavigation([
      { ...navigationLinkList[0], title, to },
    ]);

    await user.click(screen.getByText(title));
    expect(screen.getByTestId('location-display')).toHaveTextContent(to);
  });

  test('should set active when button is clicked', async () => {
    const { to: firstRoute } = navigationLinkList[0];
    const { user } = renderMiddleLinkNavigation(navigationLinkList, [
      firstRoute as string,
    ]);

    const [firstBtn, secondBtn] = screen.getAllByTestId(`${testId}-button`);

    expect(firstBtn).toHaveAttribute('data-active');
    expect(secondBtn).not.toHaveAttribute('data-active');

    await user.click(secondBtn);
    expect(firstBtn).not.toHaveAttribute('data-active');
    expect(secondBtn).toHaveAttribute('data-active');
  });
});
