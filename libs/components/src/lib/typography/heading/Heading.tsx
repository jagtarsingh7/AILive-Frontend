import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from '@chakra-ui/react';
import type { FontSize, FontWeight } from '@canvass/foundations';

export interface HeadingProps extends ChakraHeadingProps {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = (props: HeadingProps) => {
  const { fontSize = '2xl', ...rest } = props;

  return <ChakraHeading fontSize={fontSize} {...rest} />;
};

export default Heading;
