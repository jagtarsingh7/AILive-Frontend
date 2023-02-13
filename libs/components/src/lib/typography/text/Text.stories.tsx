import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemingProps } from '@chakra-ui/react';
import { fontSizes, fontWeights } from '@canvass/foundations';

import Text from './Text';

export default {
  component: Text,
  title: 'Typography/Text',
  argTypes: {
    fontSize: {
      control: 'radio',
      options: fontSizes,
      table: {
        type: {
          summary: fontSizes.join(' | '),
        },
        defaultValue: { summary: 'md' },
      },
    },
    fontWeight: {
      control: 'radio',
      options: fontWeights,
      table: {
        type: {
          summary: fontWeights.join(' | '),
        },
        defaultValue: { summary: 'normal' },
      },
    },
    as: {
      control: 'select',
      options: ['span', 'p', 'b', 's', 'i', 'u', 'mark'],
      description:
        'More info about the `as` can be found ' +
        '[here](https://chakra-ui.com/docs/components/text#override-the-element). ' +
        'This prop override the html element, example: `as={i}` will transform the element into italic ' +
        '`<i></i>`',
      table: {
        type: {
          summary: 'As<HtmlElement>',
        },
        defaultValue: { summary: 'p' },
      },
    },
    noOfLines: {
      control: 'text',
      description:
        "If you'd like to truncate the text after a specific number of lines, pass the `noOfLines` prop. " +
        'This will render an ellipsis when the text exceeds the width of the viewport or `maxWidth` prop. ' +
        'More information [here](https://chakra-ui.com/docs/components/text#truncate-text).',
    },
    width: { control: 'text' },
    color: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on ' +
          '[Chakra Docs](https://chakra-ui.com/docs/components/text). ',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=18%3A1951',
    },
  },
} as ComponentMeta<typeof Text>;

type StoryProps = typeof Text & ThemingProps<'Text'>;

const Template: ComponentStory<StoryProps> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary Text',
  fontSize: 'md',
  as: 'p',
};
