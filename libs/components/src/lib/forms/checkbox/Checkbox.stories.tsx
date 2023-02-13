import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { ThemingProps } from '@chakra-ui/react';

import theme from '../../../theme';

import Checkbox, { CheckboxSizes } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Forms/Checkbox/Checkbox',
  argTypes: {
    ...getThemingArgTypes(theme, 'Checkbox'),
    size: {
      control: 'radio',
      options: CheckboxSizes,
    },
    spacing: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/Checkbox).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1097%3A63652',
    },
  },
} as ComponentMeta<typeof Checkbox>;

type StoryProps = typeof Checkbox & ThemingProps<'Checkbox'>;

const Template: ComponentStory<StoryProps> = (args) => {
  return <Checkbox {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  size: 'sm',
};
