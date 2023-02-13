import { useRef } from 'react';
import { useRangeCalendarState } from '@react-stately/calendar';
import { useRangeCalendar } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { createCalendar } from '@internationalized/date';
import { CalendarGrid } from './CalendarGrid';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, HStack } from '@chakra-ui/react';
import Text from '../../typography/text/Text';
import { DateValue, TimeValue } from '@react-types/datepicker';
import { RangeCalendarProps } from '@react-types/calendar';
import { CalendarButton } from './CalendarButton';
import TimeField from './date-field/TimeField';
import DateFieldInside from './date-field/DateFieldInside';
import { DateRangePickerState } from '@react-stately/datepicker';

interface DateRangePickerCalendarProps extends RangeCalendarProps<DateValue> {
  state: DateRangePickerState;
}

export function RangeCalendar(props: DateRangePickerCalendarProps) {
  const { state: rangeDatePickerState } = props;

  const { locale } = useLocale();
  const state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: 2 },
    locale,
    createCalendar,
  });

  const ref = useRef<HTMLDivElement>(null);

  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useRangeCalendar(props, state, ref);

  return (
    <Box
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
        data-testid="range-calender-month-switch"
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
          {title.replace(/[0-9]/g, '')}
        </Text>
        <CalendarButton {...nextButtonProps}>
          <ChevronRightIcon boxSize={5} />
        </CalendarButton>
      </Box>
      <Box display="flex" gap="8">
        <Box>
          <HStack pb="4" justifyContent="space-between" px="2">
            <DateFieldInside
              state={rangeDatePickerState}
              value={rangeDatePickerState?.dateRange?.start || ''}
              onChange={(v: DateValue) =>
                rangeDatePickerState?.setDate('start', v)
              }
              granularity="day"
              aria-label="range-calender-start-date-field"
              data-testid="range-calendar-start-date-field"
            />
            <TimeField
              state={rangeDatePickerState}
              value={rangeDatePickerState?.timeRange?.start || ''}
              onChange={(v: TimeValue) =>
                rangeDatePickerState.setTime('start', v)
              }
              granularity="minute"
              hideTimeZone={true}
              hourCycle={12}
              aria-label="range-calender-start-time-field"
              data-testid="range-calendar-start-time-field"
            />
          </HStack>
          <CalendarGrid state={state} data-testid="range-calendar-grid-start" />
        </Box>
        <Box>
          <HStack pb="4" justifyContent="space-between" px="2">
            <DateFieldInside
              state={rangeDatePickerState}
              value={rangeDatePickerState?.dateRange?.end || ''}
              onChange={(v: DateValue) =>
                rangeDatePickerState?.setDate('end', v)
              }
              granularity="day"
              aria-label="range-calender-end-date-field"
              data-testid="range-calendar-end-date-field"
            />
            <TimeField
              state={rangeDatePickerState}
              value={rangeDatePickerState?.timeRange?.end || ''}
              onChange={(v: TimeValue) =>
                rangeDatePickerState.setTime('end', v)
              }
              granularity="minute"
              hideTimeZone={true}
              hourCycle={12}
              aria-label="range-calender-end-time-field"
              data-testid="range-calendar-end-time-field"
            />
          </HStack>
          <CalendarGrid
            state={state}
            offset={{ months: 1 }}
            data-testid="range-calendar-grid-end"
          />
        </Box>
      </Box>
    </Box>
  );
}
