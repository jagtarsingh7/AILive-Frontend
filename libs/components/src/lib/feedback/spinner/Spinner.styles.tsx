import { defineStyle, cssVar, defineStyleConfig } from '@chakra-ui/react';

const $size = cssVar('spinner-size');

const baseStyle = defineStyle({
  color: 'primary.600',
});

const sizes = {
  xs: defineStyle({
    [$size.variable]: 'sizes.3',
  }),
  sm: defineStyle({
    [$size.variable]: 'sizes.7',
  }),
  md: defineStyle({
    [$size.variable]: 'sizes.12',
  }),
  lg: defineStyle({
    [$size.variable]: 'sizes.14',
  }),
  xl: defineStyle({
    [$size.variable]: 'sizes.16',
  }),
};

const SpinnerStyles = defineStyleConfig({
  baseStyle,
  sizes,
});

export default SpinnerStyles;
