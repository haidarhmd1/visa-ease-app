import React from 'react';
import { AppHeader } from 'components/general/AppHeader';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { useIntl } from 'react-intl';
import { ScrollView } from 'react-native';
import { Divider, List, Text } from 'react-native-paper';
import { PrimaryButton } from 'components/general/Buttons';
import { ROUTES } from 'res/constants/routes';
import {
  ImageTextWrapper,
  StyledImageBackground,
  StyledWarningInformationCard,
} from './steps/Information/Information.styled';

const visaCountryData = {
  id: 1,
  title: 'UAE',
  notice: `Die Bearbeitungszeiten bei den Behörden/ Konsulaten können naturgemäß nicht garantiert werden, jedoch stehen wir in engem Kontakt und setzen alles daran Ihr Visum rechtzeitig vor Reiseantritt zur Verfügung stellen zu können. Die Gebühren können bei Ablehnung nicht erstattet werden. Sollten Ihre Dokumente nicht den Vorgaben entsprechen, können weitere Kosten zur weiteren Bearbeitung anfallen/ oder die Bearbeitung des Visaantrages kann nicht fortgeführt werden.`,
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

const ProgessSuccess = properties => (
  <List.Icon icon="progress-check" color="green" />
);
const ProgessPending = properties => (
  <List.Icon icon="progress-pencil" color="lightgray" />
);

export const VisaApplication = ({ navigation }) => {
  const intl = useIntl();

  const onPressHandler = route => navigation.navigate(route);

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="Visa Application"
      />
      <ScrollView>
        <StyledImageBackground
          style={{ backgroundColor: 'lightgrey' }}
          source={{ uri: 'https://picsum.photos/700' }}
        >
          <ImageTextWrapper>
            <Text
              variant="headlineLarge"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              {visaCountryData?.title}
            </Text>
          </ImageTextWrapper>
        </StyledImageBackground>
        <Layout>
          <StyledCard>
            <StyledCard.Content>
              <List.Section>
                <List.Subheader>Information</List.Subheader>
                <List.Item
                  onPress={() =>
                    onPressHandler(ROUTES.VISA_INFORMATION.generalInformation)
                  }
                  title="General Information"
                  left={ProgessSuccess}
                />
                <Divider />
                <List.Item
                  onPress={() =>
                    onPressHandler(ROUTES.VISA_INFORMATION.visaInformation)
                  }
                  title="Visa Information"
                  left={ProgessPending}
                />
                <Divider />
                <List.Item
                  onPress={() =>
                    onPressHandler(ROUTES.VISA_INFORMATION.flightInformation)
                  }
                  title="Flight Information"
                  left={ProgessPending}
                />
              </List.Section>
              <List.Section>
                <List.Subheader>Dokumente</List.Subheader>
                <List.Item
                  onPress={() =>
                    onPressHandler(ROUTES.VISA_INFORMATION.passportPicture)
                  }
                  title="Passport Picture"
                  left={ProgessPending}
                />
                <Divider />
                <List.Item
                  onPress={() =>
                    onPressHandler(ROUTES.VISA_INFORMATION.residencePermit)
                  }
                  title="Aufenthaltserlaubnis"
                  left={ProgessPending}
                />
                <Divider />
                <List.Item
                  onPress={() =>
                    onPressHandler(ROUTES.VISA_INFORMATION.biometricImage)
                  }
                  title="Biometic Image"
                  left={ProgessPending}
                />
              </List.Section>
              <List.Section>
                <List.Subheader>Agreement</List.Subheader>
                <List.Item
                  onPress={() =>
                    onPressHandler(ROUTES.VISA_INFORMATION.agreement)
                  }
                  title="Agreement"
                  left={ProgessPending}
                />
              </List.Section>
            </StyledCard.Content>
            <StyledCard.Content>
              <PrimaryButton disabled> Submit </PrimaryButton>
            </StyledCard.Content>
          </StyledCard>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          {visaCountryData?.notice ? (
            <StyledWarningInformationCard>
              <Text
                variant="labelLarge"
                style={{ padding: 16, fontWeight: 'bold' }}
              >
                {intl.formatMessage({
                  id: 'visaApplication.steps.information.note',
                })}
              </Text>
              <StyledCard.Content>
                <Text>{visaCountryData?.notice}</Text>
              </StyledCard.Content>
            </StyledWarningInformationCard>
          ) : null}
          <Divider style={{ marginTop: 16 }} />

          <StyledCard>
            <StyledCard.Content>
              <List.Section>
                <List.Accordion
                  title={intl.formatMessage({
                    id: 'visaApplication.steps.information.infoTitle',
                  })}
                >
                  <List.Item
                    descriptionNumberOfLines={100}
                    title=""
                    description={visaCountryData?.information}
                  />
                </List.Accordion>

                <List.Accordion
                  title={intl.formatMessage({
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
            </StyledCard.Content>
          </StyledCard>
          <Divider style={{ marginTop: 16 }} />
        </Layout>
      </ScrollView>
    </>
  );
};
