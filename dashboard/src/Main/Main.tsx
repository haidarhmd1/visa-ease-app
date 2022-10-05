import React from 'react';
import { Container, Grid, Paper } from '@mantine/core';
import { ExpressVisaTable } from '../components/ExpressVisaTable';
import { StandardVisaTable } from '../components/StandardVisaTable';
import { Statistics } from '../components/Statistics';

const data = [
  {
    title: 'Application Complete',
    value: '1',
  },
  {
    title: 'Standard Visa Applications',
    value: '12',
  },
  {
    title: 'Express Visa Applications',
    value: '25',
  },
];

export function Main() {
  return (
    <Container size="xl">
      <Statistics data={data} />
      <Grid>
        <Grid.Col xs={6}>
          <Paper radius="md" shadow="md" p="xl">
            <StandardVisaTable />
          </Paper>
        </Grid.Col>

        <Grid.Col xs={6}>
          <Paper radius="md" shadow="md" p="xl">
            <ExpressVisaTable />
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
