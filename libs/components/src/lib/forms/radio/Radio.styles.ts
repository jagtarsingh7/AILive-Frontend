import { defineStyleConfig, SystemStyleObject } from '@chakra-ui/styled-system';
import { baseStyle } from '../checkbox/Checkbox.styles';

const innerCircleStyle = (size: number): SystemStyleObject => ({
  _checked: {
    _before: {
      w: size,
      h: size,
    },
  },
});

const sizes = {
  sm: {
    control: {
      width: 4,
      height: 4,
      ...innerCircleStyle(1.5),
    },
  },
  md: {
    control: {
      h: 5,
      w: 5,
      ...innerCircleStyle(2),
    },
  },
};

// The styles all radio button have in common
const RadioStyles = defineStyleConfig({
  baseStyle,
  sizes,
  // The default size and colorScheme values
  defaultProps: {
    size: 'sm',
    colorScheme: 'primary',
  },
});

export default RadioStyles;
