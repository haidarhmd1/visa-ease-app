import React from 'react';
import { StyledCard } from 'components/general/Layout/Layout';
import { Divider, Text } from 'react-native-paper';
import { VisaItemButton } from 'screens/Visa/VisaApplication/VisaItemButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from 'res/constants/routes';

export const ProfileName = () => {
  const navigation = useNavigation();

  return (
    <StyledCard>
      <StyledCard.Content>
        <Text variant="labelLarge" style={{ marginBottom: 8 }}>
          Information
        </Text>
        <VisaItemButton
          title="General Information"
          navigation={navigation}
          route={ROUTES.VISA_INFORMATION.generalInformation}
          isProgessCompleted
        />
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
      </StyledCard.Content>
    </StyledCard>
  );
};
