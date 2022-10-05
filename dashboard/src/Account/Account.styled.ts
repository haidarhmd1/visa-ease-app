import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  root: {
    position: 'relative',
  },

  gridColoumn: {
    background: 'white',
    borderRadius: 8,
    padding: 20,
  },

  input: {
    height: 'auto',
    paddingTop: 18,
    marginBottom: 24,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));
