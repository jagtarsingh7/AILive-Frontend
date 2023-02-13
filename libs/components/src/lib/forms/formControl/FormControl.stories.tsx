import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { Textarea, ThemingProps } from '@chakra-ui/react';
import { QuestionOutlineIcon, EmailIcon, WarningIcon } from '@chakra-ui/icons';

import theme from '../../../theme';
import Input from '../input/Input';
import Select from '../select/Select';
import FormControl from './FormControl';

export default {
  component: FormControl,
  title: 'Forms/Form Control',
  argTypes: {
    ...getThemingArgTypes(theme, 'Form'),
    isInvalid: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/FormControl).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=3307%3A417515',
    },
  },
} as ComponentMeta<typeof FormControl>;

type StoryProps = typeof FormControl & ThemingProps<'FormControl'>;

const WithInputTemplate: ComponentStory<StoryProps> = (args) => {
  const { isInvalid } = args;
  return (
    <FormControl {...args}>
      <FormControl.Label>Email</FormControl.Label>
      <Input type="email" placeholder="olivia@canvass.io" />
      {!isInvalid ? (
        <FormControl.HelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormControl.HelperText>
      ) : (
        <FormControl.ErrorMessage>Email is required.</FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export const WithInput = WithInputTemplate.bind({
  isInvalid: false,
  isDisabled: false,
});

const InputGroupTemplate: ComponentStory<StoryProps> = (args) => {
  const { isDisabled, isInvalid } = args;
  return (
    <FormControl isInvalid={isInvalid} isDisabled={isDisabled}>
      <FormControl.Label>Description</FormControl.Label>
      <Input.Group>
        <Input.LeftElement
          pointerEvents="none"
          children={<EmailIcon color="gray.300" />}
        />
        <Input placeholder="email@email.com" />
        <Input.RightElement pointerEvents="none">
          {!isInvalid ? (
            <QuestionOutlineIcon color="gray.300" />
          ) : (
            <WarningIcon color="error.500" />
          )}
        </Input.RightElement>
      </Input.Group>
      {!isInvalid ? (
        <FormControl.HelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormControl.HelperText>
      ) : (
        <FormControl.ErrorMessage>Email is required.</FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export const WithInputGroup = InputGroupTemplate.bind({
  isInvalid: false,
  isDisabled: false,
});

const TextAreaTemplate: ComponentStory<StoryProps> = (args) => {
  const { isInvalid } = args;
  return (
    <FormControl {...args}>
      <FormControl.Label>Description</FormControl.Label>
      <Textarea value="A little about the company and the team that you’ll be working with." />
      {!isInvalid ? (
        <FormControl.HelperText>
          This is a hint text to help user.
        </FormControl.HelperText>
      ) : (
        <FormControl.ErrorMessage>
          This is an error message.
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export const WithTextArea = TextAreaTemplate.bind({
  isInvalid: false,
  isDisabled: false,
});

const SelectTemplate: ComponentStory<StoryProps> = (args) => {
  const { isInvalid } = args;
  return (
    <FormControl {...args}>
      <FormControl.Label>Description</FormControl.Label>
      <Select placeholder="Select an option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      {!isInvalid ? (
        <FormControl.HelperText>
          This is a hint text to help user.
        </FormControl.HelperText>
      ) : (
        <FormControl.ErrorMessage>
          This is an error message.
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export const WithSelect = SelectTemplate.bind({
  isInvalid: false,
  isDisabled: false,
});
