import { menuAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleItem = defineStyle({
  fontWeight: 'normal',
  lineHeight: '5',
  color: 'gray.700',
  py: '2.5',
  px: '4',
  bg: 'white',
  _focus: {
    bg: 'gray.50',
    color: 'gray.700',
  },
  _disabled: {
    color: 'gray.300',
  },
  _hover: {
    bg: 'gray.50',
  },
});

const baseStyleCommand = defineStyle({
  color: 'gray.500',
});

const baseStyleDivider = defineStyle({
  borderColor: 'gray.200',
});
const baseStyle = definePartsStyle({
  item: baseStyleItem,
  command: baseStyleCommand,
  divider: baseStyleDivider,
});

const DropdownMenuStyles = defineMultiStyleConfig({
  baseStyle,
});

export default DropdownMenuStyles;

export const menuOptionIconStyle = {
  '.chakra-menu__icon-wrapper': { color: 'primary.600' },
};
