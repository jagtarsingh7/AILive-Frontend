import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { BoxProps, VStack, Avatar, Portal } from '@chakra-ui/react';
import IconButton from '../../forms/button/iconButton/IconButton';
import Tooltip from '../../overlay/tooltip/Tooltip';
import type { NavigationConfig } from './types';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '@canvass/shared/utils';
import DropdownMenu from '../../overlay/dropdownMenu/DropdownMenu';
import { LogoutIcon } from '@canvass/shared/icons';

interface UserOption {
  title: string;
  onClick: () => void;
}

export interface SidebarNavigationProps extends BoxProps {
  navigation: NavigationConfig[];
  isExpanded: boolean;
  isDisabled?: boolean;
  user?: {
    name: string;
    nickname?: string;
  };
  userOptions?: UserOption[];
}

const states = {
  COLLAPSED: 'COLLAPSED',
  EXPANDED: 'EXPANDED',
} as const;

const transitionVariants: Variants = {
  [states.EXPANDED]: {
    x: 0,
    opacity: 1,
  },
  [states.COLLAPSED]: {
    x: -40,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const SidebarNavigation = (props: SidebarNavigationProps) => {
  const { navigation, isExpanded, user, userOptions, ...boxProps } = props;

  return (
    <AnimatePresence>
      {isExpanded && (
        <VStack
          as={motion.nav}
          variants={transitionVariants}
          initial={states.COLLAPSED}
          animate={states.EXPANDED}
          exit={states.COLLAPSED}
          position="fixed"
          top="0"
          bottom="0"
          left="0"
          py="5"
          mt={HEADER_HEIGHT}
          width={SIDEBAR_WIDTH}
          justifyContent="space-between"
          bg="gray.100"
          borderRight="1px"
          borderColor="gray.200"
          data-testid="app-sidebar"
          {...boxProps}
        >
          <VStack gap="4">
            {navigation.map((nav) => (
              <Tooltip
                key={nav.label}
                label={nav.label}
                placement="right"
                variant="dark"
                offset={[0, 14]}
                hasArrow
              >
                <NavLink to={nav.path} end={nav.end}>
                  {({ isActive }) => (
                    <IconButton
                      aria-label={nav.label}
                      icon={nav.icon}
                      variant="sidebarNav"
                      colorScheme={isActive ? 'primary' : 'gray'}
                      isActive={isActive}
                    />
                  )}
                </NavLink>
              </Tooltip>
            ))}
          </VStack>

          <DropdownMenu placement="right">
            <DropdownMenu.Button
              as={IconButton}
              icon={
                <Avatar
                  size="md"
                  name={(user?.nickname || user?.name) ?? ''}
                  borderRadius="md"
                  color="primary.600"
                  bg="primary.100"
                  data-testid="user-avatar"
                />
              }
              size="lg"
              variant="ghost"
              aria-label="Avatar"
              colorScheme="primary"
            />
            <Portal>
              <DropdownMenu.List>
                {userOptions?.map(({ title, onClick }) => (
                  <DropdownMenu.Item
                    key={title}
                    icon={<LogoutIcon stroke="MenuText" />}
                    onClick={onClick}
                  >
                    {title}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.List>
            </Portal>
          </DropdownMenu>
        </VStack>
      )}
    </AnimatePresence>
  );
};

export default SidebarNavigation;
