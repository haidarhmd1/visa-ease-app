import React from 'react';
import { SafeAreaView } from 'react-native';
import { themeStyle } from 'styles';
import { MainScreenTabNavigation } from 'navigation';
import { NavigationContainer } from '@react-navigation/native';

const MyTheme = {
  // ...DefaultTheme,
  // colors: {
  //   ...DefaultTheme.colors,
  //   background: '#f1f5f2',
  // },
  dark: false,
  colors: {
    primary: '#00BF80',
    background: '#f3f3f3',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
    <SafeAreaView style={themeStyle.container}>
      <NavigationContainer theme={MyTheme}>
        <MainScreenTabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
