import {
  Spinner as ChakraSpinner,
  SpinnerProps as ChakraSpinnerProps,
} from '@chakra-ui/react';

const thicknessMap: Record<SpinnerSize, string> = {
  xs: '3px',
  sm: '4px',
  md: '6px',
  lg: '6px',
  xl: '8px',
} as const;

export const spinnerSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
type SpinnerSize = (typeof spinnerSizes)[number];
export interface SpinnerProps extends ChakraSpinnerProps {
  size?: SpinnerSize;
}

export function Spinner({ size = 'md', ...rest }: SpinnerProps) {
  return <ChakraSpinner size={size} thickness={thicknessMap[size]} {...rest} />;
}

export default Spinner;
