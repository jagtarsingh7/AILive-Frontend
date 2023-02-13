import { CanvassWordmarkIcon } from '@canvass/shared/icons';
import { HEADER_HEIGHT } from '@canvass/shared/utils';
import { BoxProps, Flex, HStack } from '@chakra-ui/react';
import CollapseSidebarButton, {
  type CollapseSidebarButtonProps,
} from './CollapseSidebarButton';

export interface AppHeaderProps extends BoxProps, CollapseSidebarButtonProps {
  children?: React.ReactNode;
}

export const AppHeader = (props: AppHeaderProps) => {
  const {
    children,
    isSidebarExpanded,
    isSidebarDisabled,
    onSidebarToggle,
    toggleButtonAriaLabel,
    ...boxProps
  } = props;

  return (
    <HStack
      as="header"
      pos="fixed"
      top="0"
      height={HEADER_HEIGHT}
      width="full"
      bg="gray.100"
      borderBottom="1px"
      borderColor="gray.200"
      data-testid="app-header"
      zIndex="sticky"
      spacing={0}
      {...boxProps}
    >
      <CollapseSidebarButton
        onSidebarToggle={onSidebarToggle}
        isSidebarExpanded={isSidebarExpanded}
        isSidebarDisabled={isSidebarDisabled}
        toggleButtonAriaLabel={toggleButtonAriaLabel}
      />
      <Flex
        width={'full'}
        justifyContent={'space-between'}
        alignItems={'center'}
        px={6}
      >
        {children}
        <CanvassWordmarkIcon w={'100px'} h={'32px'} />
      </Flex>
    </HStack>
  );
};

export default AppHeader;
