import React, { useRef } from 'react';
import { AppHeader } from 'components/general/AppHeader';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { useIntl } from 'react-intl';
import { Card, Divider, List, Text } from 'react-native-paper';
import { PrimaryButton } from 'components/general/Buttons';
import { ROUTES } from 'res/constants/routes';
import { StyleSheet, View, Animated } from 'react-native';
import { MyTheme } from 'styles/theme/theme.extended';
import { useAuthenticationStore } from 'store/zustand';
import { VisaItemButton } from './VisaItemButton';

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

const BANNER_H = 350;
export const VisaApplication = ({ navigation }) => {
  const intl = useIntl();
  const scrollA = useRef(new Animated.Value(0)).current;
  const userId = useAuthenticationStore(state => state.id);

  // const { data: completedList } = useQuery(['getCompletedLists', userId], () =>
  //   getCompletedLists(userId)
  // );
  // console.log(Object.keys(completedList.data).length);
  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="Visa Application"
      />
      <Animated.ScrollView
        style={{
          backgroundColor: 'white',
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={{ uri: 'https://picsum.photos/700' }}
          />
          <View style={styles.imageTextWrapper}>
            <Text
              variant="headlineLarge"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              {visaCountryData?.title}
            </Text>
          </View>
        </View>
        <Layout>
          <Text variant="labelLarge" style={{ marginBottom: 8 }}>
            Information
          </Text>

          {/* <VisaItemButton
            title="Visa Information"
            navigation={navigation}
            route={ROUTES.VISA_INFORMATION.visaInformation}
            isProgessCompleted
          /> */}

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
      </Animated.ScrollView>
      <Card mode="elevated" style={{ backgroundColor: 'white' }}>
        <Card.Content>
          <PrimaryButton disabled>Submit</PrimaryButton>
        </Card.Content>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  imageTextWrapper: {
    position: 'absolute',
    bottom: 16,
    left: '5%',
  },
  imageBackground: {
    flex: 1,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: 175,
    marginBottom: 8,
  },
  informationCardWarning: {
    width: '100%',
    minHeight: 100,
    height: 'auto',
    marginTop: 8,
    marginBottom: MyTheme.marginBottom,
    // padding: 16,
    paddingBottom: 16,
    borderRadius: MyTheme.borderRadius,
    backgroundColor: MyTheme.colors.defaultBackgroundColor,
    borderWidth: 1,
    borderColor: MyTheme.colors.warningBorder,
    borderStyle: 'solid',
  },
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 900,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
});
