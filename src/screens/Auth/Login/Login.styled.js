import { StyleSheet } from 'react-native';
import { MyTheme } from 'styles/theme/theme.extended';

export const styles = StyleSheet.create({
  inputWidth: {
    width: 340,
  },
  buttonWidth: {
    width: 340,
  },
  formWrapper: { width: 340, alignItems: 'center' },
  inputMarginBottom: {
    marginBottom: 8,
  },
  center: {
    alignSelf: 'center',
  },
  centerItems: {
    alignItems: 'center',
  },
  marginBottom: {
    marginBottom: 16,
  },
  image: {
    width: 250,
    height: 250,
    backgroundColor: MyTheme.colors.defaultBackgroundColor,
  },
  forgotPasswordButton: {
    fontSize: 12,
    color: MyTheme.colors.primaryBrand,
    marginBottom: 16,
  },
});
