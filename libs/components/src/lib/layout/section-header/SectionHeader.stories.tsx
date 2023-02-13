import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import { Container } from '@chakra-ui/react';

import SectionHeader from './SectionHeader';
import Button from '../../forms/button/Button';

export default {
  component: SectionHeader,
  title: 'Layout/Section Header',
  decorators: [
    (Story) => (
      <Container maxW="8xl">
        <Story />
      </Container>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1102%3A5338',
    },
  },
} as ComponentMeta<typeof SectionHeader>;

type StoryProps = typeof SectionHeader;

const Template: ComponentStory<StoryProps> = (args) => (
  <SectionHeader {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Projects',
  subtitle: 'All your projects are listed here',
  actionElement: (
    <Button
      onClick={() => {
        alert('click');
      }}
      leftIcon={<SmallAddIcon />}
    >
      New project
    </Button>
  ),
};
