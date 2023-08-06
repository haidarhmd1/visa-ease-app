// test-utils.js
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react-native';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { messages } from 'helpers/locales/locales';

const TestProviders = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <IntlProvider
          locale="en"
          messages={messages.en}
          wrapRichTextChunksInFragment
        >
          {children}
        </IntlProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProviders, ...options });

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react-native';
export { customRender as render };
