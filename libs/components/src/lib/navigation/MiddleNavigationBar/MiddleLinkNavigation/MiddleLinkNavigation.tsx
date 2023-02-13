import { NavLink, type To } from 'react-router-dom';
import NavButton, { type NavButtonProps } from '../NavButton';
import Container from '../Container';

export interface NavLinkItemProps {
  title: string;
  icon: NavButtonProps['icon'];
  to: To;
  /** 
  `end` determines if the active path is matched exactly to this route 
  or if it should match any of it's descendants 
  */
  end?: boolean;
}

export interface MiddleLinkNavigationProps {
  navigation: NavLinkItemProps[];
  'data-testid'?: string;
}

const MiddleNavigationLink = (props: MiddleLinkNavigationProps) => {
  const { navigation, 'data-testid': testId } = props;

  return (
    <Container data-testid={testId}>
      {navigation.map(({ title, icon, to, end = true }) => (
        <NavLink
          key={title}
          to={to}
          end={end}
          style={{ width: '100%' }}
          role="link"
        >
          {({ isActive }) => (
            <NavButton
              as="span"
              icon={icon}
              isActive={isActive}
              data-testid={testId}
            >
              {title}
            </NavButton>
          )}
        </NavLink>
      ))}
    </Container>
  );
};

export default MiddleNavigationLink;
