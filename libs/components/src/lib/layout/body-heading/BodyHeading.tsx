import { BoxProps, Flex } from '@chakra-ui/react';

import Heading from '../../typography/heading/Heading';

export interface BodyHeadingProps extends BoxProps {
  title: string;
  displayElement?: React.ReactNode;
}

export function BodyHeading({
  title,
  displayElement,
  ...rest
}: BodyHeadingProps) {
  return (
    <Flex alignItems="center" {...rest}>
      <Heading fontSize="xl" fontWeight="medium" lineHeight="30px">
        {title}
      </Heading>
      {displayElement}
    </Flex>
  );
}

export default BodyHeading;
