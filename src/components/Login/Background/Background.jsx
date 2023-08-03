import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import { MyTheme } from 'styles/theme/theme.extended';

export const Background = ({ children }) => (
  <View style={styles.background}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: MyTheme.colors.defaultBackgroundColor,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
