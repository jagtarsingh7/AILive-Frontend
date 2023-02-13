import { NavLink } from 'react-router-dom';

import { HomeLineIcon, ChevronRightIcon } from '@canvass/shared/icons';

import { BoxProps, Breadcrumb, BreadcrumbItem, Text } from '@chakra-ui/react';
import IconButton from '../../forms/button/iconButton/IconButton';
import Button, { ButtonProps } from '../../forms/button/Button';

const buttonProps: Partial<ButtonProps> = {
  as: 'span',
  variant: 'breadcrumbNav',
  colorScheme: 'gray',
  size: 'sm',
};

export interface BreadcrumbNavigationConfig {
  path: string;
  label: string;
  isHomePath?: boolean;
  isStandalone?: boolean;
}

interface CrumbProps {
  nav: BreadcrumbNavigationConfig;
  isActive: boolean;
}

function Crumb({ nav, isActive }: CrumbProps) {
  if (nav.isHomePath) {
    return (
      <IconButton
        aria-label={nav.label}
        icon={<HomeLineIcon />}
        isActive={isActive}
        {...buttonProps}
      />
    );
  }
  return (
    <Button isActive={nav.isStandalone ? false : isActive} {...buttonProps}>
      <Text maxWidth={36} noOfLines={1} display="block">
        {nav.label}
      </Text>
    </Button>
  );
}

export interface BreadcrumbsProps extends BoxProps {
  navigation: BreadcrumbNavigationConfig[];
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { navigation, ...boxProps } = props;
  return (
    <Breadcrumb
      spacing="2"
      separator={<ChevronRightIcon stroke={'gray.300'} />}
      data-testid="breadcrumb-nav"
      {...boxProps}
    >
      {navigation.map((nav, index) => (
        <BreadcrumbItem key={nav.label}>
          {index === navigation.length - 1 ? (
            <Text
              as="span"
              noOfLines={1}
              lineHeight="1.2"
              fontSize="sm"
              fontWeight="medium"
              px="3.5"
              display="block"
              color={'gray.500'}
            >
              {nav.label}
            </Text>
          ) : (
            <NavLink to={nav.path} end>
              {({ isActive }) => <Crumb nav={nav} isActive={isActive} />}
            </NavLink>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
