import { useRef } from 'react';
import { useDatePickerState } from '@react-stately/datepicker';
import { useDatePicker } from '@react-aria/datepicker';
import { Calendar } from './Calendar';
import { Popover } from './Popover';
import { Box, Text } from '@chakra-ui/react';
import FormControl from '../../forms/formControl/FormControl';
import { AriaDatePickerProps, DateValue } from '@react-types/datepicker';
import DateInput from './date-field/DateInput';

interface DatePickerProps extends AriaDatePickerProps<DateValue> {
  width?: string;
  placeholder?: string;
}

export function DatePicker(props: DatePickerProps) {
  const { label, errorMessage, width = '60', placeholder } = props;
  const state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: false,
  });

  const ref = useRef<HTMLDivElement>(null);

  const { labelProps, fieldProps, dialogProps, calendarProps } = useDatePicker(
    props,
    state,
    ref
  );

  const isInvalid = state.validationState === 'invalid';

  return (
    <Box display="inline-flex" flexDirection="column">
      <FormControl.Label {...labelProps}>{label}</FormControl.Label>
      <DateInput
        {...fieldProps}
        placeholder={placeholder}
        width={width}
        data-testid="datepicker-date-field"
        aria-label="date-field"
        onClick={() => state.setOpen(true)}
      />
      {!state.isOpen && isInvalid && (
        <Text
          color="error.500"
          fontSize="sm"
          fontWeight="medium"
          lineHeight="6"
          data-testid="datepicker-error-message"
          pt="2"
        >
          {errorMessage}
        </Text>
      )}
      {state.isOpen && (
        <Popover
          {...dialogProps}
          isOpen={state.isOpen}
          onClose={() => {
            state.setOpen(false);
          }}
          data-testid="datepicker-popover"
          right="6"
        >
          <Calendar
            {...calendarProps}
            state={state}
            data-testid="datepicker-calendar"
            errorMessage={errorMessage}
          />
        </Popover>
      )}
    </Box>
  );
}

export default DatePicker;
