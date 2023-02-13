import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { ThemingProps } from '@chakra-ui/react';

import theme from '../../../theme';

import Radio, { RadioSizes } from './Radio';

export default {
  component: Radio,
  title: 'Forms/Radio/Radio',
  argTypes: {
    ...getThemingArgTypes(theme, 'Radio'),
    size: {
      control: 'radio',
      options: RadioSizes,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on <a href="https://chakra-ui.com/docs/components/radio" target="_blank">Chakra Docs</a>.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1097%3A63652',
    },
  },
} as ComponentMeta<typeof Radio>;

type StoryProps = typeof Radio & ThemingProps<'Radio'>;

const Template: ComponentStory<StoryProps> = (args) => {
  return <Radio {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  size: 'sm',
};
