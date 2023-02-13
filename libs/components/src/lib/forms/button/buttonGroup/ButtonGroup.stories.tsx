import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemingProps } from '@chakra-ui/react';

import ButtonStory from '../Button.stories';

import ButtonGroup from './ButtonGroup';
import Button from '../Button';
import IconButton from '../iconButton/IconButton';
import { CircleIcon } from '@canvass/shared/icons';
import { noop } from '@canvass/shared/utils';

const { rightIcon, leftIcon, ...sharedArgTypes } = ButtonStory.argTypes ?? {};

export default {
  ...ButtonStory,
  title: 'Forms/Buttons/Button Group',
  component: ButtonGroup,
  argTypes: {
    ...sharedArgTypes,
  },
  parameters: {
    ...ButtonStory.parameters,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=16%3A399',
    },
  },
} as ComponentMeta<typeof ButtonGroup>;

type StoryProps = typeof ButtonGroup & ThemingProps<'Button'>;

const Template: ComponentStory<StoryProps> = (args) => (
  <ButtonGroup {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  children: (
    <>
      <Button variant="outline" colorScheme="gray" onClick={noop}>
        Close
      </Button>
      <Button onClick={noop}>Save</Button>
    </>
  ),
  colorScheme: 'primary',
  size: 'md',
  isDisabled: false,
  isAttached: false,
  spacing: '4',
};

export const AttachedIcons = Template.bind({});
AttachedIcons.args = {
  ...Primary.args,
  children: (
    <>
      <IconButton
        onClick={noop}
        aria-label="Button icon 1"
        icon={<CircleIcon />}
      />
      <IconButton
        onClick={noop}
        aria-label="Button icon 2"
        icon={<CircleIcon />}
      />
      <IconButton
        onClick={noop}
        aria-label="Button icon 3"
        icon={<CircleIcon />}
      />
      <IconButton
        onClick={noop}
        aria-label="Button icon 4"
        icon={<CircleIcon />}
      />
    </>
  ),
  colorScheme: 'gray',
  variant: 'outline',
  isAttached: true,
};

export const AttachedButtons = Template.bind({});
AttachedButtons.args = {
  ...AttachedIcons.args,
  children: (
    <>
      <Button onClick={noop}>Button</Button>
      <Button onClick={noop} leftIcon={<CircleIcon />}>
        Button 1
      </Button>
      <Button
        onClick={noop}
        leftIcon={<CircleIcon />}
        rightIcon={<CircleIcon />}
      >
        Button 2 With icon
      </Button>
      <Button onClick={noop} rightIcon={<CircleIcon />}>
        Button 3
      </Button>
      <Button onClick={noop}>Button 4</Button>
    </>
  ),
};
