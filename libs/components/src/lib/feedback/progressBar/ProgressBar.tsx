import {
  Progress as ChakraProgress,
  ProgressProps as ChakraProgressProps,
  Flex,
  Box,
} from '@chakra-ui/react';
import Text from '../../typography/text/Text';
import { layout, LayoutOptions } from './ProgressBar.styles';

export const sizes = ['md'] as const;
export const colorScheme = ['primary'] as const;

type Sizes = (typeof sizes)[number];
type ColorScheme = (typeof colorScheme)[number];

interface ProgressBarProps extends ChakraProgressProps {
  size?: Sizes;
  colorScheme?: ColorScheme;
  labelOption?: LayoutOptions;
  value?: ChakraProgressProps['value'];
  isIndeterminate?: boolean;
}

const ProgressBar = ({
  labelOption = 'none',
  isIndeterminate,
  ...rest
}: ProgressBarProps) => {
  return (
    <Flex {...layout[labelOption]} width="full" data-testid="progress-bar">
      <Box flex="2" w="100%">
        <ChakraProgress size="md" {...rest} isIndeterminate={isIndeterminate} />
      </Box>
      {labelOption !== 'none' && (
        <Box flexBasis="content">
          <Text color="gray.700" fontSize="sm">
            {rest.value}%
          </Text>
        </Box>
      )}
    </Flex>
  );
};

export default ProgressBar;
