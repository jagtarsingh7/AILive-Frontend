import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { ThemingProps } from '@chakra-ui/react';

import theme from '../../../theme';

import { Select } from './Select';

export default {
  component: Select,
  title: 'Forms/Select',
  argTypes: {
    ...getThemingArgTypes(theme, 'Select'),
    placeholder: {
      control: 'text',
      description:
        'If no `placeholder` prop supplied first option is selected by default.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on <a href="https://chakra-ui.com/docs/components/select" target="_blank">Chakra Docs</a>.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=3281%3A377673',
    },
  },
} as ComponentMeta<typeof Select>;

type StoryProps = typeof Select & ThemingProps<'Select'>;

const Template: ComponentStory<StoryProps> = (args) => {
  return (
    <Select {...args} w="80">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Select an option',
  isDisabled: false,
};

export const NoPlaceholder = Template.bind({});
NoPlaceholder.args = {
  ...Primary.args,
  placeholder: '',
};
