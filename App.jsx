/* eslint-disable global-require */
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { themeStyle } from 'styles';
import RootStack from 'navigation';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { MyTheme } from 'styles/theme/theme.extended';
import Entypo from '@expo/vector-icons/Entypo';
import * as Icons from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          ...Entypo.font,
          ...Icons.Ionicons.font,
          ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
          Fontisto: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Fontisto.ttf'),
          anticon: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/AntDesign.ttf'),
        });

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // eslint-disable-next-line no-promise-executor-return
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <ThemeProvider theme={MyTheme}>
      <SafeAreaView style={themeStyle.container} onLayout={onLayoutRootView}>
        <RootStack />
      </SafeAreaView>
    </ThemeProvider>
  );
}
