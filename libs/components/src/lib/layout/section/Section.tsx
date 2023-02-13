import { Box, BoxProps } from '@chakra-ui/react';

export interface SectionProps extends BoxProps {
  children: React.ReactNode;
}

export function Section({ children, ...boxProps }: SectionProps) {
  return (
    <Box as="section" p="6" bg="white" borderRadius="xl" {...boxProps}>
      {children}
    </Box>
  );
}

export default Section;
