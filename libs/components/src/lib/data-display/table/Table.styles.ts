import { tableAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  th: {
    fontWeight: 'medium',
    textTransform: 'none',
    letterSpacing: 'normal',
  },
  td: {
    fontWeight: 'normal',
    color: 'gray.500',
  },
});

const variantSimple = definePartsStyle(() => ({
  th: {
    '&:first-of-type': {
      borderTopLeftRadius: 'lg',
    },
    '&:last-of-type': {
      borderTopRightRadius: 'lg',
    },
    color: 'gray.500',
    bg: 'gray.50',
    svg: {
      width: 4,
      height: 4,
      ml: 1,
      stroke: 'gray.500',
    },
    _hover: {
      color: 'gray.700',
      svg: {
        stroke: 'gray.700',
      },
    },
  },
  caption: {
    color: 'gray.600',
  },
  tbody: {
    tr: {
      borderColor: 'gray.200',
      bg: 'none',
      _hover: {
        bg: 'gray.50',
      },
      '&:last-child': {
        td: {
          '&:first-of-type': {
            borderBottomLeftRadius: 'lg',
          },
          '&:last-of-type': {
            borderBottomRightRadius: 'lg',
          },
        },
      },
    },
  },
}));

// TODO: [James] - variant stripe style to be done once needed
const variantStripe = definePartsStyle((props) => {
  const { colorScheme: c } = props;

  return {
    th: {
      color: c === 'gray' ? 'gray.600' : 'gray.100',
      borderBottom: '1px',
      borderColor: c === 'gray' ? `${c}.200` : `${c}.700`,
    },
    td: {
      borderBottom: '1px',
      borderColor: c === 'gray' ? `${c}.100` : `${c}.700`,
    },
    caption: {
      color: c === 'gray' ? 'gray.600' : 'gray.100',
    },
    tbody: {
      tr: {
        '&:nth-of-type(odd)': {
          'th, td': {
            borderBottomWidth: '1px',
            borderColor: c === 'gray' ? `${c}.100` : `${c}.700`,
          },
          td: {
            background: c === 'gray' ? `${c}.100` : `${c}.700`,
          },
        },
      },
    },
    tfoot: {
      tr: {
        '&:last-of-type': {
          th: { borderBottomWidth: 0 },
        },
      },
    },
  };
});

const variants = {
  simple: variantSimple,
  striped: variantStripe,
};

const sizes = {
  md: definePartsStyle({
    th: {
      h: '2.75rem',
      lineHeight: '1.125rem',
      fontSize: 'xs',
      py: 3,
      px: 4,
    },
    td: {
      h: '4.5rem',
      lineHeight: 5,
      fontSize: 'sm',
      py: '1.625rem',
      px: 4,
    },
    caption: {
      px: '4',
      py: '3',
      fontSize: 'xs',
    },
  }),
};

const TableStyles = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'md',
    variant: 'simple',
  },
});

export default TableStyles;
