import { useMemo, useState } from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  type ColumnDef,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';
import { TableVirtuoso } from 'react-virtuoso';
import {
  forwardRef,
  type TableContainerProps,
  type TableCellProps,
} from '@chakra-ui/react';
import Table from '../table/Table';

const DEFAULT_TABLE_CONTAINER_HEIGHT = 96;

export type StickyHeaderCell = {
  id: string;
  meta: {
    textAlign: TableCellProps['textAlign'];
    w?: TableCellProps['w'];
    isNumeric?: boolean;
  };
  row: React.ReactElement;
};

export interface VirtualizedDataTableProps<T> extends TableContainerProps {
  columns: ColumnDef<T, any>[];
  data: T[];
  emptyComponent: React.ReactElement;
  testId?: string;
  initialSort?: SortingState;
  stickyRow?: StickyHeaderCell[];
}

export function VirtualizedDataTable<T extends object>({
  data,
  columns,
  emptyComponent,
  testId = '',
  initialSort = [],
  stickyRow,
  ...styleProps
}: VirtualizedDataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>(initialSort);

  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  const tableHeight = useMemo(() => {
    return data.length === 0 ? 'full' : undefined;
  }, [data]);

  return (
    <Table.Container
      h={DEFAULT_TABLE_CONTAINER_HEIGHT}
      {...styleProps}
      data-testid={`${testId}-tags-data-table`}
    >
      <TableVirtuoso
        totalCount={data.length}
        fixedItemHeight={64}
        components={{
          Table: (props) => <Table h={tableHeight} {...props} />,
          TableBody: forwardRef((props, ref) =>
            data.length ? (
              <Table.Tbody {...props} ref={ref} />
            ) : (
              <Table.Tbody
                {...props}
                ref={ref}
                sx={{ 'tr:hover': { background: 'none' } }}
              >
                {emptyComponent}
              </Table.Tbody>
            )
          ),
          TableRow: (props) => {
            return <Table.Tr data-testid="table-row" {...props} />;
          },
        }}
        fixedHeaderContent={() => {
          return (
            <>
              {getHeaderGroups().map((headerGroup) => (
                <Table.Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                    const meta: any = header.column.columnDef.meta;
                    return (
                      <Table.SortableTh
                        key={header.id}
                        w={meta?.w}
                        textAlign={meta?.textAlign}
                        isNumeric={meta?.isNumeric}
                        onClick={header.column.getToggleSortingHandler()}
                        sortDirection={header.column.getIsSorted()}
                        cursor={
                          header.column.getCanSort() ? 'pointer' : 'default'
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Table.SortableTh>
                    );
                  })}
                </Table.Tr>
              ))}
              {stickyRow && (
                <Table.Tr>
                  {stickyRow.map((row) => (
                    <Table.Td
                      key={row.id}
                      w={row.meta.w}
                      textAlign={row.meta.textAlign}
                      isNumeric={row.meta.isNumeric}
                      bg="gray.50"
                    >
                      {row.row}
                    </Table.Td>
                  ))}
                </Table.Tr>
              )}
            </>
          );
        }}
        itemContent={(index) => {
          const row = getRowModel().rows[index];
          return row.getVisibleCells().map((cell) => {
            // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
            const meta: any = cell.column.columnDef.meta;
            return (
              <Table.Td
                key={cell.id}
                w={meta?.w}
                textAlign={meta?.textAlign}
                isNumeric={meta?.isNumeric}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Table.Td>
            );
          });
        }}
      />
    </Table.Container>
  );
}

export default VirtualizedDataTable;
