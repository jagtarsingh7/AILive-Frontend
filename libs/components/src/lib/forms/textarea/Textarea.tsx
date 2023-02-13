import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  forwardRef,
} from '@chakra-ui/react';

export const sizes = ['md'] as const;
export const resizeOptions = ['horizontal', 'vertical', 'none'] as const;
type Sizes = (typeof sizes)[number];

interface TextareaProps extends ChakraTextareaProps {
  size?: Sizes;
  isDisabled?: ChakraTextareaProps['isDisabled'];
  isInvalid?: ChakraTextareaProps['isInvalid'];
  resize?: ChakraTextareaProps['resize'];
}

const Textarea = forwardRef<TextareaProps, 'input'>(
  ({ resize = 'none', ...rest }: TextareaProps, ref) => {
    return <ChakraTextarea resize={resize} {...rest} ref={ref} />;
  }
);

export default Textarea;
