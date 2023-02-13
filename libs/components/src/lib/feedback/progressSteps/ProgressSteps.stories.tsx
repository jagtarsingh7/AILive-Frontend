import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '@chakra-ui/react';

import Text from '../../typography/text/Text';
import { ProgressSteps } from './ProgressSteps';

const Story: ComponentMeta<typeof ProgressSteps> = {
  component: ProgressSteps,
  title: 'Feedback/Progress Steps',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1141%3A76669&t=TqAeOpXAokdoz5ag-0',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof ProgressSteps> = (args) => (
  <ProgressSteps {...args} />
);

const content = (
  <Flex py={4}>
    <Text p={1}>Body of the step.</Text>
  </Flex>
);

export const Primary = Template.bind({});
Primary.args = {
  steps: [
    {
      label: 'Your details',
      content,
    },
    {
      label: 'Company details',
      content,
    },
    {
      label: 'Invite your team',
      content,
    },
  ],
};

export const StepsWithDescription = Template.bind({});
StepsWithDescription.args = {
  ...Primary.args,
  steps: [
    {
      label: 'Your details',
      description: 'Please provide your name and email',
      content,
    },
    {
      label: 'Company details',
      description: 'A few details about your company',
      content,
    },
    {
      label: 'Invite your team',
      description: 'Start collaborating with your team',
      content,
    },
  ],
};

export const StepsWithReset = Template.bind({});
StepsWithReset.args = {
  ...Primary.args,
  resetStepLabel: 'Reset',
};
