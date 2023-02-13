import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemingProps } from '@chakra-ui/react';

import Table, { SortableThProps } from './Table';
import { useState } from 'react';

// TODO:[James] - checkbox, toggle, radio, progress bar are out of scope
export default {
  component: Table,
  title: 'Data display/Table',
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/table).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=10510%3A337196',
    },
  },
} as ComponentMeta<typeof Table>;

type StoryProps = typeof Table & ThemingProps<'Table'>;

const dummyData = [
  { unit: 'feet', newUnit: 'minimeters', factor: 24, status: 'success' },
  { unit: 'inches', newUnit: 'centimeters', factor: 23, status: 'faulty' },
  { unit: 'yards', newUnit: 'feet', factor: 2, status: 'I dont know' },
  {
    unit: 'kilometers',
    newUnit: 'minimeters',
    factor: 10000,
    status: 'success',
  },
  { unit: 'acres', newUnit: 'square meters', factor: 3, status: 'success' },
];

const TableTemplate: ComponentStory<StoryProps> = (args) => {
  const { ...rest } = args;
  const headers = ['To Convert', 'into', 'multiply by'];
  const isNumeric = (key: string) => key === 'multiply by' || key === 'factor';

  return (
    <Table.Container>
      <Table {...rest}>
        <Table.Thead>
          <Table.Tr>
            {headers.map((header) => (
              <Table.Th isNumeric={isNumeric(header)} key={header}>
                {header}
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {dummyData.map((data) => (
            <Table.Tr key={data.factor}>
              <Table.Td>{data.unit}</Table.Td>
              <Table.Td>{data.newUnit}</Table.Td>
              <Table.Td isNumeric>{data.factor}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.Container>
  );
};
export const Primary = TableTemplate.bind({});
Primary.args = {};

const SortableTableTemplate: ComponentStory<StoryProps> = (args) => {
  const { ...rest } = args;

  const sortOptions: SortableThProps['sortDirection'][] = [
    false,
    'asc',
    'desc',
  ];
  const [sortDirection, setSortDirection] =
    useState<SortableThProps['sortDirection']>('asc');
  const onHeaderClick = () => {
    const currentIndex = sortOptions.indexOf(sortDirection);
    const newIndex =
      currentIndex + 1 < sortOptions.length ? currentIndex + 1 : 0;
    setSortDirection(sortOptions[newIndex]);
  };

  return (
    <Table.Container>
      <Table {...rest}>
        <Table.Thead>
          <Table.Tr>
            <Table.SortableTh
              key={'Unit'}
              onClick={onHeaderClick}
              sortDirection={sortDirection}
            >
              Unit
            </Table.SortableTh>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {dummyData.map((data) => (
            <Table.Tr key={data.factor}>
              <Table.Td>{data.unit}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.Container>
  );
};
export const SortableHeader = SortableTableTemplate.bind({});
SortableHeader.args = {};
