import {
  defineStyle,
  createMultiStyleConfigHelpers,
  StyleFunctionProps,
} from '@chakra-ui/styled-system';

import { disabledStyle, hoverStyle } from '../Checkbox.styles';

const parts = ['item', 'container', 'control', 'label', 'text'];

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts);

const focusRing = defineStyle({
  outline: 'none',
  ring: 4,
  ringColor: 'primary.100',
});

const baseItemStyle = defineStyle({
  p: 4,
  border: '1px',
  borderRadius: 'lg',
  borderColor: 'gray.200',
  bg: 'white',
  _hover: {
    borderColor: 'primary.300',
    '.checkbox': hoverStyle({ colorScheme: 'primary' } as StyleFunctionProps),
  },
  _focusVisible: {
    borderColor: 'primary.300',
    ...focusRing,
    '.checkbox': {
      ...focusRing,
    },
  },
  _disabled: {
    bg: 'gray.50',
    borderColor: 'gray.200',
    _focusVisible: {
      outline: 'none',
      ring: 0,
      borderColor: 'gray.200',
    },
    _hover: {
      borderColor: 'gray.200',
      '.checkbox': disabledStyle,
    },
    cursor: 'not-allowed',
  },
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: 3,
});

const baseTextStyle = defineStyle({
  color: 'gray.500',
  _disabled: {
    color: 'gray.500',
  },
});

const baseLabelStyle = defineStyle({
  fontWeight: 'medium',
  color: 'gray.700',
  _disabled: {
    color: 'gray.700',
  },
});

export const baseStyle = definePartsStyle({
  item: baseItemStyle,
  text: baseTextStyle,
  label: baseLabelStyle,
});

export const checkedVariant = definePartsStyle({
  item: {
    bg: 'primary.50',
    borderColor: 'primary.600',
    _hover: {
      borderColor: 'primary.600',
    },
    _focusVisible: {
      borderColor: 'primary.600',
      ...focusRing,
    },
  },
  text: {
    color: 'primary.600',
  },
  label: {
    color: 'primary.800',
  },
});

const variants = {
  checked: checkedVariant,
};

// The styles all CheckboxCard button have in common
const CheckboxCardStyles = defineMultiStyleConfig({
  baseStyle,
  variants,
});

export default CheckboxCardStyles;
