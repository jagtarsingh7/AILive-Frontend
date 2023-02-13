import { formAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const helperTextStyle = defineStyle({
  color: 'gray.500',
  fontSize: 'sm',
  lineHeight: 'shorter',
  mt: 1.5,
});

const baseStyle = definePartsStyle({
  helperText: helperTextStyle,
});

export default defineMultiStyleConfig({
  baseStyle,
});
