import { useLocale } from '@react-aria/i18n';
import {
  useDateFieldState,
  DatePickerState,
  DateRangePickerState,
} from '@react-stately/datepicker';
import { useDateField } from '@react-aria/datepicker';
import { createCalendar } from '@internationalized/date';
import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { AlertCircleIcon, CalendarDateIcon } from '@canvass/shared/icons';
import { DateValue, AriaDatePickerProps } from '@react-types/datepicker';
import StyledField from './StyleField';
import DateSegment from './DateSegment';

interface DateFieldInsideProps extends AriaDatePickerProps<DateValue> {
  state: DatePickerState | DateRangePickerState;
}

export function DateFieldInside(props: DateFieldInsideProps) {
  const { state: datePickerState } = props;
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef<HTMLDivElement>(null);

  const { fieldProps } = useDateField(props, state, ref);

  const isInvalid = datePickerState.validationState === 'invalid';

  return (
    <StyledField {...fieldProps} ref={ref} state={datePickerState} width="44">
      <Box ml="2" color="gray.500" py="1">
        <CalendarDateIcon my="0.5" />
      </Box>
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
      {isInvalid && (
        <AlertCircleIcon
          boxSize="4"
          color="error.500"
          position="absolute"
          right="2"
        />
      )}
    </StyledField>
  );
}

export default DateFieldInside;
