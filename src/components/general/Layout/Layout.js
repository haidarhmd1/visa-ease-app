import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { MyTheme } from 'styles/theme/theme.extended';


export const Layout = ({children, ...properties}) => {
  return <View {...properties} style={styles.layout}>{children}</View>;
}

export const Wrapper = ({children, ...properties}) => {
  return <View {...properties} style={styles.layout}>{children}</View>;
}

export const Spacer = ({children, ...properties}) => {
  return <View {...properties} style={styles.spacer}>{children}</View>;
}

export const TouchableIconCardOpacity = ({children, ...properties}) => {
  return <TouchableOpacity {...properties} style={styles.touchableIconCardOpacity}>{children}</TouchableOpacity>;
}

export const StyledCard = ({children, ...properties}) => {
  return <Card {...properties} mode='contained' style={styles.card}>{children}</Card>;
}

export const StyledScrollView = ({children, style, ...properties}) => {
  return <ScrollView {...properties} style={[style, styles.scrollView]}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  layout: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8
  },
  spacer: {
    padding: 8
  },
  touchableIconCardOpacity: {
    backgroundColor: MyTheme.colors.primaryBackground,
    borderRadius: MyTheme.borderRadius,
    padding: 15,
    height: 100,
    width: '48%',
    marginBottom: 16,
  },
  card: {
    marginBottom: 8,
    backgroundColor: MyTheme.colors.primaryBackground,
  },
  scrollView: {
    backgroundColor: MyTheme.colors.defaultBackgroundColor
  }
})