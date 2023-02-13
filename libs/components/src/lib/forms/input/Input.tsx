import React from 'react';
import {
  InputGroup as ChakraInputGroup,
  InputGroupProps as ChakraInputGroupProps,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputRightElement as ChakraInputRightElement,
  InputLeftElement as ChakraInputLeftElement,
  forwardRef,
} from '@chakra-ui/react';

export const sizes = ['sm', 'md'] as const;
type Sizes = (typeof sizes)[number];

interface InputProps extends ChakraInputProps {
  variant?: 'outline';
  colorScheme?: 'gray';
  size?: Sizes;
  placeholder?: ChakraInputProps['placeholder'];
  isDisabled?: ChakraInputProps['isDisabled'];
  isInvalid?: ChakraInputProps['isInvalid'];
}

interface InputInterface
  extends React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  > {
  Group: typeof InputGroup;
  LeftElement: typeof ChakraInputLeftElement;
  RightElement: typeof ChakraInputRightElement;
  id: string;
}

const InputForwardRef = forwardRef<InputProps, 'input'>(
  (props: InputProps, ref) => {
    return <ChakraInput {...props} ref={ref} />;
  }
);

interface InputGroupProps extends ChakraInputGroupProps {
  size?: Sizes;
}

const InputGroup = (props: InputGroupProps) => {
  return <ChakraInputGroup {...props} />;
};

const Input = {
  ...InputForwardRef,
  id: 'Input',
  Group: InputGroup,
  LeftElement: ChakraInputLeftElement,
  RightElement: ChakraInputRightElement,
} as InputInterface;

export default Input;
