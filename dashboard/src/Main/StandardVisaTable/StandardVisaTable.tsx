import { Text } from '@mantine/core';
import React from 'react';
import DataTable from 'react-data-table-component';
import { columns, data } from './table.data';

export function StandardVisaTable() {
  return (
    <>
      <Text>Standard Visa Table</Text>
      <DataTable columns={columns} data={data} selectableRows />
    </>
  );
}
