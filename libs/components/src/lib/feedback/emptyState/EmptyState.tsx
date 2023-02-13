import { Box, BoxProps } from '@chakra-ui/react';

import { Text, FeaturedCircleIcon, ButtonProps } from '../../..';

export interface EmptyStateProps extends BoxProps {
  title: string;
  description?: string;
  ctaElement?: React.ReactNode;
  icon?: React.ReactElement;
  dataTestId?: string;
  colorScheme?: ButtonProps['colorScheme'];
}

const EmptyState = (props: EmptyStateProps) => {
  const {
    icon,
    title,
    description,
    ctaElement,
    dataTestId,
    colorScheme = 'primary',
    ...rest
  } = props;

  return (
    <Box
      m={16}
      textAlign="center"
      borderRadius="md"
      data-testid={dataTestId}
      {...rest}
    >
      {icon && (
        <FeaturedCircleIcon
          mx="auto"
          mb={6}
          size="xl"
          colorScheme={colorScheme}
        >
          {icon}
        </FeaturedCircleIcon>
      )}
      <Text color="gray.900" fontWeight="medium" fontSize="xl" mb={2}>
        {title}
      </Text>
      {description && (
        <Text color="gray.500" fontSize="sm" mb={8} whiteSpace="pre-line">
          {description}
        </Text>
      )}
      {ctaElement}
    </Box>
  );
};

export default EmptyState;
