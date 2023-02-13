import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { Button, ThemingProps } from '@chakra-ui/react';

import theme from '../../../theme';

import Alert from './Alert';

export default {
  component: Alert,
  title: 'Feedback/Alert',
  ...getThemingArgTypes(theme, 'Alert'),
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['info', 'success', 'warning', 'error', 'loading'],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/alert).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1130%3A81134',
    },
  },
} as ComponentMeta<typeof Alert>;

type StoryProps = typeof Alert & ThemingProps<'Alert'>;

const ctaElement = (
  <Button onClick={() => alert('clicked')} variant="link">
    New Project
  </Button>
);

const Template: ComponentStory<StoryProps> = (args) => {
  const { ...rest } = args;

  return <Alert ctaElement={ctaElement} {...rest} />;
};

export const Primary = Template.bind({});

Primary.args = {
  title: 'We’ve just released a new feature',
  description: 'This is a short description',
  status: 'success',
};
