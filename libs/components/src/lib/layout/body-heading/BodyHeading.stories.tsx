import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '@chakra-ui/react';

import BodyHeading from './BodyHeading';
import Tag from '../../data-display/tag/Tag';

export default {
  component: BodyHeading,
  title: 'Layout/Body Heading',
  decorators: [
    (Story) => (
      <Container maxW="8xl">
        <Story />
      </Container>
    ),
  ],
} as ComponentMeta<typeof BodyHeading>;

type StoryProps = typeof BodyHeading;

const Template: ComponentStory<StoryProps> = (args) => (
  <BodyHeading {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Experiments',
  displayElement: <Tag.Count count={4} />,
};
