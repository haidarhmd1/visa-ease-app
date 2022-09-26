import { Text } from '@mantine/core';
import React from 'react';
import DataTable from 'react-data-table-component';
import { columns, data } from './data.table';

export function ExpressVisaTable() {
  return (
    <>
      <Text>Express Visa Table</Text>
      <DataTable columns={columns} data={data} selectableRows />
    </>
  );
}
