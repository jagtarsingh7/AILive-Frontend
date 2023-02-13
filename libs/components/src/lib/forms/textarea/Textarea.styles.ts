import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import InputStyles from '../input/Input.styles';

const baseStyle = defineStyle({
  ...InputStyles.baseStyle?.field,
});

const variants = {
  outline: defineStyle(InputStyles.variants?.outline.field ?? {}),
};

const TextareaStyles = defineStyleConfig({
  baseStyle,
  variants,
  sizes: {
    md: {
      px: 3.5,
      py: 2.5,
    },
  },
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
});

export default TextareaStyles;
