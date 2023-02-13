import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import Textarea, { sizes, resizeOptions } from './Textarea';

import theme from '../../../theme';

export default {
  component: Textarea,
  title: 'Forms/Textarea',
  argTypes: {
    ...getThemingArgTypes(theme, 'Textarea'),
    size: {
      options: sizes,
      control: { type: 'radio' },
      description: 'Limited to only `md` size',
    },
    resize: {
      options: resizeOptions,
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/textarea).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1238%3A278',
    },
  },
} as ComponentMeta<typeof Textarea>;

type StoryProps = typeof Textarea;

const Template: ComponentStory<StoryProps> = (args) => {
  const { placeholder, defaultValue, ...rest } = args;
  return (
    <Textarea {...rest} placeholder={placeholder} defaultValue={defaultValue} />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  size: 'md',
  placeholder: 'Enter a description...',
  isDisabled: false,
  isInvalid: false,
  resize: 'none',
};

export const PrimaryWithDefaultValue = Template.bind({});
PrimaryWithDefaultValue.args = {
  ...Primary.args,
  defaultValue:
    'A little about the company and the team that you’ll be working with.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  isDisabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Primary.args,
  isInvalid: true,
};

export const InvalidWithDefaultValue = Template.bind({});
InvalidWithDefaultValue.args = {
  ...Primary.args,
  isInvalid: true,
  defaultValue:
    'A little about the company and the team that you’ll be working with.',
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
  ...Primary.args,
  autoFocus: true,
};

export const InvalidWithAutoFocus = Template.bind({});
InvalidWithAutoFocus.args = {
  ...Invalid.args,
  autoFocus: true,
};
