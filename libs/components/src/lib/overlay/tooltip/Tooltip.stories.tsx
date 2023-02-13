import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center, ThemingProps } from '@chakra-ui/react';

import Tooltip from './Tooltip';
import { tooltipVariants } from './Tooltip.styles';
import Text from '../../typography/text/Text';

export default {
  component: Tooltip,
  title: 'Overlay/Tooltip',
  argTypes: {
    variant: {
      options: Object.keys(tooltipVariants),
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on ' +
          '[Chakra Docs](https://chakra-ui.com/docs/components/tooltip). ',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1538%3A270360',
    },
  },
} as ComponentMeta<typeof Tooltip>;

type StoryProps = typeof Tooltip & ThemingProps<'Tooltip'>;

const Template: ComponentStory<StoryProps> = (args) => (
  <Center h="20">
    <Tooltip {...args} />
  </Center>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'Hover over me',
  label: 'This is a tooltip',
};

export const MultiLine = Template.bind({});

MultiLine.args = {
  children: 'Hover over me',
  label: (
    <>
      <Text pb="2" fontWeight="semibold">
        This is a tooltip
      </Text>
      <Text>
        Tooltips are used to describe or identify an element. In most scenarios,
        tooltips help the user understand the meaning, function or alt-text of
        an element.
      </Text>
    </>
  ),
};
