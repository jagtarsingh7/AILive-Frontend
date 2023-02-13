import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const sizeHelper = (size: number | string, ring: string) =>
  defineStyle({
    w: size,
    h: size,
    ring,
  });

const iconSizeMap = {
  xs: '0.625rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
  xl: '1.75rem',
  '2xl': '2.5rem',
} as const;

export type FeaturedCircleIconSize = keyof typeof iconSizeMap;

const baseStyle = defineStyle(({ colorScheme: c, size }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 0,
  flexShrink: 0,
  ring: 6,
  color: `${c}.600`,
  bg: `${c}.100`,
  ringColor: `${c}.50`,
  fontSize: iconSizeMap[size as FeaturedCircleIconSize],
}));

const sizes = {
  xs: sizeHelper(6, '2px'),
  sm: sizeHelper(8, '4px'),
  md: sizeHelper(10, '6px'),
  lg: sizeHelper(12, '8px'),
  xl: sizeHelper(14, '10px'),
  '2xl': sizeHelper(20, '15px'),
};

const FeaturedCircleIconStyles = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    colorScheme: 'primary',
    size: 'md',
  },
});

export default FeaturedCircleIconStyles;
