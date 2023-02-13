import { tabsAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

//base badge style
const baseBadge = {
  bg: 'gray.100',
  h: 5,
  minW: 2,
  ms: 2,
  me: '-1',
  borderRadius: '2xl',
  fontSize: 'xs',
  px: 2,
  py: 0.5,
};

//hover style
const primaryBadge = {
  bg: 'primary.100',
  color: 'primary.700',
};

export const tabSizes = {
  sm: definePartsStyle({
    tab: {
      fontSize: 'sm',
      fontWeight: 'medium',
      '.tab-badge': baseBadge,
    },
  }),
};

const variantLine = definePartsStyle((props) => {
  const defaultColorAndStroke = {
    color: 'gray.500',
    stroke: 'gray.500',
    borderBottom: '2px solid',
    marginBottom: '-1px',
    borderColor: 'transparent',
  };

  const hoverAndSelected = {
    color: 'primary.700',
    stroke: 'primary.700',
    borderColor: 'primary.700',
    '.tab-badge': primaryBadge,
  };

  return {
    tablist: {
      borderBottom: '1px solid',
      borderColor: 'inherit',
      gap: 2,
      spacing: 2.5,
    },
    tab: {
      ...defaultColorAndStroke,
      pt: '1px',
      pb: 5,
      px: 1,
      _disabled: {
        _hover: defaultColorAndStroke,
        _active: { bg: 'none' },
      },
      fontWeight: 'medium',
      _active: {
        bg: 'none',
      },
      _focusVisible: {
        ring: '4',
        ringColor: 'primary.100',
      },
      _selected: hoverAndSelected,
      _hover: hoverAndSelected,
      '.tab-icon > svg': {
        width: 5,
        height: 5,
      },
    },
  };
});

const variantButton = definePartsStyle((props) => {
  return {
    tablist: {
      gap: 2,
      spacing: 2.5,
    },
    tab: {
      borderRadius: 'md',
      fontWeight: 'medium',
      color: 'gray.500',
      py: 2,
      px: 3,
      _selected: {
        bg: 'primary.50',
        color: 'primary.700',
        '.tab-badge': primaryBadge,
      },
      _focusVisible: {
        bg: 'white',
        ring: '4',
        ringColor: 'primary.100',
      },
      _hover: {
        bg: 'primary.50',
        '.tab-badge': primaryBadge,
      },
    },
  };
});

export const tabsVariants = {
  underline: variantLine,
  button: variantButton,
};

const TabsStyles = defineMultiStyleConfig({
  sizes: tabSizes,
  variants: tabsVariants,
  defaultProps: {
    size: 'sm',
    variant: 'underline',
    colorScheme: 'primary',
  },
});

export default TabsStyles;
