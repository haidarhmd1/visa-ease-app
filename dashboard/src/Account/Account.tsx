import React from 'react';
import {
  Container,
  TextInput,
  Paper,
  Button,
  Text,
  Select,
} from '@mantine/core';
import { useStyles } from './Account.styled';

export function Account() {
  const { classes } = useStyles();
  return (
    <Container size="xl" my="md">
      <Paper shadow="md" radius="md" p="xl">
        <Text size="lg" mb="md" weight={500}>
          Account
        </Text>
        <TextInput
          label="Username"
          placeholder="@username"
          classNames={classes}
        />
        <TextInput label="First Name" placeholder="Max" classNames={classes} />
        <TextInput
          label="Last Name"
          placeholder="Mustermann"
          classNames={classes}
        />
        <Select
          style={{ marginTop: 20, zIndex: 2 }}
          data={['Manager', 'Supervisor', 'Data Entry']}
          placeholder="Select"
          label="Role"
          classNames={classes}
        />
        <Button>Save</Button>
      </Paper>
    </Container>
  );
}
