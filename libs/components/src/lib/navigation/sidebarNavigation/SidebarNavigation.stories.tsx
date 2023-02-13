import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Kbd } from '@chakra-ui/react';

import SidebarNavigation from './SidebarNavigation';
import Text from '../../typography/text/Text';
import routesMock from './routes.mock';

type ComponentTypeof = typeof SidebarNavigation;

export default {
  component: SidebarNavigation,
  title: 'Navigation/Sidebar Navigation',
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=9338%3A367518',
    },
  },
} as ComponentMeta<ComponentTypeof>;

const Template: ComponentStory<ComponentTypeof> = (args) => {
  const { pathname } = useLocation();

  return (
    <>
      <Text ml="20">
        The active route is: <Kbd>{pathname}</Kbd>
      </Text>
      <SidebarNavigation {...args} navigation={routesMock} />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  isExpanded: true,
};
