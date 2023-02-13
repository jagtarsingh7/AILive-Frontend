import { Box, type BoxProps } from '@chakra-ui/react';

export interface PageLayoutProps extends BoxProps {
  children?: React.ReactNode;
}

export function PageLayout({ children, ...rest }: PageLayoutProps) {
  return (
    <Box px={[2, 4, 6, 8, 10]} mx="auto" maxW={{ '2xl': '96rem' }} {...rest}>
      {children}
    </Box>
  );
}

export default PageLayout;
