// test-utils.js
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react-native';
import { IntlProvider } from 'react-intl';
import { AuthProvider } from 'provider/AuthProvider'; // Import your AuthProvider here if needed
import { QueryClient, QueryClientProvider } from 'react-query';

const TestProviders = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale="en">
        <AuthProvider>{children}</AuthProvider>
      </IntlProvider>
    </QueryClientProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProviders, ...options });

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react-native';
export { customRender as render };
