import { AppShell, Header, MantineProvider } from '@mantine/core';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Main } from './Main';
import { Settings } from './Settings/Settings';

export function App() {
  return (
    <MantineProvider>
      <AppShell
        padding="md"
        navbar={<Dashboard />}
        header={
          <Header height={60} p="xs">
            {/* Header content */}
          </Header>
        }
        style={{ background: '#f8f8f8' }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}
