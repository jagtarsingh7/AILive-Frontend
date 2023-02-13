import { navigationButtonList } from '../navigation.mock';
import MiddleButtonNavigation from './MiddleButtonNavigation';
import { renderWithTheme, setup } from '@canvass/shared/test-utils';
import { screen, within } from '@testing-library/react';

const testId = 'middle-bar-navigation-buttons';
const firstBtnTestId = navigationButtonList[0].testId;

describe('Middle Navigation Buttons', () => {
  const renderMiddleButtonNavigation = (nav = navigationButtonList) =>
    setup(
      renderWithTheme(
        <MiddleButtonNavigation navigation={nav} data-testid={testId} />
      )
    );

  test('should render multiple buttons', () => {
    renderMiddleButtonNavigation();

    const middleBarContainer = screen.getByTestId(testId);
    expect(middleBarContainer).toBeVisible();
    expect(within(middleBarContainer).getAllByRole('button')).toHaveLength(
      navigationButtonList.length
    );
  });

  test('should render title', () => {
    const title = 'Sampling Rate';
    renderMiddleButtonNavigation([{ ...navigationButtonList[0], title }]);

    expect(screen.getByText(title)).toBeVisible();
    expect(
      screen.getByTestId(`${firstBtnTestId}-button-title`)
    ).toHaveTextContent(title);
  });

  test('should render alert icon', () => {
    renderMiddleButtonNavigation([
      { ...navigationButtonList[0], hasError: true },
    ]);

    expect(
      screen.getByTestId(`${firstBtnTestId}-button-alert-icon`)
    ).toBeVisible();
  });

  test('should render badge', () => {
    const badge = '123';
    renderMiddleButtonNavigation([
      { ...navigationButtonList[0], hasError: false, badge },
    ]);

    expect(screen.getByText(badge)).toBeVisible();
    expect(
      screen.getByTestId(`${firstBtnTestId}-button-badge`)
    ).toHaveTextContent(badge);
  });

  test('should NOT render badge when hasError is true', () => {
    const badge = '123';
    renderMiddleButtonNavigation([
      { ...navigationButtonList[0], hasError: true, badge },
    ]);

    expect(
      screen.queryByTestId(`${firstBtnTestId}-button-badge`)
    ).not.toBeInTheDocument();
  });

  test('should call onClick event when button is clicked', async () => {
    const onClickSpy = jest.fn();
    const title = 'Title';
    const { user } = renderMiddleButtonNavigation([
      { ...navigationButtonList[0], title, onClick: onClickSpy },
    ]);

    await user.click(screen.getByText(title));

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  test.todo(
    'when hasError is true and has errorTooltip, should show tooltip on hover of button'
  );
  test.todo(
    'when hasError is false, should NOT show tooltip on hover of button'
  );
});
