import { Container, Grid } from '@mantine/core';
import React from 'react';
import { ExpressVisaTable } from './ExpressVisaTable';
import { useStyles } from './Main.styles';
import { StandardVisaTable } from './StandardVisaTable';

export function Main() {
  const { classes } = useStyles();

  return (
    <Container my="md">
      <Grid>
        <Grid.Col xs={12} className={classes.Card}>
          <StandardVisaTable />
        </Grid.Col>
        <Grid.Col xs={12} className={classes.Card}>
          <ExpressVisaTable />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
