import Table from './Table';
import Text from '../../typography/text/Text';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

export interface TableTextCellProps {
  to: string;
  name: string;
  description?: string | null;
  dataTestId?: string;
}

export function TableTextCell({
  to,
  name,
  description,
  dataTestId,
}: TableTextCellProps) {
  return (
    <Table.Td>
      <Link
        as={ReactRouterLink}
        to={to}
        relative="path"
        fontWeight="medium"
        color="gray.900"
        lineHeight={5}
        noOfLines={2}
        whiteSpace="normal"
        data-testid={`${dataTestId}-title`}
        _focusVisible={{
          boxShadow: 'none',
          textDecoration: 'underline',
          ring: 4,
          ringColor: 'var(--chakra-colors-primary-100)',
        }}
        _before={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          content: '""',
        }}
      >
        {name}
      </Link>
      {description && (
        <Text
          fontWeight="normal"
          color="gray.500"
          lineHeight={5}
          noOfLines={2}
          whiteSpace="normal"
          data-testid={`${dataTestId}-description`}
        >
          {description}
        </Text>
      )}
    </Table.Td>
  );
}

export default TableTextCell;
