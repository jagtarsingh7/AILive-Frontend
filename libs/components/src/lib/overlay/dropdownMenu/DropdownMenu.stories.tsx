import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ThemingProps,
  Image,
  Heading,
  Text,
  IconButton,
  Avatar,
  forwardRef,
} from '@chakra-ui/react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from '@chakra-ui/icons';

import Button, { ButtonProps } from '../../forms/button/Button';
import DropdownMenu from './DropdownMenu';

export default {
  component: DropdownMenu,
  title: 'Data display/Dropdown Menu',
  argTypes: {
    closeOnSelect: {
      type: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/menu).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=3281%3A383083',
    },
  },
} as ComponentMeta<typeof DropdownMenu>;

type StoryProps = typeof DropdownMenu & ThemingProps<'DropdownMenu'>;

const DropdownMenuList = () => (
  <DropdownMenu.List>
    <DropdownMenu.Item>
      <Image
        boxSize="2.5rem"
        borderRadius="full"
        src="https://placekitten.com/100/100"
        mr="12px"
      />
      <span>
        <Heading size="sm" color="gray.700">
          Olivia Rye
        </Heading>
        <Text size="sm" color="gray.500">
          olivia@canvass.io
        </Text>
      </span>
    </DropdownMenu.Item>
    <DropdownMenu.Divider />
    <DropdownMenu.Item icon={<AddIcon />} command="⌘T">
      New Tab
    </DropdownMenu.Item>
    <DropdownMenu.Item icon={<ExternalLinkIcon />} command="⌘N">
      New Window
    </DropdownMenu.Item>
    <DropdownMenu.Item icon={<RepeatIcon />} command="⌘⇧N">
      Open Closed Tab
    </DropdownMenu.Item>
    <DropdownMenu.Item icon={<EditIcon />} command="⌘O">
      Open File...
    </DropdownMenu.Item>
  </DropdownMenu.List>
);

DropdownMenuList.displayName = 'MenuList';

//get button from other component - styling will follow
const WithButtonTemplate: ComponentStory<StoryProps> = (args) => {
  const { closeOnSelect } = args;
  return (
    <DropdownMenu closeOnSelect={closeOnSelect}>
      {({ isOpen }) => (
        <>
          <DropdownMenu.Button
            as={Button}
            variant="outline"
            colorScheme="gray"
            rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          >
            Account
          </DropdownMenu.Button>
          <DropdownMenu.List>
            <DropdownMenu.Item>
              <Image
                boxSize="2.5rem"
                borderRadius="full"
                src="https://placekitten.com/100/100"
                mr="12px"
              />
              <span>
                <Heading size="sm" color="gray.700">
                  Olivia Rye
                </Heading>
                <Text size="sm" color="gray.500">
                  olivia@canvass.io
                </Text>
              </span>
            </DropdownMenu.Item>
            <DropdownMenu.Divider />
            <DropdownMenu.Item icon={<AddIcon />} command="⌘T">
              New Tab
            </DropdownMenu.Item>
            <DropdownMenu.Item icon={<ExternalLinkIcon />} command="⌘N">
              New Window
            </DropdownMenu.Item>
            <DropdownMenu.Item icon={<RepeatIcon />} command="⌘⇧N">
              Open Closed Tab
            </DropdownMenu.Item>
            <DropdownMenu.Item icon={<EditIcon />} command="⌘O">
              Open File...
            </DropdownMenu.Item>
          </DropdownMenu.List>
        </>
      )}
    </DropdownMenu>
  );
};

export const WithButton = WithButtonTemplate.bind({});
WithButton.args = {
  closeOnSelect: true,
};

const WithIconButtonTemplate: ComponentStory<StoryProps> = (args) => {
  const { closeOnSelect } = args;
  return (
    <DropdownMenu closeOnSelect={closeOnSelect}>
      <DropdownMenu.Button
        as={IconButton}
        aria-label="Open menu"
        colorScheme="gray"
        icon={<HamburgerIcon />}
        variant="ghost"
      />

      <DropdownMenuList />
    </DropdownMenu>
  );
};

export const WithIconButton = WithIconButtonTemplate.bind({});
WithIconButton.args = {
  closeOnSelect: true,
};

const ImageButton = forwardRef<ButtonProps, 'button'>((props, ref) => (
  <Button {...props} ref={ref} w="12" h="12" borderRadius="full">
    <Avatar src="https://placekitten.com/100/100" />
  </Button>
));

const WithImageTemplate: ComponentStory<StoryProps> = (args) => {
  const { closeOnSelect } = args;
  return (
    <DropdownMenu closeOnSelect={closeOnSelect}>
      <DropdownMenu.Button as={ImageButton} />
      <DropdownMenuList />
    </DropdownMenu>
  );
};

export const WithImage = WithImageTemplate.bind({});
WithImage.args = {
  closeOnSelect: true,
};

const MenuOptionGroupTemplate: ComponentStory<StoryProps> = (args) => {
  const { closeOnSelect } = args;
  return (
    <DropdownMenu closeOnSelect={closeOnSelect}>
      <DropdownMenu.Button as={Button} variant="outline" colorScheme="gray">
        Menu
      </DropdownMenu.Button>
      <DropdownMenu.List>
        <DropdownMenu.OptionGroup title="Radio Group" type="radio">
          <DropdownMenu.OptionGroupItem value="ascending">
            Ascending
          </DropdownMenu.OptionGroupItem>
          <DropdownMenu.OptionGroupItem value="descending">
            Descending
          </DropdownMenu.OptionGroupItem>
        </DropdownMenu.OptionGroup>
        <DropdownMenu.OptionGroup title="Checkbox Group" type="checkbox">
          <DropdownMenu.OptionGroupItem value="blue">
            Blue
          </DropdownMenu.OptionGroupItem>
          <DropdownMenu.OptionGroupItem value="red">
            Red
          </DropdownMenu.OptionGroupItem>
          <DropdownMenu.OptionGroupItem value="green">
            Green
          </DropdownMenu.OptionGroupItem>
        </DropdownMenu.OptionGroup>
      </DropdownMenu.List>
    </DropdownMenu>
  );
};

export const MenuOptionGroup = MenuOptionGroupTemplate.bind({});
MenuOptionGroup.args = {
  closeOnSelect: false,
};
