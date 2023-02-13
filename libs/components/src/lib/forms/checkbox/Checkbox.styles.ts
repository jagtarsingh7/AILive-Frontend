import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const focusRingStyle = defineStyle(({ colorScheme }) => ({
  ring: 4,
  bg: 'white',
  ringColor: `${colorScheme}.100`,
}));

const checkedStyle = defineStyle((props) => {
  const { colorScheme } = props;
  return {
    bg: `${colorScheme}.50`,
    color: `${colorScheme}.600`,
    _focus: {
      borderColor: `${colorScheme}.600`,
      ...focusRingStyle(props),
      bg: `${colorScheme}.50`,
      _hover: hoverStyle(props),
    },
    _hover: hoverStyle(props),
    _disabled: disabledStyle,
  };
});

export const disabledStyle = defineStyle({
  bg: 'gray.100',
  borderColor: 'gray.300',
  color: `gray.300`,
});

export const hoverStyle = defineStyle(({ colorScheme }) => ({
  bg: `${colorScheme}.100`,
  borderColor: `${colorScheme}.600`,
}));

export const baseStyle = defineStyle((props) => {
  const { colorScheme } = props;
  return {
    control: {
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray.300',
      _hover: {
        ...hoverStyle(props),
        _disabled: disabledStyle,
      },
      _focus: {
        borderColor: `${colorScheme}.300`,
        ...focusRingStyle(props),
        _hover: hoverStyle(props),
      },
      _disabled: disabledStyle,
      _checked: checkedStyle(props),
      _indeterminate: checkedStyle(props),
    },
  };
});

const sizes = {
  sm: {
    control: { borderRadius: 'base', h: 4, w: 4 },
  },
  md: {
    control: { borderRadius: 'md', h: 5, w: 5 },
  },
};

// The styles all checkboxes have in common
const CheckboxStyles = defineStyleConfig({
  baseStyle,
  sizes,
  // The default size and colorScheme values
  defaultProps: {
    size: 'sm',
    colorScheme: 'primary',
  },
});

export default CheckboxStyles;
