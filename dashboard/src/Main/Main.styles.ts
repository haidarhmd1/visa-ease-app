import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _parameters) => {
  return {
    Card: {
      padding: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderRadius: 8,
      background: 'white',
    },
  };
});
