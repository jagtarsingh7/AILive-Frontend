import { Text, HStack } from '@chakra-ui/react';

export interface TableHeaderCardProps {
  leftHeader: string;
  rightHeader: string;
}

const TableHeaderCard = ({ leftHeader, rightHeader }: TableHeaderCardProps) => {
  return (
    <HStack justifyContent="space-between" pr={6}>
      <Text>{leftHeader} </Text>
      <Text>{rightHeader}</Text>
    </HStack>
  );
};
export default TableHeaderCard;
