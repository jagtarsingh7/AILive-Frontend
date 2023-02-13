import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loading, loadingSizes } from './Loading';

export default {
  component: Loading,
  title: 'Feedback/Loading',
  argTypes: {
    size: {
      options: loadingSizes,
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1192%3A610',
    },
  },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'md',
};
