import { ComponentStory, ComponentMeta } from '@storybook/react';
import { fontSizes, fontWeights } from '@canvass/foundations';

import Heading from './Heading';

type HeadingType = typeof Heading;

export default {
  component: Heading,
  title: 'Typography/Heading',
  argTypes: {
    fontSize: {
      control: 'radio',
      options: fontSizes,
      table: {
        type: {
          summary: fontSizes.join(' | '),
        },
        defaultValue: { summary: '2xl' },
      },
    },
    fontWeight: {
      control: 'radio',
      options: fontWeights,
      table: {
        type: {
          summary: fontWeights.join(' | '),
        },
        defaultValue: { summary: 'bold' },
      },
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description:
        'This prop override the html element, example: `as={h5}` will transform the element into heading 5 ' +
        '`<h5></h5>`. The options available are:',
      table: {
        defaultValue: { summary: 'h2' },
      },
    },
    noOfLines: {
      control: 'text',
      description:
        "If you'd like to truncate the heading after a specific number of lines, pass the `noOfLines` prop. " +
        'This will render an ellipsis when the heading exceeds the width of the viewport or `maxWidth` prop. ' +
        'More information [here](https://chakra-ui.com/docs/components/heading#truncate-heading).',
    },
    color: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on ' +
          '[Chakra Docs](https://chakra-ui.com/docs/components/heading). ' +
          'Heading is very similar to `Text` but it should be used just for headings.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=18%3A1951',
    },
  },
} as ComponentMeta<HeadingType>;

const Template: ComponentStory<HeadingType> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary Heading',
  as: 'h2',
};
