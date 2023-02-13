import { tagAnatomy } from '@chakra-ui/anatomy';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const parts = [...tagAnatomy.keys, 'count'];

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts);

const baseStyleContainer = defineStyle({
  borderRadius: 'md',
});

const baseStyleLabel = defineStyle({
  lineHeight: 5,
  fontWeight: 'medium',
});

const baseCount = {
  bg: 'gray.100',
  h: 5,
  minW: 5,
  marginStart: '1.5',
  marginEnd: '-1',
  borderRadius: 'base',
  px: 0.5,
};

const baseStyle = definePartsStyle({
  container: baseStyleContainer,
  label: baseStyleLabel,
  count: baseCount,
});

const sizes = {
  sm: definePartsStyle({
    container: {
      px: 2,
      py: 1,
    },
    label: {
      fontSize: 'xs',
    },
    closeButton: {
      px: 0.5,
    },
    count: {
      marginEnd: '-2px',
      marginStart: '0.35rem',
    },
  }),
  md: definePartsStyle({
    container: {
      px: 2.5,
      py: 0.5,
    },
    label: {
      fontSize: 'sm',
    },
    closeButton: {
      px: 0.5,
    },
  }),
  lg: definePartsStyle({
    container: {
      px: 2.5,
      py: 1,
    },
    label: {
      fontSize: 'sm',
    },
    closeButton: {
      px: 1,
    },
    count: {
      px: 1,
    },
  }),
};

const variants = {
  outline: definePartsStyle((props: StyleFunctionProps) =>
    variantOutline(props)
  ),
};

function variantOutline(props: StyleFunctionProps) {
  const { colorScheme: c } = props;
  return {
    container: {
      color: `${c}.700`,
      border: '1px',
      boxShadow: 'none',
      borderColor: `${c}.300`,
      background: 'white',
    },
    label: {
      fontStyle: 'normal',
      color: `${c}.700`,
    },
    closeButton: {
      color: `${c}.400`,
      _hover: {
        color: `${c}.500`,
        background: `${c}.100`,
        borderRadius: '3px',
      },
    },
  };
}

const TagStyles = defineMultiStyleConfig({
  variants,
  baseStyle,
  sizes,
  defaultProps: {
    size: 'lg',
    variant: 'outline',
    colorScheme: 'gray',
  },
});

export default TagStyles;
