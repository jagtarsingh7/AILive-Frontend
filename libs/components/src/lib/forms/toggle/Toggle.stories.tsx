import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { ThemingProps } from '@chakra-ui/react';

import theme from '../../../theme';

import Toggle, { ToggleSizes } from './Toggle';

export default {
  component: Toggle,
  title: 'Forms/Toggle',
  argTypes: {
    ...getThemingArgTypes(theme, 'Switch'),
    size: {
      control: 'radio',
      options: ToggleSizes,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/toggle).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1102%3A4208',
    },
  },
} as ComponentMeta<typeof Toggle>;

type StoryProps = typeof Toggle & ThemingProps<'Toggle'>;

const Template: ComponentStory<StoryProps> = (args) => {
  return <Toggle {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  size: 'sm',
};
