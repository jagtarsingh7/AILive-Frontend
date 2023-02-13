import { selectAnatomy as parts } from '@chakra-ui/anatomy';
import {
  defineStyle,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/styled-system';
import { sizes } from '../input/Input.styles';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseFieldStyle = defineStyle({
  boxShadow: 'xs',
});

const baseIconStyle = defineStyle({
  color: 'gray.500',
});

const baseStyle = definePartsStyle({
  field: baseFieldStyle,
  icon: baseIconStyle,
});

const SelectStyles = defineMultiStyleConfig({
  sizes,
  baseStyle,
});

export default SelectStyles;
