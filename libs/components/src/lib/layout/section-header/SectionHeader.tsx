import { BoxProps, Flex } from '@chakra-ui/react';

import Heading from '../../typography/heading/Heading';
import Text from '../../typography/text/Text';

export interface SectionHeaderProps extends BoxProps {
  title: string;
  subtitle?: string;
  actionElement?: React.ReactElement;
  dataTestId?: string;
}

export function SectionHeader({
  title,
  subtitle,
  actionElement,
  dataTestId,
  ...rest
}: SectionHeaderProps) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      pt="4"
      pb="6"
      data-testid={dataTestId}
      {...rest}
    >
      <Flex flex={1} flexDirection="column" gap="1">
        <Heading as="h1" fontWeight="medium">
          {title}
        </Heading>
        {subtitle && (
          <Text fontSize="sm" lineHeight="20px" color="gray.500">
            {subtitle}
          </Text>
        )}
      </Flex>
      {actionElement}
    </Flex>
  );
}

export default SectionHeader;
