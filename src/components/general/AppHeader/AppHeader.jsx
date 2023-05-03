import React from 'react';

import { ROUTES } from 'res/constants/routes';
import { Appbar, Text } from 'react-native-paper';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useUserStore } from 'store/zustand';
import { useIntl } from 'react-intl';

export const AppHeader = ({ goBack = () => {}, title, navigation, role }) => {
  const { formatMessage } = useIntl();
  const userInfo = useUserStore();
  const onProfileHandler = () => {
    navigation.navigate(ROUTES.ACCOUNT);
  };

  if (role === 'main') {
    return (
      <Appbar.Header statusBarHeight={0} style={styles.backgroundWhite}>
        <Text style={styles.mainAppHeaderText} variant="headlineSmall">
          {formatMessage({ id: 'screen.main.greeting' })}{' '}
          {userInfo.userData.fullname}
        </Text>
        <View style={styles.mainAppHeaderActionContainer}>
          <Appbar.Action icon="cog-outline" onPress={onProfileHandler} />
        </View>
      </Appbar.Header>
    );
  }

  if (role === 'secondary') {
    return (
      <Appbar.Header style={styles.secondaryAppHeaderContainer}>
        <Appbar.Action
          icon="arrow-left"
          onPress={goBack}
          style={styles.backgroundWhite}
        />
        <Appbar.Content
          title={title}
          color="white"
          titleStyle={styles.colorWhite}
        />
      </Appbar.Header>
    );
  }

  return (
    <Appbar.Header statusBarHeight={0} style={styles.backgroundWhite}>
      <Appbar.Action icon="arrow-left" onPress={goBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: 'white',
  },
  mainAppHeaderText: { fontWeight: 'bold', paddingLeft: 16 },
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
  colorWhite: {
    color: 'white',
  },
});
