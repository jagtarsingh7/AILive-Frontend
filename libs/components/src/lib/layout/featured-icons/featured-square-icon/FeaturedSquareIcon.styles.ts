import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const sizeHelper = (size: number | string, borderRadius: string) =>
  defineStyle({
    w: size,
    h: size,
    borderRadius,
  });

const iconSizeMap = {
  xs: '0.625rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
  xl: '1.75rem',
} as const;

export type FeaturedSquareIconSize = keyof typeof iconSizeMap;

const baseStyle = defineStyle((props) => {
  const { size } = props;
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flexShrink: 0,
    fontSize: iconSizeMap[size as FeaturedSquareIconSize],
  };
});

const sizes = {
  xs: sizeHelper(6, '4px'),
  sm: sizeHelper(8, '6px'),
  md: sizeHelper(10, '8px'),
  lg: sizeHelper(12, '10px'),
  xl: sizeHelper(14, '12px'),
};

const lightVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    color: c === 'gray' ? `${c}.500` : `${c}.600`,
    bg: c === 'gray' ? `${c}.50` : `${c}.100`,
  };
});

const midVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    color: 'white',
    bg: `${c}.500`,
  };
});

const darkVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    color: 'white',
    bg: `${c}.800`,
  };
});

const variants = {
  light: lightVariant,
  mid: midVariant,
  dark: darkVariant,
};

const FeaturedSquareIconStyles = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    colorScheme: 'primary',
    size: 'md',
    variant: 'light',
  },
});

export default FeaturedSquareIconStyles;
