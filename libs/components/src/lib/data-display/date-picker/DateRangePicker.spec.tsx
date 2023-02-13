import { screen, waitFor } from '@testing-library/react';
import {
  renderWithDatePickerProviders,
  setup,
} from '@canvass/shared/test-utils';
import DateRangePicker from './DateRangePicker';
import {
  today,
  now,
  parseDateTime,
  getLocalTimeZone,
} from '@internationalized/date';

const DateRangePickerTest = () => {
  return (
    <DateRangePicker
      startLabel="Start Time"
      endLabel="End Time"
      granularity="minute"
      minValue={today(getLocalTimeZone())}
      defaultValue={{
        start: now(getLocalTimeZone()),
        end: now(getLocalTimeZone()).add({ weeks: 1 }),
      }}
      errorMessage="This is the range picker error"
    />
  );
};

const renderDatePicker = () => {
  return setup(renderWithDatePickerProviders(<DateRangePickerTest />));
};

const DatePickerWithError = () => {
  return (
    <DateRangePicker
      startLabel="Start Time"
      endLabel="End Time"
      granularity="minute"
      minValue={parseDateTime('2022-11-04T10:45')}
      defaultValue={{
        start: parseDateTime('2022-11-01T10:45'),
        end: parseDateTime('2022-11-08T19:45'),
      }}
      errorMessage="This is the range picker error message"
      startErrorMessage="This is the range picker start error message"
      endErrorMessage="This is the range picker end error message"
    />
  );
};

const renderDateRangePickerWithError = () => {
  return setup(renderWithDatePickerProviders(<DatePickerWithError />));
};

beforeEach(() => jest.clearAllMocks());

describe('Date Range Picker', () => {
  test.skip('should render date picker', async () => {
    const { user } = renderDatePicker();

    expect(
      screen.getByTestId('date-range-picker-start-date-field')
    ).toBeVisible();
    expect(
      screen.getByTestId('date-range-picker-end-date-field')
    ).toBeVisible();
    const clickDateInput = screen.getByTestId(
      'date-range-picker-start-date-field'
    );

    await user.click(clickDateInput);
    await waitFor(() =>
      expect(screen.getByTestId('date-range-picker-popover')).toBeVisible()
    );

    expect(screen.getByTestId('date-range-picker-calendar')).toBeVisible();
    expect(screen.getByTestId('range-calender-month-switch')).toBeVisible();
    expect(screen.getByTestId('range-calendar-start-date-field')).toBeVisible();
    expect(screen.getByTestId('range-calendar-start-time-field')).toBeVisible();
    expect(screen.getByTestId('range-calendar-end-date-field')).toBeVisible();
    expect(screen.getByTestId('range-calendar-end-time-field')).toBeVisible();
  });

  test.skip('should render error message if selected date is below minimum', async () => {
    const { user } = renderDateRangePickerWithError();

    expect(
      screen.getByTestId('date-range-picker-start-date-field')
    ).toBeVisible();
    expect(screen.getByTestId('start-error-icon')).toBeVisible();
    expect(
      screen.getByTestId('date-range-picker-end-date-field')
    ).toBeVisible();
    expect(screen.getByTestId('end-error-icon')).toBeVisible();
    const dateFieldErrorMessage = screen.getByTestId(
      'date-range-picker-error-message'
    );
    expect(dateFieldErrorMessage).toBeVisible();
    const button = screen.getByTestId('date-range-picker-start-field-button');

    await user.click(button);
    await waitFor(() =>
      expect(screen.getByTestId('date-range-picker-popover')).toBeVisible()
    );

    const errorMessageIds = [
      'date-range-picker-popover-error-message',
      'popover-start-error-message',
      'popover-end-error-message',
    ];
    errorMessageIds.forEach((testId) =>
      expect(screen.getByTestId(testId).textContent).toBeTruthy()
    );
    expect(dateFieldErrorMessage).not.toBeInTheDocument();
  });
});
