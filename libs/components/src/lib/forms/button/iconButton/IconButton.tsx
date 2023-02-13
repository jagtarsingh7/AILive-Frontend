import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps,
  forwardRef,
} from '@chakra-ui/react';
import type { Sizes } from '../Button';

interface IconButtonProps extends ChakraIconButtonProps {
  icon: ChakraIconButtonProps['icon'];
  'aria-label': ChakraIconButtonProps['aria-label'];
  onClick?: ChakraIconButtonProps['onClick'];
  isDisabled?: ChakraIconButtonProps['isDisabled'];
  isLoading?: ChakraIconButtonProps['isLoading'];
  isRound?: ChakraIconButtonProps['isRound'];
  size?: Sizes;
}

const IconButton = forwardRef<IconButtonProps, 'button'>(
  (props: IconButtonProps, ref) => <ChakraIconButton {...props} ref={ref} />
);

export default IconButton;
