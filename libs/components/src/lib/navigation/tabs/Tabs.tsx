import React from 'react';
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabProps as ChakraTabProps,
  TabPanel,
  TabsProps as ChakraTabsProps,
  useTab,
  Button,
  useTabsStyles,
  VStack,
  Box,
  HStack,
} from '@chakra-ui/react';
import Badge from '../../data-display/badge/Badge';
import type { BadgeProps } from '../../data-display/badge/Badge';
import { tabSizes, tabsVariants } from './Tabs.styles';

interface TabsProps extends ChakraTabsProps {
  isFitted?: ChakraTabsProps['isFitted'];
  size?: keyof typeof tabSizes;
  variant?: keyof typeof tabsVariants;
  colorScheme?: 'primary';
  dataTestId?: string;
}

const Tabs = (props: TabsProps) => {
  const { dataTestId, ...rest } = props;
  return <ChakraTabs data-testid={dataTestId} {...rest} />;
};

export interface TabWithIconProps extends ChakraTabProps {
  icon: React.ReactElement;
  description: string;
  count?: number;
}

const TabWithIcons = React.forwardRef<HTMLElement, TabWithIconProps>(
  (props: TabWithIconProps, ref) => {
    const { icon, description, count } = props;
    const tabProps = useTab({ ...props, ref });
    const styles = useTabsStyles();

    return (
      <Button __css={styles['tab']} {...tabProps}>
        <VStack>
          <Box as="span" className="tab-icon">
            {icon}
          </Box>
          <HStack spacing={0}>
            <Box>{description}</Box>
            {count !== undefined && (
              <Box flexBasis="content">
                <TabBadge>{count}</TabBadge>
              </Box>
            )}
          </HStack>
        </VStack>
      </Button>
    );
  }
);

const TabBadge = (props: BadgeProps) => {
  return <Badge className="tab-badge" {...props} />;
};

Tabs.Panel = TabPanel;
Tabs.Panels = TabPanels;

Tabs.Badge = TabBadge;
Tabs.TabWithIcons = TabWithIcons;
Tabs.Tab = Tab;
Tabs.List = TabList;

export default Tabs;
