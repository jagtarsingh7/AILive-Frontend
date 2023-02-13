import { Box, BoxProps } from '@chakra-ui/react';

import Spinner from '../spinner/Spinner';
import Text from '../../typography/text/Text';

export const loadingSizes = ['sm', 'md', 'lg', 'xl'] as const;
type LoadingSize = (typeof loadingSizes)[number];

const mtMap: Record<LoadingSize, number> = {
  sm: 4,
  md: 5,
  lg: 5,
  xl: 6,
} as const;

const fontSizeMap = {
  sm: 'sm',
  md: 'sm',
  lg: 'lg',
  xl: 'lg',
} as const;

export interface LoadingProps extends BoxProps {
  size?: LoadingSize;
  loadingText?: string;
  dataTestId?: string;
}

export function Loading({
  size = 'md',
  loadingText,
  dataTestId,
  ...rest
}: LoadingProps) {
  return (
    <Box
      display="inline-flex"
      flexDir="column"
      alignItems="center"
      {...rest}
      data-testid={dataTestId}
    >
      <Spinner size={size} label={loadingText} />
      <Text
        as="span"
        fontSize={fontSizeMap[size]}
        color="gray.700"
        mt={mtMap[size]}
      >
        {loadingText ?? 'Loading...'}
      </Text>
    </Box>
  );
}

export default Loading;
