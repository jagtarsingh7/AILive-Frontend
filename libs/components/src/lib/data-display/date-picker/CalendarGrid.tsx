import { useCalendarGrid } from '@react-aria/calendar';
import {
  getWeeksInMonth,
  DateDuration,
  endOfMonth,
} from '@internationalized/date';
import { useLocale } from '@react-aria/i18n';
import { CalendarCell } from './CalendarCell';
import { CalendarDate } from '@internationalized/date';
import { CalendarState, RangeCalendarState } from '@react-stately/calendar';

import Table from '../table/Table';

interface CalendarGridProps {
  state: CalendarState | RangeCalendarState;
  offset?: DateDuration;
}

const hoverEffect = {
  'tr:hover': {
    background: 'none',
  },
};

export function CalendarGrid(props: CalendarGridProps) {
  const { state, offset = {} } = props;
  const { locale } = useLocale();
  const startDate = state.visibleRange.start.add(offset);
  const endDate = endOfMonth(startDate);
  const { gridProps, headerProps, weekDays } = useCalendarGrid(
    {
      startDate,
      endDate,
    },
    state
  );

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <Table {...gridProps}>
      <Table.Thead {...headerProps}>
        <Table.Tr>
          {weekDays.map((day, index) => (
            <Table.Th
              key={index}
              sx={{
                pl: '5',
                background: 'none',
                color: 'gray.700',
                fontSize: 'sm',
                fontWeight: 'medium',
                borderBottom: '',
              }}
              _hover={hoverEffect}
            >
              {day}
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody _hover={hoverEffect}>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <Table.Tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date: CalendarDate | null, i: number) =>
                date ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                    currentMonth={startDate}
                  />
                ) : (
                  <Table.Td key={i} />
                )
              )}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
