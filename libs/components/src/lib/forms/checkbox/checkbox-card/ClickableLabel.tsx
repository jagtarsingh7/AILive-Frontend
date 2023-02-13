import { chakra, ChakraProps } from '@chakra-ui/react';
import { useClickable, UseClickableProps } from '@chakra-ui/clickable';

interface ClickableLabelProps
  extends UseClickableProps,
    Omit<ChakraProps, 'color'> {}

export const ClickableLabel = (props: ClickableLabelProps) => {
  const clickable = useClickable(props);
  return <chakra.label display="inline-flex" {...clickable} />;
};

export default ClickableLabel;
