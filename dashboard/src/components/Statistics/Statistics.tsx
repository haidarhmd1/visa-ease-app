import React from 'react';
import { createStyles, Group, Paper, Text, SimpleGrid } from '@mantine/core';

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xl * 1.5,
    paddingRight: theme.spacing.xl * 1.5,
    paddingLeft: theme.spacing.xl * 1.5,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface StatsGridIconsProperties {
  data: { title: string; value: string }[];
}

export function Statistics({ data }: StatsGridIconsProperties) {
  const { classes } = useStyles();
  const stats = data.map(stat => {
    return (
      <Paper shadow="md" p="md" radius="md" key={stat.title}>
        <Group position="apart">
          <div>
            <Text
              color="dimmed"
              transform="uppercase"
              weight={700}
              size="xs"
              className={classes.label}
            >
              {stat.title}
            </Text>
            <Text weight={700} size="xl">
              {stat.value}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {stats}
      </SimpleGrid>
    </div>
  );
}
