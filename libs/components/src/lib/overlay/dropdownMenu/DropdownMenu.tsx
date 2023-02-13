import {
  Menu,
  MenuProps,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  MenuItemOptionProps,
  forwardRef,
} from '@chakra-ui/react';

import { menuOptionIconStyle } from './DropdownMenu.styles';

const DropdownMenu = (props: MenuProps) => {
  return <Menu {...props} />;
};

const DropdownMenuOptionGroupItemOption = forwardRef<
  MenuItemOptionProps,
  'button'
>((props, ref) => {
  return <MenuItemOption sx={menuOptionIconStyle} ref={ref} {...props} />;
});

DropdownMenu.Button = MenuButton;
DropdownMenu.Button.displayName = 'DropdownMenu.Button';

DropdownMenu.List = MenuList;
DropdownMenu.List.displayName = 'DropdownMenu.List';

DropdownMenu.Item = MenuItem;
DropdownMenu.Item.displayName = 'DropdownMenu.Item';

DropdownMenu.Group = MenuGroup;
DropdownMenu.Group.displayName = 'DropdownMenu.Group';

DropdownMenu.Divider = MenuDivider;
DropdownMenu.Divider.displayName = 'DropdownMenu.Divider';

DropdownMenu.OptionGroup = MenuOptionGroup;
DropdownMenu.OptionGroup.displayName = 'DropdownMenu.OptionGroup';

DropdownMenu.OptionGroupItem = DropdownMenuOptionGroupItemOption;
DropdownMenu.OptionGroupItem.displayName = 'DropdownMenu.OptionGroupItem';
DropdownMenu.OptionGroupItem.id = 'MenuItemOption';

export default DropdownMenu;
