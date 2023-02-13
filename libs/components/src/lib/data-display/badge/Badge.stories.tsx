import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { ThemingProps } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Badge from './Badge';
import { FilledCircleIcon } from '@canvass/shared/icons';
import theme from '../../../theme';

export default {
  component: Badge,
  title: 'Data display/Badge',
  argTypes: {
    ...getThemingArgTypes(theme, 'Badge'),
    variant: {
      controls: 'radio',
      options: ['subtle'],
      table: {
        type: {
          summary: 'subtle',
        },
        defaultValue: { summary: 'subtle' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/badge/usage).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=12%3A539',
    },
  },
} as ComponentMeta<typeof Badge>;

type StoryProps = typeof Badge & ThemingProps<'Badge'>;

const Template: ComponentStory<StoryProps> = (args) => {
  const { children, ...rest } = args;
  return <Badge {...rest}>{children}</Badge>;
};

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary',
};

const WithLeftIconTemplate: ComponentStory<StoryProps> = (args) => {
  const { children, ...rest } = args;
  return (
    <Badge {...rest}>
      <Badge.LeftIcon boxSize="1.5" as={FilledCircleIcon} />
      {children}
    </Badge>
  );
};

export const WithLeftIcon = WithLeftIconTemplate.bind({});

WithLeftIcon.args = {
  ...Primary.args,
};

const WithRightIconTemplate: ComponentStory<StoryProps> = (args) => {
  const { children, ...rest } = args;
  return (
    <Badge {...rest}>
      {children}
      <Badge.RightIcon boxSize="1.5" as={AddIcon} />
    </Badge>
  );
};

export const WithRightIcon = WithRightIconTemplate.bind({});

WithRightIcon.args = {
  ...Primary.args,
};

const WithBothIconsTemplate: ComponentStory<StoryProps> = (args) => {
  const { children, ...rest } = args;
  return (
    <Badge {...rest}>
      <Badge.LeftIcon boxSize="1.5" as={FilledCircleIcon} />
      {children}
      <Badge.RightIcon boxSize="1.5" as={AddIcon} />
    </Badge>
  );
};

export const WithBothIcons = WithBothIconsTemplate.bind({});

WithBothIcons.args = {
  ...Primary.args,
};
