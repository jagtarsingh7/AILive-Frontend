import {
  ButtonGroup as ChakraButtonGroup,
  ButtonGroupProps as ChakraButtonGroupProps,
} from '@chakra-ui/react';
import type { Sizes } from '../Button';

interface ButtonGroupProps extends ChakraButtonGroupProps {
  spacing?: ChakraButtonGroupProps['spacing'];
  isAttached?: ChakraButtonGroupProps['isAttached'];
  size?: Sizes;
}

const ButtonGroup = (props: ButtonGroupProps) => (
  <ChakraButtonGroup {...props} />
);

export default ButtonGroup;
