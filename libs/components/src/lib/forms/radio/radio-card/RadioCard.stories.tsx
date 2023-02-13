import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemingProps } from '@chakra-ui/react';

import RadioCard from './RadioCard';
import Text from '../../../typography/text/Text';
import { Stack, useRadioGroup } from '@chakra-ui/react';

export default {
  component: RadioCard,
  title: 'Forms/Radio/RadioCard',
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
} as ComponentMeta<typeof RadioCard>;

type StoryProps = typeof RadioCard & ThemingProps<'RadioCard'>;

const Template: ComponentStory<StoryProps> = (args) => {
  return <RadioCard {...args} />;
};

const radioCardData = [
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

const RadioCardGroupTemplate: ComponentStory<StoryProps> = (args) => {
  const { value, getRadioProps } = useRadioGroup({
    defaultValue: 'Basic',
  });

  return (
    <Stack>
      <Text>The selected radio option is: {value}</Text>
      {radioCardData.map((data) => (
        <RadioCard
          key={data.value}
          {...getRadioProps({ value: `${data.value}` })}
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
  subTitle: '$15 per month',
  description: 'This is the basic plan',
  isDisabled: false,
};

export const Group = RadioCardGroupTemplate.bind({});
Group.args = {};
