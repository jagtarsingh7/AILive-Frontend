import { Icon as ChakraIcon, IconProps } from '@chakra-ui/react';

const Icon = (props: IconProps) => {
  return <ChakraIcon viewBox="0 0 24 24" fill="none" boxSize={5} {...props} />;
};

export default Icon;
