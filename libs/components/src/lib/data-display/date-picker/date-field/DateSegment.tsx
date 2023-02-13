import {
  DateSegment as DateFieldDateSegment,
  DateFieldState,
} from '@react-stately/datepicker';
import { useDateSegment } from '@react-aria/datepicker';
import { Box } from '@chakra-ui/react';
import { useRef } from 'react';

interface DateSegmentProps {
  segment: DateFieldDateSegment;
  state: DateFieldState;
}

function DateSegment({ segment, state }: DateSegmentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  const getColor = () => {
    if (segment.isPlaceholder) {
      return 'gray.500';
    }

    if (!segment.isEditable) {
      return 'gray.600';
    }

    return 'gray.900';
  };

  return (
    <Box
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
        fontVariantNumeric: 'tabular-nums',
        boxSizing: 'content-box',
      }}
      textAlign="center"
      outline="none"
      rounded="2"
      color={getColor()}
      _focus={{
        background: 'primary.100',
      }}
    >
      {segment?.text}
    </Box>
  );
}

export default DateSegment;
