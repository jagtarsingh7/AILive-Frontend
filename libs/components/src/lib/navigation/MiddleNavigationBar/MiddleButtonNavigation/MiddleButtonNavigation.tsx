import NavButton, { type NavButtonProps } from '../NavButton';
import Container from '../Container';

export interface NavButtonItemProps {
  title: string;
  onClick: () => void;
  icon: NavButtonProps['icon'];
  badge?: NavButtonProps['badge'];
  hasError?: NavButtonProps['hasError'];
  errorTooltip?: NavButtonProps['errorTooltip'];
  isDisabled?: NavButtonProps['isDisabled'];
  testId?: string;
}

export interface MiddleButtonNavigationProps {
  navigation: NavButtonItemProps[];
  'data-testid'?: string;
}

const MiddleNavigationButton = (props: MiddleButtonNavigationProps) => {
  const { navigation, 'data-testid': testId } = props;

  return (
    <Container data-testid={testId}>
      {navigation.map(({ testId: btnTestId, title, ...buttonProps }) => (
        <NavButton
          key={title}
          title={title}
          data-testid={btnTestId}
          {...buttonProps}
        >
          {title}
        </NavButton>
      ))}
    </Container>
  );
};

export default MiddleNavigationButton;
