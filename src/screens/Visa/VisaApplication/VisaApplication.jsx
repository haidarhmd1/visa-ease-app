import React from 'react';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { useIntl } from 'react-intl';
import { ActivityIndicator, Divider, List, Text } from 'react-native-paper';
import { ROUTES } from 'res/constants/routes';
import { Alert, StyleSheet } from 'react-native';
import { PalmImage } from 'assets/images';
import { StickyHeaderWrapper } from 'components/general/StickyHeaderWrapper';
import { DangerButton } from 'components/general/Buttons';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getSingleVisaInformation, updateVisaApplication } from 'network/api';
import { VisaItemButton } from './VisaItemButton';

const visaCountryData = {
  id: '102cb0ca-9163-4230-bec0-6a50056dbc10',
  title: 'UAE',
  information: `Gültigkeit des Visa 2 Monate
    14 Tage einfache Einreise
    30 Tage einfache und mehrfache Einreise (z.B. bei einer Kreuzfahrt notwendig)
    90 Tage mehrfache Einreise (z.B. bei einer Kreuzfahrt notwendig)`,
  what_we_need: `wir benötigen eine Farbkopie Ihres Reisepasses in guter Qualität (Reisepass muss mindestens 6 Monate gültig bei Rückreise sein)
    Kopie Aufenthaltserlaubnis
    Passbild (biometrisch)
    ausgefülltes Formular
    alle Dokumente eingescannt per E-Mail an visa@visastar.de`,
  slug: 'uae',
};

export const VisaApplication = ({ navigation, route }) => {
  const { formatMessage } = useIntl();
  const queryClient = useQueryClient();
  const { visaId } = route.params;
  const { mutate, isLoading, isError } = useMutation({
    mutationFn: data => updateVisaApplication(data, visaId),
  });

  const {
    data: singleVisaApplication,
    isLoading: isSignleVisaApplicationLoading,
  } = useQuery('getSingleVisaApplication', () =>
    getSingleVisaInformation(visaId)
  );

  const cancelVisaProcess = () => {
    Alert.alert(
      formatMessage({ id: 'general.cancel' }),
      formatMessage({ id: 'general.cancelConfirmation' }),
      [
        {
          text: formatMessage({ id: 'general.yes' }),
          onPress: () => {
            mutate({ status: 'CANCELLED' });
            queryClient.invalidateQueries({
              queryKey: ['getAllVisaApplications'],
            });
            navigation.goBack();
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

  if (isSignleVisaApplicationLoading) {
    return <ActivityIndicator animating size={12} />;
  }

  if (isError) {
    Alert.alert('Error', formatMessage({ id: 'general.error.message' }));
  }

  return (
    <StickyHeaderWrapper
      appBarTitle={formatMessage({ id: 'screen.visaApplication.title' })}
      navigation={navigation}
      imageSrc={PalmImage}
      title={singleVisaApplication?.data.country.toUpperCase()}
    >
      <Layout style={styles.marginTop(12)}>
        <Text variant="labelLarge" style={styles.marginBottom(8)}>
          {formatMessage({ id: 'visaApplication.steps.information.infoTitle' })}
        </Text>

        <VisaItemButton
          title={formatMessage({ id: 'general.flightInformation' })}
          navigation={navigation}
          route={ROUTES.VISA_INFORMATION.flightInformation}
          isProgessCompleted={singleVisaApplication?.data.FlightInformation}
          visaId={visaId}
          visaItem={singleVisaApplication?.data.FlightInformation}
        />
        <Divider marginBottom={12} marginTop={12} />
        <Text variant="labelLarge" style={styles.marginBottom(8)}>
          {formatMessage({ id: 'general.documents' })}
        </Text>
        <VisaItemButton
          title={formatMessage({ id: 'general.passportPicture' })}
          navigation={navigation}
          route={ROUTES.VISA_INFORMATION.passportPicture}
          isProgessCompleted={singleVisaApplication?.data.Documents.length > 0}
        />

        <VisaItemButton
          title={formatMessage({ id: 'general.residencePermit' })}
          navigation={navigation}
          route={ROUTES.VISA_INFORMATION.residencePermit}
          isProgessCompleted={singleVisaApplication?.data.Documents.length > 0}
        />

        <VisaItemButton
          title={formatMessage({ id: 'general.biometricImage' })}
          navigation={navigation}
          route={ROUTES.VISA_INFORMATION.biometricImage}
          isProgessCompleted={singleVisaApplication?.data.Documents.length > 0}
        />
        <Divider marginBottom={12} marginTop={12} />
        <Text variant="labelLarge" style={styles.marginBottom(8)}>
          {formatMessage({ id: 'general.agreement' })}
        </Text>

        <VisaItemButton
          title={formatMessage({ id: 'general.agreement' })}
          navigation={navigation}
          route={ROUTES.VISA_INFORMATION.agreement}
          isProgessCompleted={singleVisaApplication?.data.Agreement}
        />

        <StyledCard>
          <List.Section>
            <List.Accordion
              style={styles.backgroundWhite}
              title={formatMessage({
                id: 'visaApplication.steps.information.infoTitle',
              })}
            >
              <List.Item
                descriptionNumberOfLines={100}
                title=""
                description={visaCountryData?.information}
              />
            </List.Accordion>

            <Divider marginBottom={12} marginTop={12} />
            <List.Accordion
              style={styles.backgroundWhite}
              title={formatMessage({
                id: 'visaApplication.steps.information.whatWeNeedBox.title',
              })}
            >
              <List.Item
                descriptionNumberOfLines={100}
                title=""
                description={visaCountryData?.what_we_need}
              />
            </List.Accordion>
          </List.Section>
        </StyledCard>
        <DangerButton isLoading={isLoading} onPress={cancelVisaProcess}>
          {formatMessage({ id: 'screen.visaApplication.cancel.visa' })}
        </DangerButton>
      </Layout>
    </StickyHeaderWrapper>
  );
};

const styles = StyleSheet.create({
  marginTop: units => ({ marginTop: units }),
  marginBottom: units => ({ marginBottom: units }),
  backgroundWhite: { backgroundColor: 'white' },
});
