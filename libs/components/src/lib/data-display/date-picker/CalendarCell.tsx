import { useCalendarCell } from '@react-aria/calendar';
import {
  isSameDay,
  getDayOfWeek,
  isSameMonth,
  CalendarDate,
} from '@internationalized/date';
import { Box, VStack } from '@chakra-ui/react';
import Button from '../../forms/button/Button';
import React from 'react';
import { useLocale } from '@react-aria/i18n';
import { CalendarState, RangeCalendarState } from '@react-stately/calendar';

interface CalendarCellProps {
  state: CalendarState | RangeCalendarState;
  date: CalendarDate;
  currentMonth: CalendarDate;
}

export function CalendarCell(props: CalendarCellProps) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { state, date, currentMonth } = props;
  const {
    cellProps,
    buttonProps,
    isSelected,
    isInvalid,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  // The start and end date of the selected range will have
  // an emphasized appearance.
  let isSelectionStart = isSelected;
  let isSelectionEnd = isSelected;

  if ('highlightedRange' in state && state.highlightedRange) {
    isSelectionStart = isSameDay(date, state.highlightedRange.start);
    isSelectionEnd = isSameDay(date, state.highlightedRange.end);
  }

  // We add rounded corners on the left for the first day of the month,
  // the first day of each week, and the start date of the selection.
  // We add rounded corners on the right for the last day of the month,
  // the last day of each week, and the end date of the selection.
  const { locale } = useLocale();
  const dayOfWeek = getDayOfWeek(date, locale);
  const isRoundedLeft =
    isSelected && (isSelectionStart || dayOfWeek === 0 || date.day === 1);
  const isRoundedRight =
    isSelected &&
    (isSelectionEnd ||
      dayOfWeek === 6 ||
      date.day === date.calendar.getDaysInMonth(date));

  const isOutsideMonth = !isSameMonth(currentMonth, date);

  const getColorScheme = () => {
    if (isUnavailable || isInvalid) return 'error';

    return 'primary';
  };

  const getColor = () => {
    if (isInvalid) return 'white';
    return isSelected ? 'white' : 'gray.700';
  };

  const getBackground = () => {
    if (isSelectionStart || isSelectionEnd) {
      return isInvalid ? 'error.500' : 'primary.600';
    }

    if (isInvalid) {
      return 'error.100';
    }

    if (isSelected) {
      return 'highlightedRange' in state ? 'primary.200' : 'primary.600';
    }

    return '';
  };

  return (
    <Box as="td" {...cellProps} textAlign="center" py="1">
      <Button
        {...buttonProps}
        ref={ref}
        w="10"
        h="10"
        fontSize="sm"
        fontWeight="normal"
        hidden={isOutsideMonth}
        color={getColor()}
        colorScheme={getColorScheme()}
        variant={isSelected ? 'solid' : 'ghost'}
        borderRadius={isSelected ? '' : 'full'}
        roundedRight={isRoundedRight ? 'full' : ''}
        roundedLeft={isRoundedLeft ? 'full' : ''}
        bg={getBackground()}
        _focusWithin={{
          boxShadow: 'none',
        }}
      >
        <VStack
          display="inline-flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          w="10"
          h="10"
        >
          <Box>{formattedDate}</Box>
        </VStack>
      </Button>
    </Box>
  );
}
