import { fireEvent, screen, within } from '@testing-library/react';
import {
  LocationPathNameDisplay,
  renderWithRoute,
} from '@canvass/shared/test-utils';

import { Breadcrumbs } from './Breadcrumbs';
import navigations from './navigation.mock';

describe('Breadcrumbs', () => {
  function render() {
    return renderWithRoute(
      <>
        <Breadcrumbs navigation={navigations} />
        <LocationPathNameDisplay />
      </>
    );
  }

  test('should render 3 crumbs and 2 chevrons', () => {
    render();
    const nav = screen.getByRole('navigation');
    const container = within(screen.getByRole('navigation'));

    expect(nav).toBeVisible();
    // expect one button per nav item
    expect(container.getAllByRole('link')).toHaveLength(navigations.length - 1);
    // expect one chevron between each item (nav items - 1)
    expect(container.getAllByRole('presentation')).toHaveLength(
      navigations.length - 1
    );
    // expect home path(s) to have aria labels
    navigations
      .filter((navigation) => navigation.isHomePath)
      .forEach((navigation) => {
        expect(container.getByLabelText(navigation.label)).toBeVisible();
      });
  });

  test('should set active when button is clicked', () => {
    render();

    const homeButton = screen.getByLabelText(navigations[0].label);
    const secondButton = screen.getByRole('link', {
      name: navigations[1].label,
    });

    fireEvent.click(homeButton);
    expect(homeButton).toHaveAttribute('data-active');
    expect(secondButton).not.toHaveAttribute('aria-current');

    fireEvent.click(secondButton);
    expect(homeButton).not.toHaveAttribute('aria-current');
    expect(secondButton).toHaveAttribute('aria-current');
  });

  test('should change route when button is clicked', () => {
    render();

    expect(screen.getByTestId('location-display')).toHaveTextContent('/');

    const { path, label } = navigations[1];
    fireEvent.click(screen.getByRole('link', { name: label }));
    expect(screen.getByTestId('location-display')).toHaveTextContent(path);
  });
});
