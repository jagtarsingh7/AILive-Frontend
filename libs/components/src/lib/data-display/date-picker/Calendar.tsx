import { useCalendarState } from '@react-stately/calendar';
import { useCalendar } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { createCalendar } from '@internationalized/date';
import { CalendarButton } from './CalendarButton';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack } from '@chakra-ui/react';
import Text from '../../typography/text/Text';
import { useRef } from 'react';
import { CalendarGrid } from './CalendarGrid';
import { CalendarProps } from '@react-types/calendar';
import { DatePickerState } from '@react-stately/datepicker';
import { DateValue } from '@react-types/datepicker';
import TimeField from './date-field/TimeField';
import DateFieldInside from './date-field/DateFieldInside';

interface DatePickerCalendarProps extends CalendarProps<DateValue> {
  state: DatePickerState;
}

export function Calendar(props: DatePickerCalendarProps) {
  const { state: datePickerState, errorMessage } = props;

  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });
  const ref = useRef<HTMLDivElement>(null);
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state);

  const isInvalid = datePickerState.validationState === 'invalid';

  return (
    <Flex
      flexDirection="column"
      {...calendarProps}
      ref={ref}
      alignItems="center"
    >
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="space-around"
        pb="4"
        data-testid="calender-month-switch"
      >
        <CalendarButton {...prevButtonProps}>
          <ChevronLeftIcon boxSize={5} />
        </CalendarButton>
        <Text
          fontSize="md"
          lineHeight="5"
          fontWeight="medium"
          color="gray.700"
          textAlign="center"
        >
          {title}
        </Text>
        <CalendarButton {...nextButtonProps}>
          <ChevronRightIcon boxSize={5} />
        </CalendarButton>
      </Box>
      <HStack justifyContent="space-between" pb="2" width="100%" px="2">
        <DateFieldInside
          state={datePickerState}
          value={datePickerState.dateValue}
          onChange={datePickerState.setDateValue as (value: DateValue) => void}
          granularity="day"
          aria-label="calendar-date-field"
          data-testid="calendar-date-field"
        />
        <TimeField
          value={datePickerState.timeValue}
          onChange={datePickerState.setTimeValue}
          granularity="minute"
          hideTimeZone={true}
          state={datePickerState}
          hourCycle={12}
          aria-label="calendar-time-field"
          data-testid="calendar-time-field"
        />
      </HStack>
      {isInvalid && (
        <Text
          color="error.500"
          fontSize="sm"
          fontWeight="medium"
          lineHeight="6"
          data-testid="datepicker-popover-error-message"
          alignSelf="start"
          px="2"
        >
          {errorMessage}
        </Text>
      )}
      <CalendarGrid state={state} />
    </Flex>
  );
}
