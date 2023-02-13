import {
  DatePickerState,
  DateRangePickerState,
} from '@react-stately/datepicker';

import { Box, BoxProps, forwardRef } from '@chakra-ui/react';

interface StyledFieldProps extends BoxProps {
  state: DatePickerState | DateRangePickerState;
  width?: string;
}

export const StyledField = forwardRef<StyledFieldProps, 'div'>(
  (props: StyledFieldProps, ref) => {
    const { children, state, width, ...otherProps } = props;

    const isInvalid = state.validationState === 'invalid';

    return (
      <Box
        width={width}
        position="relative"
        border="1px"
        borderColor={isInvalid ? 'error.300 ' : 'gray.200'}
        rounded="lg"
        display="flex"
        color="gray.900"
        alignItems="center"
        pr="2"
        _hover={{
          borderColor: isInvalid ? 'error.300 ' : 'primary.300',
        }}
        _focusWithin={{
          borderColor: isInvalid ? 'error.300 ' : 'primary.300',
          boxShadow: isInvalid
            ? 'none'
            : '0 0 0 4px var(--chakra-colors-primary-100)',
        }}
        {...otherProps}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

export default StyledField;
