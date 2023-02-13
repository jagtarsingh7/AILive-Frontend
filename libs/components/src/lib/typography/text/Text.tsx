import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from '@chakra-ui/react';
import type { FontSize, FontWeight } from '@canvass/foundations';

export interface TextProps extends ChakraTextProps {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}

const Text = (props: TextProps) => {
  return <ChakraText {...props} />;
};

export default Text;
