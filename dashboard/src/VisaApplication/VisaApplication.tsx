import { Grid, Paper } from '@mantine/core';
import React from 'react';
import { ExpressVisaTable } from '../components/ExpressVisaTable';
import { StandardVisaTable } from '../components/StandardVisaTable';

export function VisaApplication() {
  return (
    <Grid p="md">
      <Grid.Col xs={12} mb="md">
        <Paper radius="md" shadow="md" p="xl">
          <ExpressVisaTable />
        </Paper>
      </Grid.Col>

      <Grid.Col xs={12}>
        <Paper radius="md" shadow="md" p="xl">
          <StandardVisaTable />
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
