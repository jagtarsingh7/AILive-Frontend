import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { ThemingProps } from '@chakra-ui/react';
import Input from './Input';
import theme from '../../../theme';
import { QuestionOutlineIcon, EmailIcon } from '@chakra-ui/icons';
import { sizes } from './Input';

export default {
  component: Input,
  title: 'Forms/Input',
  argTypes: {
    ...getThemingArgTypes(theme, 'Input'),
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
    size: {
      options: sizes,
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/Input).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1090%3A57817',
    },
  },
} as ComponentMeta<typeof Input>;

type StoryProps = typeof Input & ThemingProps<'Input'>;

const Primary: ComponentStory<StoryProps> = (args) => {
  const { size, placeholder, isDisabled, isInvalid } = args;
  return (
    <Input
      type="tel"
      size={size}
      placeholder={placeholder}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
    />
  );
};
export const PrimaryInput = Primary.bind({});
PrimaryInput.args = {
  size: 'md',
  placeholder: 'placeholder text',
};

const IconTemplate: ComponentStory<StoryProps> = (args) => {
  const { size, placeholder, isDisabled, isInvalid } = args;
  return (
    <Input.Group size={size}>
      <Input.LeftElement pointerEvents="none">
        <EmailIcon color="gray.300" />
      </Input.LeftElement>
      <Input
        placeholder={placeholder}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
      />
      <Input.RightElement pointerEvents="none">
        <QuestionOutlineIcon color="gray.300" />
      </Input.RightElement>
    </Input.Group>
  );
};
export const WithIcon = IconTemplate.bind({});
WithIcon.args = {
  placeholder: 'email@email.com',
};
