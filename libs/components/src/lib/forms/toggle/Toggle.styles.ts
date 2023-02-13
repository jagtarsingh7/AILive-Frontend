import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle(({ colorScheme }) => ({
  track: {
    bg: 'gray.100',
    _hover: {
      bg: 'gray.200',
    },
    _focus: {
      ring: 4,
      ringColor: `${colorScheme}.100`,
    },
    _checked: {
      bg: `${colorScheme}.600`,
      _hover: {
        bg: `${colorScheme}.700`,
      },
      _disabled: {
        bg: 'gray.100',
      },
    },
  },
  thumb: {
    shadow: 'sm',
    _checked: {
      shadow: 'sm',
    },
  },
}));

// The styles all toggle have in common
const ToggleStyles = defineStyleConfig({
  baseStyle,
  // The default size and colorScheme values
  defaultProps: {
    size: 'sm',
    colorScheme: 'primary',
  },
});

export default ToggleStyles;
