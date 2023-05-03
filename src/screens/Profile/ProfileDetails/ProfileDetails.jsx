import React from 'react';
import { Spacer, StyledCard } from 'components/general/Layout/Layout';
import { Card, Divider, Text } from 'react-native-paper';
import { VisaItemButton } from 'screens/Visa/VisaApplication/VisaItemButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from 'res/constants/routes';
import { Button, StyleSheet, View } from 'react-native';
import { ProfileEditIllustration } from 'assets/illustrations';
import { Image } from 'expo-image';
import { blurhash } from 'res/constants/global';
import { useUserStore } from 'store/zustand';
import { useIntl } from 'react-intl';

const onPressHandler = (route, navigation) => navigation.navigate(route);

const getFormattedDate = dataString => {
  const date = new Date(dataString);
  return date.toISOString().slice(0, 10);
};

export const ProfileDetails = () => {
  const { formatMessage } = useIntl();
  const userInfo = useUserStore();
  const navigation = useNavigation();

  return (
    <View>
      <Text variant="headlineSmall" style={{ marginBottom: 8 }}>
        {formatMessage({ id: 'screen.profile.profileDetails.title' })}
      </Text>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={styles.image}
          source={ProfileEditIllustration}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>
      <View>
        <View style={styles.layoutView}>
          <Spacer />
          <Text variant="labelLarge">
            {formatMessage({ id: 'general.fullname' })}
          </Text>
          <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
            {userInfo.userData.fullname}
          </Text>
          <Spacer />
          <Divider />
          <Spacer />
          <Text variant="labelLarge">
            {formatMessage({ id: 'general.email' })}
          </Text>
          <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
            {userInfo.userData.email}
          </Text>
          <Spacer />
          <Divider />
          <Spacer />
          <Text variant="labelLarge">
            {formatMessage({ id: 'general.dob' })}
          </Text>
          <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
            {getFormattedDate(userInfo.userData.dob)}
          </Text>
          <Spacer />
          <Divider />
          <Spacer />
          <Text variant="labelLarge">
            {formatMessage({ id: 'general.address' })}
          </Text>
          <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
            {userInfo.userData.street}, {userInfo.userData.zipCode}{' '}
            {userInfo.userData.city}
          </Text>
          <Spacer />
          <Divider />
          <Spacer />
          <View style={{ alignSelf: 'flex-end' }}>
            <Button
              title={formatMessage({ id: 'button.edit' })}
              onPress={() =>
                onPressHandler(
                  ROUTES.VISA_INFORMATION.generalInformation,
                  navigation
                )
              }
            />
          </View>
        </View>
      </View>
      <Divider marginBottom={12} marginTop={12} />
      <Text variant="labelLarge" style={{ marginBottom: 8 }}>
        {formatMessage({ id: 'general.documents' })}
      </Text>
      <VisaItemButton
        title={formatMessage({ id: 'general.passportPicture' })}
        navigation={navigation}
        route={ROUTES.VISA_INFORMATION.passportPicture}
        isProgessCompleted
      />

      <VisaItemButton
        title={formatMessage({ id: 'general.residencePermit' })}
        navigation={navigation}
        route={ROUTES.VISA_INFORMATION.residencePermit}
        isProgessCompleted={false}
      />

      <VisaItemButton
        title={formatMessage({ id: 'general.biometricImage' })}
        navigation={navigation}
        route={ROUTES.VISA_INFORMATION.biometricImage}
        isProgessCompleted={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layoutView: {
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  image: {
    width: 250,
    height: 250,
    backgroundColor: '#fff',
  },
});
