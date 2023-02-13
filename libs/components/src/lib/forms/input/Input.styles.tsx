import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  field: {
    boxShadow: 'xs',
  },
});

const size = {
  sm: defineStyle({
    fontSize: 'md',
    px: 3,
    h: 10,
    borderRadius: 'lg',
  }),
  md: defineStyle({
    fontSize: 'md',
    px: 3.5,
    h: '2.75rem', // 44px
    borderRadius: 'lg',
  }),
};

export const sizes = {
  sm: definePartsStyle({
    field: size.sm,
    addon: size.sm,
  }),
  md: definePartsStyle({
    field: size.md,
    addon: size.md,
  }),
};

export const focusBorder = defineStyle({
  borderColor: 'primary.300',
  boxShadow: '0px 0px 0px 4px var(--chakra-colors-primary-100)',
});

export const fieldFocusVisibleStyles = defineStyle({
  _focusVisible: {
    color: 'gray.900',
    ...focusBorder,
  },
});

export const invalidFocusBorder = defineStyle({
  borderColor: 'error.300',
  boxShadow: '0px 0px 0px 4px var(--chakra-colors-error-100)',
});

export const fieldInvalidStyles = defineStyle({
  _invalid: {
    boxShadow: 'none',
    borderColor: 'error.300',
    _focusVisible: invalidFocusBorder,
  },
});

const variantOutline = definePartsStyle({
  field: {
    color: 'gray.500',
    borderColor: 'gray.200',
    bg: 'white',
    _hover: {
      color: 'gray.900',
      borderColor: 'gray.200',
    },
    _disabled: {
      bg: 'gray.50',
      opacity: 1,
      borderColor: 'gray.200',
      _hover: {
        color: 'gray.500',
      },
    },
    _placeholder: {
      color: 'gray.500',
    },
    ...fieldFocusVisibleStyles,
    ...fieldInvalidStyles,
  },
});

const InputStyles = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: {
    outline: variantOutline,
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
    colorScheme: 'gray',
  },
});

export default InputStyles;
