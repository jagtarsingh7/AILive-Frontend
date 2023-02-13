import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemingProps } from '@chakra-ui/react';

import IconButton from './IconButton';
import { CircleIcon } from '@canvass/shared/icons';

import ButtonStory from '../Button.stories';
const { leftIcon, rightIcon, ...sharedArgTypes } = ButtonStory.argTypes ?? {};

export default {
  component: IconButton,
  title: 'Forms/Buttons/Icon Button',
  argTypes: {
    ...sharedArgTypes,
  },
  parameters: {
    ...ButtonStory.parameters,
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/icon-button).',
      },
    },
  },
} as ComponentMeta<typeof IconButton>;

type StoryProps = typeof IconButton & ThemingProps<'IconButton'>;

const Template: ComponentStory<StoryProps> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  icon: <CircleIcon />,
  'aria-label': 'Describe button for better accessibility',
  colorScheme: 'primary',
  size: 'md',
  isDisabled: false,
  isLoading: false,
  isRound: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  colorScheme: 'gray',
  variant: 'outline',
};

export const Error = Template.bind({});
Error.args = {
  ...Primary.args,
  colorScheme: 'error',
};
