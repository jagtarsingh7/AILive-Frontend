import {
  ResponsiveValue,
  Tooltip as ChakraTooltip,
  TooltipProps as ChakraTooltipProps,
} from '@chakra-ui/react';
import { TooltipVariants } from './Tooltip.styles';

interface TooltipProps extends ChakraTooltipProps {
  children: ChakraTooltipProps['children'];
  label?: ChakraTooltipProps['label'];
  variant?: ResponsiveValue<TooltipVariants>;
  hasArrow?: ChakraTooltipProps['hasArrow'];
  placement?: ChakraTooltipProps['placement'];
}

const Tooltip = (props: TooltipProps) => <ChakraTooltip {...props} />;

export default Tooltip;
