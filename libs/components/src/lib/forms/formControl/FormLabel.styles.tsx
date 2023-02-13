import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  color: 'gray.700',
  fontSize: 'sm',
  lineHeight: 'shorter',
  mb: 1.5,
  _disabled: {
    color: 'gray.700',
    opacity: 1,
  },
});

export default defineStyleConfig({
  baseStyle,
});
