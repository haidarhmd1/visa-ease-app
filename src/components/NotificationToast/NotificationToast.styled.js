import { StyleSheet } from 'react-native';
import { MyTheme, themeStyle } from 'styles/theme/theme.extended';

export const styles = StyleSheet.create({
  commonToastStyle: {
    borderRadius: 8,
    margin: 32,
    ...themeStyle.shadow,
    position: 'absolute',
    right: 0,
    left: 0,
    zIndex: 100,
  },
  topToastStyle: {
    backgroundColor: MyTheme.colors.defaultBackgroundColor,
    top: 0,
  },
  bottomToastStyle: {
    backgroundColor: MyTheme.colors.defaultBackgroundColor,
    bottom: 0,
  },
  successStyle: {},
  errorStyle: {},
});
