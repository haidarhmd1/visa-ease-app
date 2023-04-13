import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Layout, Spacer } from 'components/general/Layout/Layout';
import { useIntl } from 'react-intl';
import { ROUTES } from 'res/constants/routes';
import { Avatar, Card, Divider, Text } from 'react-native-paper';
import { colorPalette, MyTheme } from 'styles/theme/theme.extended';
import { PalmImage } from 'assets/images';
import { StickyHeaderWrapper } from 'components/general/StickyHeaderWrapper';

const visaCountries = [
  { id: 1, title: 'UAE', image: '' },
  { id: 2, title: 'China', image: '' },
  { id: 3, title: 'Cuba', image: '' },
];

export const IconView = ({ icon, size, title }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        width: '48%',
        height: 64,
        marginBottom: 22,
      }}
    >
      <Avatar.Icon
        icon={icon}
        size={size}
        style={{ backgroundColor: colorPalette.turquoise.tstandard }}
      />
      <Text variant="labelLarge" style={{ textAlign: 'center', marginTop: 8 }}>
        {title}
      </Text>
    </View>
  );
};

export const Visa = ({ navigation }) => {
  const intl = useIntl();

  const onPressHandler = id => {
    navigation.navigate(ROUTES.VISA_APP, {
      id,
    });
  };

  return (
    <StickyHeaderWrapper
      appBarTitle={intl.formatMessage({ id: 'visastar.home.services.visa' })}
      imageSrc={PalmImage}
      navigation={navigation}
      floatingCardContent={
        <View style={{ marginTop: 14 }}>
          <Card.Content>
            <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
              Visum für Dubai Emirate, Indien, Japan, China, u.v.m. günstig und
              schnell
            </Text>
            <Text>
              Sie benötigen ein Visum für Ihre Reise? Wir bieten einen
              Visaservice an allen Botschaften in Berlin an. Wir ermöglichen
              auch ein Express-Visum! In den meisten Fällen sogar innerhalb von
              24 Stunden.
            </Text>
          </Card.Content>
        </View>
      }
    >
      <Layout style={{ marginTop: 75 }}>
        <View>
          <Text variant="headlineSmall">Halten sie Bereit: </Text>
        </View>
        <Spacer />
        <View
          style={{
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <IconView icon="passport" size={48} title="Reisepass" />
          <IconView
            icon="airplane-marker"
            size={48}
            title="Aufenthaltserlaubnis"
          />
          <IconView
            icon="file-document-edit-outline"
            size={48}
            title="Foto (biometrisch)"
          />
          <IconView icon="send-check" size={48} title="Health Insurance" />
        </View>
        <View>
          <Spacer />
          <Divider />
          <Spacer />

          <View>
            <Text
              variant="titleLarge"
              style={{ paddingBottom: 16, marginTop: 15 }}
            >
              Apply for a Visa:
            </Text>
            {visaCountries.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  onPressHandler(item.id);
                }}
              >
                <View
                  style={{
                    height: 150,
                    marginBottom: 24,
                    position: 'relative',
                    borderRadius: 14,
                    overflow: 'hidden',
                    backgroundColor: 'black',
                  }}
                >
                  <ImageBackground
                    source={{ uri: 'https://picsum.photos/700' }}
                    style={{
                      height: 150,
                      width: '100%',
                      opacity: 0.7,
                      position: 'absolute',
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 15,
                      marginBottom: 5,
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Text
                      variant="headlineSmall"
                      style={{ color: 'white', fontWeight: 'bold' }}
                    >
                      {item.title}
                    </Text>
                    <Text variant="bodyMedium" style={{ color: 'white' }}>
                      Start your Visa Journey!
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Layout>
    </StickyHeaderWrapper>
  );
};

const styles = StyleSheet.create({
  informationCardWarning: {
    width: '100%',
    height: 'auto',
    borderRadius: MyTheme.borderRadius,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: MyTheme.colors.warningBorder,
    borderStyle: 'solid',
  },
});
