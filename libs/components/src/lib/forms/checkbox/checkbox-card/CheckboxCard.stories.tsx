import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemingProps } from '@chakra-ui/react';

import CheckboxCard from './CheckboxCard';
import Text from '../../../typography/text/Text';
import { Stack, useCheckboxGroup } from '@chakra-ui/react';

export default {
  component: CheckboxCard,
  title: 'Forms/Checkbox/CheckboxCard',
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/stack/usage#feature-cards-with-hstack-component).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=122%3A3484',
    },
  },
} as ComponentMeta<typeof CheckboxCard>;

type StoryProps = typeof CheckboxCard & ThemingProps<'CheckboxCard'>;

const Template: ComponentStory<StoryProps> = (args) => {
  return <CheckboxCard {...args} />;
};

const checkboxCardData = [
  {
    value: 'Basic',
    subTitle: '$5 per month',
    description: 'This is the basic plan',
  },
  {
    value: 'Premium',
    subTitle: '$15 per month',
    description: 'This is the premium plan',
  },
  {
    value: 'VIP',
    subTitle: '$35 per month',
    description: 'This is the VIP plan',
  },
];

const CheckboxCardGroupTemplate: ComponentStory<StoryProps> = (args) => {
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ['Basic'],
  });

  return (
    <Stack>
      <Text>The selected checkboxes are: {value.sort().join(' and ')}</Text>
      {checkboxCardData.map((data) => (
        <CheckboxCard
          key={data.value}
          {...getCheckboxProps({ value: `${data.value}` })}
          subTitle={data.subTitle}
          description={data.description}
          {...args}
        />
      ))}
    </Stack>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  value: 'Basic Plan',
  subTitle: '$5 per month',
  description: 'This is the basic plan',
  isDisabled: false,
};

export const Group = CheckboxCardGroupTemplate.bind({});
Group.args = {};
