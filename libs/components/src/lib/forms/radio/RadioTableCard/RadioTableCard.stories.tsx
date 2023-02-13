import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemingProps } from '@chakra-ui/react';

import RadioTableCard from './RadioTableCard';
import Text from '../../../typography/text/Text';
import { Stack, useRadioGroup } from '@chakra-ui/react';

export default {
  component: RadioTableCard,
  title: 'Forms/Radio/RadioTableCard',
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
} as ComponentMeta<typeof RadioTableCard>;

type StoryProps = typeof RadioTableCard & ThemingProps<'RadioTableCard'>;

const Template: ComponentStory<StoryProps> = (args) => {
  return <RadioTableCard {...args} />;
};

const radioTableCardData = [
  {
    value: 'dairy_type',
  },
  {
    value: 'churn_arm_resistance',
  },
  {
    value: 'quality_score',
  },
];

const RadioTableCardGroupTemplate: ComponentStory<StoryProps> = (args) => {
  const { value, getRadioProps } = useRadioGroup({
    defaultValue: 'dairy_type',
  });

  return (
    <Stack>
      <Text>The selected option is: {value}</Text>
      {radioTableCardData.map((data) => (
        <RadioTableCard
          key={data.value}
          {...getRadioProps({ value: `${data.value}` })}
          {...args}
        />
      ))}
    </Stack>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  value: 'dairy_type',
  isDisabled: false,
};

export const Group = RadioTableCardGroupTemplate.bind({});
Group.args = {};
