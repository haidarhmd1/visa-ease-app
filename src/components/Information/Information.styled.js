import { StyleSheet } from 'react-native';
import { MyTheme } from 'styles/theme/theme.extended';

export const styles = StyleSheet.create({
  cardItemWrapper: {
    backgroundColor: MyTheme.colors.primaryBackground,
    width: '100%',
    height: 250,
    position: 'relative'
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: 175,
    marginBottom: 8
  },
  informationCard: {
    backgroundColor: MyTheme.colors.primaryBackground,
    width: '100%',
    minHeight: 100,
    height: 'auto',
    marginTop: MyTheme.marginTop,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 21,
    borderRadius: MyTheme.borderRadius
  },
  warningInformationCard: {
    backgroundColor: MyTheme.colors.primaryBackground,
    width: '100%',
    minHeight: 100,
    height: 'auto',
    marginTop: MyTheme.marginTop,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 21,
    borderRadius: MyTheme.borderRadius,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: MyTheme.colors.warningBorder,
    backgroundColor: MyTheme.colors.warningBackground,
    marginTop: 0,
    marginBottom: 8,
  },
  imageTextWrapper: {
    position: 'absolute',
    bottom: 16,
    left: '5%',
  }
})