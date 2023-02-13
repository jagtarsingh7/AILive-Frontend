import { formErrorAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleText = defineStyle({
  color: 'error.500',
  mt: 1.5,
  fontSize: 'sm',
  lineHeight: 'shorter',
});

const baseStyleIcon = defineStyle({
  color: 'error.500',
});

const baseStyle = definePartsStyle({
  text: baseStyleText,
  icon: baseStyleIcon,
});

export default defineMultiStyleConfig({
  baseStyle,
});
