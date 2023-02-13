import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Flex, Kbd } from '@chakra-ui/react';

import { Breadcrumbs } from './Breadcrumbs';
import Text from '../../typography/text/Text';
import navigations from './navigation.mock';

type ComponentTypeof = typeof Breadcrumbs;

export default {
  component: Breadcrumbs,
  title: 'Navigation/Breadcrumbs',
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
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=10770%3A338196&t=WbFLV5fcFEuXHVuP-0',
    },
  },
} as ComponentMeta<ComponentTypeof>;

const Template: ComponentStory<ComponentTypeof> = (args) => {
  const { pathname } = useLocation();
  const { navigation } = args;

  return (
    <>
      <Text mb="2">
        The active route is: <Kbd>{pathname}</Kbd>
      </Text>
      <Flex bg="gray.200" h="14" alignItems="center">
        <Breadcrumbs navigation={navigation} />
      </Flex>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  navigation: navigations,
};
