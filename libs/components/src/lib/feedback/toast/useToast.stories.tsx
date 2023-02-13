import { ComponentMeta } from '@storybook/react';
import { ToastProvider, UseToastOptions } from '@chakra-ui/react';

import useToast from './useToast';

import Button from '../../forms/button/Button';

export default {
  component: Button,
  title: 'Feedback/Toast',
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['info', 'success', 'warning', 'error', 'loading'],
      },
    },
    position: {
      control: {
        type: 'inline-radio',
        options: [
          'top',
          'top-left',
          'top-right',
          'bottom',
          'bottom-left',
          'bottom-right',
          'top-start',
          'top-end',
          'bottom-start',
          'bottom-end',
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/Toast).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1130%3A81134',
    },
  },
} as ComponentMeta<typeof Button>;

const Template = (args: UseToastOptions) => {
  const toast = useToast();
  return <Button onClick={() => toast({ ...args })}>Toast test</Button>;
};

export const Primary = Template.bind({}) as any;

Primary.args = {
  title: 'Successfully Updated the application status!',
  description: '',
  status: 'success',
  position: 'top',
  isClosable: true,
  duration: 5000,
};
