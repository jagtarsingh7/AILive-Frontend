import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Kbd, Text } from '@chakra-ui/react';
import { navigationLinkList, navigationButtonList } from './navigation.mock';

import MiddleLinkNavigation from './MiddleLinkNavigation/MiddleLinkNavigation';
import MiddleButtonNavigation from './MiddleButtonNavigation/MiddleButtonNavigation';
import { BrowserRouter, useLocation } from 'react-router-dom';

const Story: ComponentMeta<
  typeof MiddleLinkNavigation | typeof MiddleButtonNavigation
> = {
  component: MiddleButtonNavigation,
  title: 'Navigation/Middle Navigation Bar',
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};
export default Story;

const LinkTemplate: ComponentStory<typeof MiddleLinkNavigation> = (args) => {
  const { pathname } = useLocation();

  return (
    <>
      <Text mb="4">
        The active route is: <Kbd>{pathname}</Kbd>
      </Text>
      <Box borderRight="1px" borderColor="gray.200" width="72">
        <MiddleLinkNavigation {...args} navigation={navigationLinkList} />
      </Box>
    </>
  );
};

export const Links = LinkTemplate.bind({});

const ButtonTemplate: ComponentStory<typeof MiddleButtonNavigation> = (
  args
) => {
  return (
    <Box borderRight="1px" borderColor="gray.200" width="72">
      <MiddleButtonNavigation {...args} navigation={navigationButtonList} />
    </Box>
  );
};

export const Buttons = ButtonTemplate.bind({});
