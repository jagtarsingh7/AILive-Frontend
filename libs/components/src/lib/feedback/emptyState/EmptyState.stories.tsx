import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmptyState from './EmptyState';
import { MessageSmileIcon } from '@canvass/shared/icons';
import Button from '../../forms/button/Button';

export default {
  component: EmptyState,
  title: 'Feedback/Empty State',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/4h9RpSGMK6a3xqrCM7BxPt/Platform-Redesign---Spec-Ready?node-id=92%3A19312',
    },
  },
} as ComponentMeta<typeof EmptyState>;

const ctaElement = (
  <Button onClick={() => alert('clicked')}>New Project</Button>
);

const Template: ComponentStory<typeof EmptyState> = (args) => {
  const { icon, title, description, ctaElement, ...rest } = args;

  return (
    <EmptyState
      title={title}
      description={description}
      ctaElement={ctaElement}
      {...rest}
      icon={icon}
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  title: 'Welcome to the Canvass Platform',
  description: 'To get started, create a new project',
  ctaElement: ctaElement,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Primary.args,
  icon: <MessageSmileIcon />,
};
