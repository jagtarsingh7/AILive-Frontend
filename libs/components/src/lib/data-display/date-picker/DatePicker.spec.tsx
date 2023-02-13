import { screen, waitFor } from '@testing-library/react';
import {
  renderWithDatePickerProviders,
  setup,
} from '@canvass/shared/test-utils';
import DatePicker from './DatePicker';
import { parseDateTime } from '@internationalized/date';

const DatePickerTest = () => {
  return (
    <DatePicker
      label="Date Picker"
      granularity="minute"
      minValue={parseDateTime('2023-01-17T10:45')}
      defaultValue={parseDateTime('2023-01-18T10:45')}
      errorMessage="This is an error"
    />
  );
};

const renderDatePicker = () => {
  return setup(renderWithDatePickerProviders(<DatePickerTest />));
};

const DatePickerWithError = () => {
  return (
    <DatePicker
      label="Date Picker"
      granularity="day"
      minValue={parseDateTime('2023-01-17T10:45')}
      defaultValue={parseDateTime('2023-01-15T10:45')}
      errorMessage="This is an error"
    />
  );
};

const renderDatePickerWithError = () => {
  return setup(renderWithDatePickerProviders(<DatePickerWithError />));
};

beforeEach(() => jest.clearAllMocks());

describe('Date Picker', () => {
  test.skip('should render date picker', async () => {
    const { user } = renderDatePicker();

    expect(screen.getByTestId('datepicker-date-field')).toBeVisible();
    const button = screen.getByTestId('datepicker-field-button');

    await user.click(button);
    await waitFor(() =>
      expect(screen.getByTestId('datepicker-popover')).toBeVisible()
    );

    expect(screen.getByTestId('datepicker-calendar')).toBeVisible();
    expect(screen.getByTestId('calendar-date-field')).toBeVisible();
    expect(screen.getByTestId('calendar-time-field')).toBeVisible();
    expect(screen.getByTestId('calender-month-switch')).toBeVisible();
  });

  test.skip('should render error message if selected date is below minimum', async () => {
    const { user } = renderDatePickerWithError();

    expect(screen.getByTestId('datepicker-date-field')).toBeVisible();
    const dateFieldErrorMessage = screen.getByTestId(
      'datepicker-error-message'
    );
    expect(dateFieldErrorMessage).toBeVisible();
    expect(screen.getByTestId('datepicker-error-icon')).toBeVisible();
    const button = screen.getByTestId('datepicker-field-button');

    await user.click(button);
    await waitFor(() =>
      expect(screen.getByTestId('datepicker-popover')).toBeVisible()
    );

    expect(dateFieldErrorMessage).not.toBeInTheDocument();
    expect(
      screen.getByTestId('datepicker-popover-error-message')
    ).toBeVisible();
  });
});
