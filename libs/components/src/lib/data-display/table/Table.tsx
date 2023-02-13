import { ArrowDownIcon, ArrowUpIcon } from '@canvass/shared/icons';
import {
  Table as ChakraTable,
  Thead as ChakraThead,
  Tbody as ChakraTbody,
  Tfoot as ChakraTfoot,
  Tr as ChakraTr,
  Th as ChakraTh,
  Td as ChakraTd,
  TableCaption as ChakraTableCaption,
  TableProps as ChakraTableProps,
  TableContainer as ChakraTableContainer,
  TableContainerProps as ChakraTableContainerProps,
  TableColumnHeaderProps as ChakraTableHeaderProps,
} from '@chakra-ui/react';

const Table = (props: ChakraTableProps) => {
  return <ChakraTable {...props} />;
};

const TableContainer = (props: ChakraTableContainerProps) => {
  return (
    <ChakraTableContainer
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      {...props}
    />
  );
};

export interface SortableThProps extends ChakraTableHeaderProps {
  sortDirection: 'asc' | 'desc' | false;
}

const SortableTh = (props: SortableThProps) => {
  const { children, sortDirection, ...rest } = props;
  const sortMap = {
    asc: <ArrowUpIcon data-testid="sorting-up-arrow" />,
    desc: <ArrowDownIcon data-testid="sorting-down-arrow" />,
  };
  return (
    <ChakraTh cursor="pointer" {...rest}>
      {children}
      {sortDirection ? sortMap[sortDirection] : null}
    </ChakraTh>
  );
};

Table.Thead = ChakraThead;
Table.Tbody = ChakraTbody;
Table.Tfoot = ChakraTfoot;
Table.Tr = ChakraTr;
Table.Th = ChakraTh;
Table.SortableTh = SortableTh;
Table.Td = ChakraTd;
Table.Caption = ChakraTableCaption;
Table.Container = TableContainer;

export default Table;
