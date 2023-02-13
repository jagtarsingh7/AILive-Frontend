import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import { ThemingProps } from '@chakra-ui/react';
import Tabs from './Tabs';
import { tabsVariants, tabSizes } from './Tabs.styles';
import theme from '../../../theme';
import { InfoOutlineIcon, CalendarIcon, TimeIcon } from '@chakra-ui/icons';

export default {
  component: Tabs,
  title: 'Navigation/Tabs',
  argTypes: {
    ...getThemingArgTypes(theme, 'Tabs'),
    variant: {
      options: Object.keys(tabsVariants),
      control: {
        type: 'inline-radio',
      },
      table: {
        type: {
          summary: Object.keys(tabsVariants),
        },
      },
    },
    size: {
      options: Object.keys(tabSizes),
      control: {
        type: 'inline-radio',
      },
      table: {
        type: {
          summary: Object.keys(tabSizes),
        },
        defaultValue: { summary: Object.keys(tabSizes) },
      },
    },
    colorScheme: {
      options: ['primary'],
      control: {
        type: 'inline-radio',
      },
      table: {
        type: {
          summary: 'primary',
        },
        defaultValue: { summary: 'primary' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/Tabs).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=43%3A0',
    },
  },
} as ComponentMeta<typeof Tabs>;

type StoryProps = typeof Tabs & ThemingProps<'Tabs'>;

const Template: ComponentStory<StoryProps> = (args) => {
  return (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab>My Details</Tabs.Tab>
        <Tabs.Tab>Password</Tabs.Tab>
        <Tabs.Tab>Profile</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>
          <p>My details!</p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p>Password!</p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p>Profile!</p>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  isFitted: false,
  size: 'sm',
  colorScheme: 'primary',
  variant: 'underline',
};

const IconTemplate: ComponentStory<StoryProps> = (args) => {
  return (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.TabWithIcons icon={<CalendarIcon />} description="My Details" />
        <Tabs.TabWithIcons icon={<InfoOutlineIcon />} description="Profile" />
        <Tabs.TabWithIcons icon={<TimeIcon />} description="Password" />
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>
          <p>My details!</p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p>Profile!</p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p>Password!</p>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};

export const WithIcons = IconTemplate.bind({});

WithIcons.args = {
  ...Primary.args,
  variant: 'button',
};

const CountTemplate: ComponentStory<StoryProps> = (args) => {
  return (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab>
          My Details
          <Tabs.Badge>1</Tabs.Badge>
        </Tabs.Tab>
        <Tabs.Tab>
          Other Details
          <Tabs.Badge>11</Tabs.Badge>
        </Tabs.Tab>
        <Tabs.TabWithIcons
          icon={<CalendarIcon />}
          description="Password"
          count={5}
        />
        <Tabs.TabWithIcons
          icon={<CalendarIcon />}
          description="Profile"
          count={6}
        />
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>
          <p>My details!</p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p>Other details!</p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p>Password!</p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p>Profile!</p>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};

export const WithCount = CountTemplate.bind({});

WithCount.args = {
  ...Primary.args,
};
