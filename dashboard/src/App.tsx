import { MantineProvider } from '@mantine/core';
import React from 'react';
import './App.css';

export function App() {
  return (
    <MantineProvider>
      <Root />
    </MantineProvider>
  );
}
