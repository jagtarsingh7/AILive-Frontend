import { useLocale } from '@react-aria/i18n';
import { useDateFieldState } from '@react-stately/datepicker';
import { createCalendar } from '@internationalized/date';
import { useRef } from 'react';

import { SpectrumDateFieldProps, DateValue } from '@react-types/datepicker';
import Input from '../../../forms/input/Input';
import { AlertCircleIcon } from '@canvass/shared/icons';
import { formatDateTime } from '@canvass/shared/utils';

interface DateInputProps extends SpectrumDateFieldProps<DateValue> {
  size?: 'sm' | 'md';
  placeholder?: string;
  onClick: () => void;
  width?: string;
  datatestid?: string;
}

export function DateInput(props: DateInputProps) {
  const { isDisabled, placeholder, size, onClick, width, datatestid } = props;
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef<HTMLInputElement>(null);

  const isInvalid = state.validationState === 'invalid';

  const getHover = () => {
    if (isInvalid) {
      return 'error.300';
    }

    if (state.isDisabled) {
      return 'gray.200';
    }

    return 'primary.300';
  };

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const getDateInputValue = (value: DateValue | string) => {
    if (!value) {
      return '';
    }

    const dateString =
      typeof value === 'string' ? value : value.toDate(timezone).toISOString();

    return formatDateTime(dateString);
  };

  return (
    <Input.Group size={size}>
      <Input
        ref={ref}
        display="flex"
        placeholder={placeholder}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        onClick={onClick}
        width={width}
        value={getDateInputValue(state.value)}
        _hover={{ borderColor: getHover() }}
        isReadOnly
        data-testid={datatestid}
      />

      {isInvalid && (
        <Input.RightElement pointerEvents="none">
          <AlertCircleIcon
            boxSize="4"
            color="error.500"
            data-testid="datepicker-error-icon"
          />
        </Input.RightElement>
      )}
    </Input.Group>
  );
}

export default DateInput;
