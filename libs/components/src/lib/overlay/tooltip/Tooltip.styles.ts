import { cssVar } from '@chakra-ui/react';
import type { ComponentStyleConfig } from '@chakra-ui/theme';

const $bg = cssVar('tooltip-bg');
const $arrowBg = cssVar('popper-arrow-bg');

const lightVariant = {
  [$bg.variable]: 'colors.white',
  [$arrowBg.variable]: $bg.reference,
  borderColor: 'gray.100',
  color: 'gray.700',
};

const darkVariant = {
  color: 'white',
  [$bg.variable]: 'colors.gray.900',
  [$arrowBg.variable]: $bg.reference,
};

export const tooltipVariants = {
  light: lightVariant,
  dark: darkVariant,
};

export type TooltipVariants = keyof typeof tooltipVariants;

const TooltipStyles: ComponentStyleConfig = {
  baseStyle: {
    px: '3',
    py: '2',
    borderRadius: 'lg',
    boxShadow: 'lg',
    fontSize: 'xs',
  },
  sizes: {},
  variants: tooltipVariants,
  defaultProps: {
    variant: 'light',
  },
};

export default TooltipStyles;
