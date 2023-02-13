import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { ThemingProps } from '@chakra-ui/react';
import { AlertCircleIcon } from '@canvass/shared/icons';

import theme from '../../../../theme';
import { FeaturedCircleIcon } from './FeaturedCircleIcon';

export default {
  component: FeaturedCircleIcon,
  title: 'Layout/Featured Icons/Circle',
  argTypes: {
    ...getThemingArgTypes(theme, 'FeaturedCircleIcon' as any),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1102%3A5338',
    },
  },
} as ComponentMeta<typeof FeaturedCircleIcon>;

type StoryProps = typeof FeaturedCircleIcon & ThemingProps<'FeaturedIcon'>;

const Template: ComponentStory<StoryProps> = (args) => (
  <FeaturedCircleIcon {...args} icon={<AlertCircleIcon />} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'md',
  colorScheme: 'primary',
};
