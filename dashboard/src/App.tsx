import { AppShell, Header, MantineProvider } from '@mantine/core';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { VisaApplication } from 'VisaApplication';
import { Application } from 'VisaApplication/Application';
import { Account } from './Account';
import './App.css';
import { Dashboard } from './Dashboard';
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
          <Route path="/account" element={<Account />} />
          <Route path="/visaApplication" element={<VisaApplication />} />
          <Route path="/visaApplication/:id" element={<Application />} />
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}
