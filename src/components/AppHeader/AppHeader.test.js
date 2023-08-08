/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { render } from 'utils/test.utils';
import AuthContext, { AuthProvider } from 'provider/AuthProvider';
import { AppHeader } from '../AppHeader';

const userData = { fullname: 'John Doe' };

const value = {
  userData,
};

describe('<AppHeader />', () => {
  test('should render loading indicator when there is no user data', () => {
    const { getByTestId } = render(
      <AuthProvider>
        <AppHeader title="My App" role="main" />
      </AuthProvider>
    );

    const loadingIndicator = getByTestId('loading-indicator');

    expect(loadingIndicator).toBeTruthy();
  });

  test('should render with role "main" and shows user data correctly', () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={value}>
        <AppHeader role="main" />
      </AuthContext.Provider>
    );
    const appbarHeader = getByTestId('mainAppbarHeader');
    const appbarHeaderGreeting = getByTestId('appbarHeaderGreeting');
    const logoutButton = getByTestId('mainAppbarHeader').findByProps({
      icon: 'logout',
    });

    expect(appbarHeader).toBeVisible();
    expect(appbarHeaderGreeting).toHaveTextContent('John Doe');
    expect(logoutButton).toBeVisible();
  });

  test('should render with role "secondary" and shows title correctly', () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={value}>
        <AppHeader role="secondary" title="Secondary Header" />
      </AuthContext.Provider>
    );

    const appbarHeader = getByTestId('secondaryAppbarHeader');
    const appbarContent = getByTestId('appbar-content');
    const backButton = getByTestId('secondaryAppbarHeader').findByProps({
      icon: 'arrow-left',
    });

    expect(appbarHeader).toBeVisible();
    expect(appbarContent).toHaveTextContent('Secondary Header');
    expect(backButton).toBeVisible();
  });

  test('should render with role other than "main" or "secondary" and shows title correctly', () => {
    const { getByTestId } = render(
      <AuthContext.Provider value={value}>
        <AppHeader role="other" title="Other Header" />
      </AuthContext.Provider>
    );

    const appbarHeader = getByTestId('defaultAppbarHeader');
    const appbarContent = getByTestId('appbar-content');
    const backButton = getByTestId('defaultAppbarHeader').findByProps({
      icon: 'arrow-left',
    });

    expect(appbarHeader).toBeVisible();
    expect(appbarContent).toHaveTextContent('Other Header');
    expect(backButton).toBeVisible();
  });

  test('should call goBack function when back button is pressed', () => {
    const goBackMock = jest.fn();
    const { getByTestId } = render(
      <AuthContext.Provider value={value}>
        <AppHeader
          role="secondary"
          title="Secondary Header"
          goBack={goBackMock}
        />
      </AuthContext.Provider>
    );

    const backButton = getByTestId('secondaryAppbarHeader').findByProps({
      icon: 'arrow-left',
    });
    fireEvent.press(backButton);

    expect(goBackMock).toHaveBeenCalledTimes(1);
  });
});
