import {
  defineStyle,
  createMultiStyleConfigHelpers,
  StyleFunctionProps,
} from '@chakra-ui/styled-system';

import { disabledStyle, hoverStyle } from '../../checkbox/Checkbox.styles';

const parts = ['item', 'label'];

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts);

const baseItemStyle = defineStyle({
  p: 4,
  _hover: {
    borderColor: 'gray.50',
    '.checkbox': hoverStyle({ colorScheme: 'primary' } as StyleFunctionProps),
  },
  _focusVisible: {
    outline: 'none',
    boxShadow: 'none',
  },
  _disabled: {
    bg: 'gray.50',
    borderColor: 'gray.200',
    _hover: {
      borderColor: 'gray.50',
      '.checkbox': disabledStyle,
    },
    cursor: 'not-allowed',
  },
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 3,
  width: '100%',
  height: '100%',
  pl: 6,
  pr: 20,
  minH: 16,
});

const baseLabelStyle = defineStyle({
  fontWeight: 'medium',
  color: 'gray.900',
  _disabled: {
    color: 'gray.900',
  },
  maxW: '4xl',
  noOfLines: 2,
  whiteSpace: 'normal',
});

export const baseStyle = definePartsStyle({
  item: baseItemStyle,
  label: baseLabelStyle,
});

// The styles all RadioTableCard button have in common
const RadioTableCardStyles = defineMultiStyleConfig({
  baseStyle,
});

export default RadioTableCardStyles;
