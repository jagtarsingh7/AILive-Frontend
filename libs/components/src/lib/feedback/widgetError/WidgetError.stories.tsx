import { ComponentStory, ComponentMeta } from '@storybook/react';
import WidgetError from './WidgetError';

export default {
  component: WidgetError,
  title: 'Feedback/WidgetError',
} as ComponentMeta<typeof WidgetError>;

const Template: ComponentStory<typeof WidgetError> = (args) => {
  return <WidgetError {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  title: 'Test title',
  description: 'Test description',
  colorScheme: 'error',
};
