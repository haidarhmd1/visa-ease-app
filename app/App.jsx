import React from 'react';
import { SafeAreaView } from 'react-native';
import { themeStyle } from 'styles';
import RootStack from 'navigation';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { MyTheme } from 'styles/theme/theme.extended';

export default function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <SafeAreaView style={themeStyle.container}>
        <RootStack />
      </SafeAreaView>
    </ThemeProvider>
  );
}
