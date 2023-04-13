import React from 'react';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { useIntl } from 'react-intl';
import { Card, Divider, List, Text } from 'react-native-paper';
import { ROUTES } from 'res/constants/routes';
import { View } from 'react-native';
import { PalmImage } from 'assets/images';
import { StickyHeaderWrapper } from 'components/general/StickyHeaderWrapper';
import { VisaItemButton } from './VisaItemButton';

const visaCountryData = {
  id: 1,
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

export const VisaApplication = ({ navigation }) => {
  const intl = useIntl();
  return (
    <StickyHeaderWrapper
      navigation={navigation}
      imageSrc={PalmImage}
      floatingCardContent={
        <View style={{ marginTop: 14 }}>
          <Card.Content>
            <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
              HINWEIS:
            </Text>
            <Text style={{ marginTop: 8 }}>
              Bearbeitungszeiten von Visa sind ungewiss, jedoch bemühen wir uns,
              es vor Reiseantritt zu beschaffen. Bei Ablehnung keine Erstattung.
              Nicht konforme Dokumente = weitere Kosten oder Ablehnung.
            </Text>
          </Card.Content>
        </View>
      }
    >
      <Layout style={{ marginTop: 75 }}>
        <Text variant="labelLarge" style={{ marginBottom: 8 }}>
          Information
        </Text>

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
          isProgessCompleted
        />

        <VisaItemButton
          title="Biometic Image"
          navigation={navigation}
          route={ROUTES.VISA_INFORMATION.biometricImage}
          isProgessCompleted
        />
        <Divider marginBottom={12} marginTop={12} />
        <Text variant="labelLarge" style={{ marginBottom: 8 }}>
          Agreement
        </Text>

        <VisaItemButton
          title="Agreement"
          navigation={navigation}
          route={ROUTES.VISA_INFORMATION.agreement}
          isProgessCompleted
        />

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
    </StickyHeaderWrapper>
  );
};
