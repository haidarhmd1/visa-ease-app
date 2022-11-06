import React, { useCallback, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';

import * as SplashScreen from 'expo-splash-screen';

import { Font } from 'expo';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';

import { ThemeProvider } from 'styled-components/native';
import { themeStyle } from 'styles';
import { MyTheme } from 'styles/theme/theme.extended';

import RootStack from 'navigation';

import { getLanguage } from 'helpers/language';
import { messages } from 'res/locales/locales';

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
          ...AntDesign.font,
          ...Fontisto.font,
        });
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
        <IntlProvider
          locale={getLanguage()}
          messages={messages[getLanguage()]}
          wrapRichTextChunksInFragment
        >
          <RootStack />
        </IntlProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
}
