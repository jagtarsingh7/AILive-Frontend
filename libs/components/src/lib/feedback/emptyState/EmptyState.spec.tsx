import { screen } from '@testing-library/react';
import { renderWithTheme } from '@canvass/shared/test-utils';
import { MessageSmileIcon } from '@canvass/shared/icons';
import EmptyState from './EmptyState';
import Button from '../../forms/button/Button';

describe('EmptyState', () => {
  test('should render empty state with no icon', () => {
    const { baseElement } = renderWithTheme(
      <EmptyState
        title="This is a title"
        description="This is a description"
        ctaElement={
          <Button onClick={() => alert('clicked')}>This is a button</Button>
        }
      />
    );
    expect(baseElement).toBeVisible();
    expect(screen.queryByText('This is a title')).toBeVisible();
    expect(screen.queryByText('This is a description')).toBeVisible();
    const button = screen.queryByRole('button');
    expect(button).toBeVisible();
    const icon = baseElement.getElementsByClassName('chakra-icon');
    expect(icon.length).toBe(0);
  });

  test('should render empty state with icon', () => {
    const { baseElement } = renderWithTheme(
      <EmptyState
        title="This is a title"
        description="This is a description"
        icon={<MessageSmileIcon />}
        ctaElement={
          <Button onClick={() => alert('clicked')}>This is a button</Button>
        }
      />
    );
    const icon = baseElement.getElementsByClassName('chakra-icon');
    expect(icon.length).toBe(1);
  });
});
