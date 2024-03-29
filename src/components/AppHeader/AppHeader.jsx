import { useContext } from 'react';

import { ActivityIndicator, Appbar, Text } from 'react-native-paper';
import { Alert, Dimensions, StyleSheet, View } from 'react-native';
import { useIntl } from 'react-intl';
import AuthContext from 'provider/AuthProvider';
import { MyTheme } from 'styles/theme/theme.extended';

export const AppHeader = ({
  goBack = () => {},
  showBackButton = true,
  title,
  role,
}) => {
  const { formatMessage } = useIntl();
  const { userData, logout } = useContext(AuthContext);

  const logoutUser = () => {
    Alert.alert(
      formatMessage({ id: 'button.logout' }),
      formatMessage({ id: 'general.logoutConfirmation' }),
      [
        {
          text: formatMessage({ id: 'general.yes' }),
          onPress: () => {
            logout();
          },
        },
        {
          text: formatMessage({ id: 'general.no' }),
          onPress: () => {},
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  if (!userData)
    return (
      <View testID="loading-indicator">
        <ActivityIndicator animating size="large" />
      </View>
    );

  if (role === 'main') {
    return (
      <Appbar.Header
        testID="mainAppbarHeader"
        statusBarHeight={0}
        style={[styles.backgroundWhite, { marginBottom: 8 }]}
      >
        <View>
          <Text style={styles.mainAppHeaderText} variant="headlineSmall">
            {formatMessage({ id: 'screen.main.greeting' })}
          </Text>
          <Text
            style={[styles.mainAppHeaderText, styles.fontWeightBold]}
            variant="headlineMedium"
            testID="appbarHeaderGreeting"
          >
            {userData?.fullname}
          </Text>
        </View>
        <View style={styles.mainAppHeaderActionContainer}>
          <Appbar.Action
            testID="appbar-logout"
            icon="logout"
            onPress={logoutUser}
          />
        </View>
      </Appbar.Header>
    );
  }

  if (role === 'secondary') {
    return (
      <Appbar.Header
        testID="secondaryAppbarHeader"
        style={styles.secondaryAppHeaderContainer}
      >
        {showBackButton && (
          <Appbar.Action
            icon="arrow-left"
            onPress={goBack}
            style={styles.backgroundWhite}
          />
        )}
        <Appbar.Content
          title={title}
          color={MyTheme.colors.white}
          titleStyle={MyTheme.colors.white}
        />
      </Appbar.Header>
    );
  }

  return (
    <Appbar.Header
      testID="defaultAppbarHeader"
      statusBarHeight={0}
      style={styles.backgroundWhite}
    >
      {showBackButton && <Appbar.Action icon="arrow-left" onPress={goBack} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: MyTheme.colors.defaultBackgroundColor,
  },
  mainAppHeaderText: { paddingLeft: 16 },
  fontWeightBold: { fontWeight: 'bold' },
  mainAppHeaderActionContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  secondaryAppHeaderContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
    zIndex: 1,
  },
});
