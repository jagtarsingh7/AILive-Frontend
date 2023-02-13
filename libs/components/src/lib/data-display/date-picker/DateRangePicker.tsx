import { useRef } from 'react';
import {
  useDateRangePickerState,
  DateRangePickerStateOptions,
} from '@react-stately/datepicker';
import { useDateRangePicker } from '@react-aria/datepicker';
import { RangeCalendar } from './RangeCalendar';
import { Popover } from './Popover';
import { HStack, Box } from '@chakra-ui/react';
import FormControl from '../../forms/formControl/FormControl';
import Text from '../../typography/text/Text';
import DateInput from './date-field/DateInput';

interface DateRangePickerProps extends DateRangePickerStateOptions {
  startLabel: DateRangePickerStateOptions['label'];
  endLabel: DateRangePickerStateOptions['label'];
  gap?: string;
  width?: string;
  startErrorMessage?: string;
  endErrorMessage?: string;
  placeholder?: string;
}

export const DateRangePicker = (props: DateRangePickerProps) => {
  const {
    startLabel,
    endLabel,
    startErrorMessage,
    endErrorMessage,
    gap = '6',
    width = '60',
    placeholder,
  } = props;

  const state = useDateRangePickerState({
    ...props,
    shouldCloseOnSelect: false,
  });

  const ref = useRef<HTMLDivElement>(null);
  const labelledProps = { 'aria-label': 'date-range-picker', ...props };
  const {
    labelProps,
    startFieldProps,
    endFieldProps,
    dialogProps,
    calendarProps,
  } = useDateRangePicker(labelledProps, state, ref);

  const isInvalid = state.validationState === 'invalid';

  return (
    <Box display="inline-flex" flexDirection="column">
      <HStack gap={gap} alignItems="start">
        <Box>
          <FormControl.Label {...labelProps} aria-label="start-label">
            {startLabel}
          </FormControl.Label>
          <DateInput
            {...startFieldProps}
            width={width}
            data-testid="date-range-picker-start-date-field"
            onClick={() => state.setOpen(true)}
            placeholder={placeholder}
          />
          {!state.isOpen && isInvalid && (
            <Text
              color="error.500"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="6"
              pt="1"
              maxWidth="60"
              data-testid="date-range-picker-start-error-message"
            >
              {startErrorMessage}
            </Text>
          )}
        </Box>
        <Box>
          <FormControl.Label {...labelProps} aria-label="end-date-field">
            {endLabel}
          </FormControl.Label>
          <DateInput
            {...endFieldProps}
            width={width}
            data-testid="date-range-picker-end-date-field"
            onClick={() => state.setOpen(true)}
            placeholder={placeholder}
          />
          {!state.isOpen && isInvalid && (
            <Text
              color="error.500"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="6"
              pt="1"
              maxWidth="60"
              data-testid="date-range-picker-end-error-message"
            >
              {endErrorMessage}
            </Text>
          )}
        </Box>
      </HStack>
      {state.isOpen && (
        <Popover
          {...dialogProps}
          isOpen={state.isOpen}
          onClose={() => {
            state.setOpen(false);
          }}
          data-testid="date-range-picker-popover"
        >
          <RangeCalendar
            {...calendarProps}
            state={state}
            data-testid="date-range-picker-calendar"
          />
          {isInvalid && startErrorMessage && (
            <Text
              color="error.500"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="6"
              data-testid="popover-start-error-message"
              pt="1"
              px="2"
            >
              {startErrorMessage}
            </Text>
          )}
          {isInvalid && endErrorMessage && (
            <Text
              color="error.500"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="6"
              data-testid="popover-end-error-message"
              px="2"
              pt="2"
            >
              {endErrorMessage}
            </Text>
          )}
        </Popover>
      )}
    </Box>
  );
};

export default DateRangePicker;
