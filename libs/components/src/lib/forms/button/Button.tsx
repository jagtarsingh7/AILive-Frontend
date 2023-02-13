import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
} from '@chakra-ui/react';

export const sizes = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
export type Sizes = (typeof sizes)[number];

export interface ButtonProps extends ChakraButtonProps {
  children: ChakraButtonProps['children'];
  onClick?: ChakraButtonProps['onClick'];
  isDisabled?: ChakraButtonProps['isDisabled'];
  isLoading?: ChakraButtonProps['isLoading'];
  loadingText?: ChakraButtonProps['loadingText'];
  leftIcon?: ChakraButtonProps['leftIcon'];
  rightIcon?: ChakraButtonProps['rightIcon'];
  size?: Sizes;
}

const Button = forwardRef<ButtonProps, 'button'>((props: ButtonProps, ref) => (
  <ChakraButton {...props} ref={ref} />
));

export default Button;
