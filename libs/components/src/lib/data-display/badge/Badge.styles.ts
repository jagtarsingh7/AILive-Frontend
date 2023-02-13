import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  textTransform: 'none',
  borderRadius: '2xl',
  fontWeight: 'medium',
  display: 'inline-flex',
  alignItems: 'center',
});

const variantSubtle = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    bg: `${c}.50`,
    color: `${c}.700`,
  };
});

const variantSquare = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    bg: `${c}.50`,
    color: `${c}.700`,
    borderRadius: 'base',
  };
});

const variants = {
  subtle: variantSubtle,
  square: variantSquare,
};

const sizes = {
  sm: {
    px: 2,
    py: 0.5,
    fontSize: 'xs',
    lineHeight: 4,
  },
  md: {
    px: 2.5,
    py: 0.5,
    fontSize: 'sm',
    lineHeight: 5,
  },
  lg: {
    px: 3,
    py: 1,
    fontSize: 'sm',
    lineHeight: 5,
  },
};

const BadgeStyles = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'subtle',
    size: 'md',
  },
});

export default BadgeStyles;
