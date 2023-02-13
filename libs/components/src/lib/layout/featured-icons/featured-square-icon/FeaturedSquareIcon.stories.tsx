import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { ThemingProps } from '@chakra-ui/react';
import { AlertCircleIcon } from '@canvass/shared/icons';

import theme from '../../../../theme';
import { FeaturedSquareIcon } from './FeaturedSquareIcon';

export default {
  component: FeaturedSquareIcon,
  title: 'Layout/Featured Icons/Square',
  argTypes: {
    ...getThemingArgTypes(theme, 'FeaturedSquareIcon' as any),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1102%3A5338',
    },
  },
} as ComponentMeta<typeof FeaturedSquareIcon>;

type StoryProps = typeof FeaturedSquareIcon &
  ThemingProps<'FeaturedSquareIcon'>;

const Template: ComponentStory<StoryProps> = (args) => (
  <FeaturedSquareIcon {...args} icon={<AlertCircleIcon />} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'md',
  colorScheme: 'primary',
  variant: 'light',
};
