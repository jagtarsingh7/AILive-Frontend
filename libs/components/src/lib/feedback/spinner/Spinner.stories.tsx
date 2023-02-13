import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner, spinnerSizes } from './Spinner';

export default {
  component: Spinner,
  title: 'Feedback/Spinner',
  argTypes: {
    size: {
      options: spinnerSizes,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/Spinner).',
      },
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'md',
};
