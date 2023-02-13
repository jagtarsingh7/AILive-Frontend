import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  color: 'gray.700',
});

const HeadingStyles = defineStyleConfig({
  baseStyle,
});

export default HeadingStyles;
