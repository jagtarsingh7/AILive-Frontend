import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { ThemingProps } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Tag from './Tag';
import theme from '../../../theme';

export default {
  component: Tag,
  title: 'Data display/Tag',
  argTypes: {
    ...getThemingArgTypes(theme, 'Tag'),
    variant: {
      controls: 'radio',
      options: ['outline'],
      table: {
        type: {
          summary: 'outline',
        },
        defaultValue: { summary: 'outline' },
      },
    },
    colorScheme: {
      controls: 'radio',
      options: ['gray'],
      table: {
        type: {
          summary: 'gray',
        },
        defaultValue: { summary: 'gray' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/Tag).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=3307%3A417515',
    },
  },
} as ComponentMeta<typeof Tag>;

type StoryProps = typeof Tag & ThemingProps<'Tag'>;

const Template: ComponentStory<StoryProps> = (args) => {
  const { children, ...rest } = args;
  return <Tag {...rest}>{children}</Tag>;
};

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary',
};

const CloseButtonTemplate: ComponentStory<StoryProps> = (args) => {
  const { children, ...rest } = args;
  return (
    <Tag {...rest}>
      <Tag.Label>{children}</Tag.Label>
      <Tag.CloseButton />
    </Tag>
  );
};

export const WithCloseIcon = CloseButtonTemplate.bind({});
WithCloseIcon.args = {
  children: 'With close icon',
};

const CountTemplate: ComponentStory<StoryProps> = (args) => {
  const { children, ...rest } = args;
  return (
    <Tag {...rest}>
      Tag With Count
      <Tag.Count count={100} />
    </Tag>
  );
};

export const WithCount = CountTemplate.bind({});
WithCount.args = {
  children: 'With Count',
};

const LeftIconTemplate: ComponentStory<StoryProps> = (args) => {
  const { children, ...rest } = args;
  return (
    <Tag {...rest}>
      <Tag.LeftIcon boxSize="3" as={AddIcon} />
      <Tag.Label>{children}</Tag.Label>
    </Tag>
  );
};

export const WithLeftIcon = LeftIconTemplate.bind({});
WithLeftIcon.args = {
  children: 'Tag with Left Icon',
};

const RightIconTemplate: ComponentStory<StoryProps> = (args) => {
  const { children, ...rest } = args;
  return (
    <Tag {...rest}>
      <Tag.Label>{children}</Tag.Label>
      <Tag.RightIcon boxSize="3" as={AddIcon} />
    </Tag>
  );
};

export const WithRightIcon = RightIconTemplate.bind({});
WithRightIcon.args = {
  children: 'Tag with Right Icon',
};
