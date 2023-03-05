import React from 'react';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { PrimaryButton } from 'components/general/Buttons';
import { useIntl } from 'react-intl';
import { Card, Divider, Text } from 'react-native-paper';
import { ImageBackground, View } from 'react-native';
import { styles } from './Information.styled';

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

export const Information = ({ next }) => {
  const intl = useIntl();

  return (
    <>
      <ImageBackground
        style={[styles.imageBackground, { backgroundColor: 'lightgrey' }]}
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
            {visaCountryData?.notice ? (
              <View style={styles.warningInformationCard}>
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
            <Divider style={{ marginTop: 24 }} />
            {visaCountryData?.information ? (
              <StyledCard>
                <Text
                  variant="labelLarge"
                  style={{ padding: 16, fontWeight: 'bold' }}
                >
                  {intl.formatMessage({
                    id: 'visaApplication.steps.information.infoTitle',
                  })}
                </Text>

                <Card.Content>
                  <Text>{visaCountryData?.information}</Text>
                </Card.Content>
              </StyledCard>
            ) : null}
            <Divider style={{ marginTop: 21 }} />
            {visaCountryData?.what_we_need ? (
              <StyledCard>
                <Text
                  variant="labelLarge"
                  style={{ padding: 16, fontWeight: 'bold' }}
                >
                  {intl.formatMessage({
                    id: 'visaApplication.steps.information.whatWeNeedBox.title',
                  })}
                </Text>
                <Card.Content>
                  <Text>{visaCountryData?.what_we_need}</Text>
                </Card.Content>
              </StyledCard>
            ) : null}
            <Divider style={{ marginTop: 21 }} />
            <StyledCard>
              <Text
                variant="labelLarge"
                style={{ padding: 16, fontWeight: 'bold' }}
              >
                {intl.formatMessage({
                  id: 'visaApplication.steps.information.processing.title',
                })}
              </Text>
              <Card.Content>
                <PrimaryButton
                  mode="contained"
                  style={{ marginBottom: 10 }}
                  onPress={() =>
                    next({
                      visaType: 'express',
                      selectedCountry: visaCountryData?.slug,
                    })
                  }
                >
                  {intl.formatMessage({
                    id: 'visaApplication.general.visaType.express',
                  })}
                </PrimaryButton>
                <PrimaryButton
                  mode="contained"
                  onPress={() =>
                    next({
                      visaType: 'standard',
                      selectedCountry: visaCountryData?.slug,
                    })
                  }
                >
                  {intl.formatMessage({
                    id: 'visaApplication.general.visaType.standard',
                  })}
                </PrimaryButton>
              </Card.Content>
            </StyledCard>
          </Card.Content>
        </StyledCard>
      </Layout>
    </>
  );
};
