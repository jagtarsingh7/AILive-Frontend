import {
  forwardRef,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react';
import {
  fieldFocusVisibleStyles,
  fieldInvalidStyles,
} from '../input/Input.styles';

export interface SelectProps extends ChakraSelectProps {
  placeholder?: ChakraSelectProps['placeholder'];
  label?: string;
}

const selectThemeOverride = {
  ...fieldFocusVisibleStyles,
  ...fieldInvalidStyles,
};

export const Select = forwardRef<SelectProps, 'select'>(
  ({ label, placeholder, ...rest }: SelectProps, ref) => {
    return (
      <ChakraSelect
        mt={label ? '1.5' : ''}
        placeholder={placeholder}
        ref={ref}
        sx={selectThemeOverride}
        {...rest}
      />
    );
  }
);

export default Select;
