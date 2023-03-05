import React from 'react';
import { Spacer, StyledCard } from 'components/general/Layout/Layout';
import { Card, Divider, Text } from 'react-native-paper';
import { VisaItemButton } from 'screens/Visa/VisaApplication/VisaItemButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from 'res/constants/routes';
import { Button, StyleSheet, View } from 'react-native';
import { ProfileEditIllustration } from 'assets/illustrations';
import { Image } from 'expo-image';

const onPressHandler = (route, navigation) => navigation.navigate(route);

const blurhash = '00Q12z';

export const ProfileDetails = () => {
  const navigation = useNavigation();

  return (
    <StyledCard>
      <Card.Content>
        <Text variant="headlineSmall" style={{ marginBottom: 8 }}>
          Profile Details
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
            <Text variant="labelLarge">Fullname: </Text>
            <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
              test
            </Text>
            <Spacer />
            <Divider />
            <Spacer />
            <Text variant="labelLarge">Email Address: </Text>
            <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
              test
            </Text>
            <Spacer />
            <Divider />
            <Spacer />
            <Text variant="labelLarge">Date of Birth: </Text>
            <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
              test
            </Text>
            <Spacer />
            <Divider />
            <Spacer />
            <Text variant="labelLarge">Address: </Text>
            <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
              test
            </Text>
            <Spacer />
            <Divider />
            <Spacer />
            <View style={{ alignSelf: 'flex-end' }}>
              <Button
                title="Edit"
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
          Dokumente
        </Text>
        <VisaItemButton
          title="Passport Picture"
          navigation={navigation}
          route={ROUTES.VISA_INFORMATION.passportPicture}
          isProgessCompleted
        />

        <VisaItemButton
          title="Aufenthaltserlaubnis"
          navigation={navigation}
          route={ROUTES.VISA_INFORMATION.residencePermit}
          isProgessCompleted={false}
        />

        <VisaItemButton
          title="Biometic Image"
          navigation={navigation}
          route={ROUTES.VISA_INFORMATION.biometricImage}
          isProgessCompleted={false}
        />
      </Card.Content>
    </StyledCard>
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
