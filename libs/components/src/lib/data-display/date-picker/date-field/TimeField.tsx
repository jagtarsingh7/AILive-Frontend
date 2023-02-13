import { useLocale } from '@react-aria/i18n';
import {
  useTimeFieldState,
  DatePickerState,
  DateRangePickerState,
} from '@react-stately/datepicker';
import { useTimeField } from '@react-aria/datepicker';
import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { AlertCircleIcon, ClockIcon } from '@canvass/shared/icons';
import { SpectrumTimeFieldProps, TimeValue } from '@react-types/datepicker';
import StyledField from './StyleField';
import DateSegment from './DateSegment';

interface TimeFieldProps extends SpectrumTimeFieldProps<TimeValue> {
  state: DatePickerState | DateRangePickerState;
}

export function TimeField(props: TimeFieldProps) {
  const { state: datePickerState } = props;
  const { locale } = useLocale();
  const state = useTimeFieldState({
    ...props,
    locale,
  });

  const ref = useRef<HTMLDivElement>(null);

  const { fieldProps } = useTimeField(props, state, ref);

  const isInvalid = datePickerState.validationState === 'invalid';

  return (
    <Box>
      <StyledField {...fieldProps} ref={ref} state={datePickerState} width="36">
        <Box ml="2" color="gray.500" py="1">
          <ClockIcon />
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
    </Box>
  );
}

export default TimeField;
