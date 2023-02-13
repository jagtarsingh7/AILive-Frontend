import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { ThemingProps } from '@chakra-ui/react';
import ProgressBar, { sizes, colorScheme } from './ProgressBar';
import { labelOptions } from './ProgressBar.styles';
import theme from '../../../theme';

export default {
  component: ProgressBar,
  title: 'Feedback/Progress Bar',
  argTypes: {
    ...getThemingArgTypes(theme, 'Progress'),
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
    labelOption: {
      control: 'inline-radio',
      options: labelOptions,
    },
    size: {
      control: 'radio',
      options: sizes,
    },
    colorScheme: {
      control: 'radio',
      options: colorScheme,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/Progress).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1085%3A57382',
    },
  },
} as ComponentMeta<typeof ProgressBar>;

type StoryProps = typeof ProgressBar & ThemingProps<'ProgressBar'>;

const Template: ComponentStory<StoryProps> = (args) => {
  return <ProgressBar {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  value: 64,
  size: 'md',
  colorScheme: 'primary',
  labelOption: 'none',
};

export const WithRightLabel = Template.bind({});
WithRightLabel.args = {
  ...Primary.args,
  labelOption: 'right',
};

export const WithBottomRightLabel = Template.bind({});
WithBottomRightLabel.args = {
  ...WithRightLabel.args,
  labelOption: 'bottomRight',
};

export const WithIndeterminite = Template.bind({});
WithIndeterminite.args = {
  ...WithRightLabel.args,
  labelOption: 'none',
  isIndeterminate: true,
};
