import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { ThemingProps } from '@chakra-ui/react';

import theme from '../../../theme';

import Button, { sizes } from './Button';
import { CircleIcon } from '@canvass/shared/icons';

export default {
  component: Button,
  title: 'Forms/Buttons/Button',
  argTypes: {
    ...getThemingArgTypes(theme, 'Button'),
    size: {
      options: sizes,
      table: {
        type: {
          summary: sizes.join(' | '),
        },
      },
    },
    leftIcon: {
      control: 'boolean',
    },
    rightIcon: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/button).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1%3A1183',
    },
  },
} as ComponentMeta<typeof Button>;

type StoryProps = typeof Button & ThemingProps<'Button'>;

const Template: ComponentStory<StoryProps> = (args) => {
  const { leftIcon, rightIcon, ...rest } = args;
  return (
    <Button
      leftIcon={leftIcon ? <CircleIcon /> : undefined}
      rightIcon={rightIcon ? <CircleIcon /> : undefined}
      {...rest}
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary button',
  size: 'md',
  colorScheme: 'primary',
  isDisabled: false,
  isLoading: false,
  loadingText: 'Submitting',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  colorScheme: 'gray',
  variant: 'outline',
  children: 'Secondary button',
};

export const Error = Template.bind({});
Error.args = {
  ...Primary.args,
  colorScheme: 'error',
  children: 'Error button',
};

export const SecondaryError = Template.bind({});
SecondaryError.args = {
  ...Error.args,
  variant: 'outline',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Primary.args,
  leftIcon: <CircleIcon />,
  rightIcon: <CircleIcon />,
  children: 'Button with icon',
};
