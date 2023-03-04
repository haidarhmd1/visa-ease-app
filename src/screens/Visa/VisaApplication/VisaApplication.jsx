import React from 'react';
import { AppHeader } from 'components/general/AppHeader';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { useIntl } from 'react-intl';
import { Card, Divider, List, Text } from 'react-native-paper';
import { PrimaryButton } from 'components/general/Buttons';
import { ROUTES } from 'res/constants/routes';
import { VisaItemButton } from './VisaItemButton';
import { StyleSheet, ScrollView, View, ImageBackground } from 'react-native';
import { MyTheme } from 'styles/theme/theme.extended';

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

export const VisaApplication = ({ navigation }) => {
  const intl = useIntl();

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="Visa Application"
      />
      <ScrollView>
        <ImageBackground
          style={styles.imageBackground}
          source={{ uri: 'https://picsum.photos/700' }}
        >
          <View style={styles.imageTextWrapper}>
            <Text
              variant="headlineLarge"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              {visaCountryData?.title}
            </Text>
          </View>
        </ImageBackground>
        <Layout>
          <StyledCard>
            <Card.Content>
              <Text variant="labelLarge" style={{ marginBottom: 8 }}>
                Information
              </Text>
              <VisaItemButton
                title="General Information"
                navigation={navigation}
                route={ROUTES.VISA_INFORMATION.generalInformation}
                isProgessCompleted
              />

              <VisaItemButton
                title="Visa Information"
                navigation={navigation}
                route={ROUTES.VISA_INFORMATION.visaInformation}
                isProgessCompleted={false}
              />

              <VisaItemButton
                title="Flight Information"
                navigation={navigation}
                route={ROUTES.VISA_INFORMATION.flightInformation}
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
              <Divider marginBottom={12} marginTop={12} />
              <Text variant="labelLarge" style={{ marginBottom: 8 }}>
                Agreement
              </Text>

              <VisaItemButton
                title="Agreement"
                navigation={navigation}
                route={ROUTES.VISA_INFORMATION.agreement}
                isProgessCompleted={false}
              />
            </Card.Content>
            <Card.Content>
              <PrimaryButton disabled> Submit </PrimaryButton>
            </Card.Content>
          </StyledCard>
          {visaCountryData?.notice ? (
            <View style={styles.informationCardWarning}>
              <Text
                variant="labelLarge"
                style={{ padding: 16, fontWeight: 'bold' }}
              >
                {intl.formatMessage({
                  id: 'visaApplication.steps.information.note',
                })}
              </Text>
              <Card.Content>
                <Text>{visaCountryData?.notice}</Text>
              </Card.Content>
            </View>
          ) : null}

          <StyledCard>
            <List.Section>
              <List.Accordion
                style={{ backgroundColor: 'white' }}
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

              <Divider marginBottom={12} marginTop={12} />
              <List.Accordion
                style={{ backgroundColor: 'white' }}
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
          </StyledCard>
        </Layout>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imageTextWrapper: {
    position: 'absolute',
    bottom: 16,
    left: '5%'
  },
  imageBackground: {
    flex: 1,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: 175,
    marginBottom: 8,
  },
  informationCardWarning: {
    backgroundColor: MyTheme.colors.primaryBackground,
    width: '100%',
    minHeight: 100,
    height: 'auto',
    marginTop: MyTheme.marginTop,
    padding: 16,
    borderRadius: MyTheme.borderRadius,
    backgroundColor: MyTheme.colors.warningBackground,
    borderWidth: 2,
    borderColor: MyTheme.colors.warningBorder,
    borderStyle: 'solid',
  }
})