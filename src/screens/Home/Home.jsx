import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { SectionHeader } from 'components/general/SectionHeader';
import { Layout } from 'components/general/Layout/Layout';
import { Header } from 'components/general/Header';
import { useIntl } from 'react-intl';
import {
  Headline,
  SubHeadline,
} from 'components/general/Typography/Typography';
import { VisaStarHeroImage } from 'assets/images';
import { TouchableCard } from 'components/general/TouchableCard';
import { ROUTES } from 'res/constants/routes';

export const Home = ({ navigation }) => {
  const intl = useIntl();

  const onPressViaHandler = () => {
    navigation.navigate(ROUTES.VISA_HOME);
  };

  return (
    <>
      <Header navigation={navigation} isMain />
      <ScrollView>
        <Layout>
          <Image
            source={VisaStarHeroImage}
            resizeMode="cover"
            style={{
              flex: 1,
              width: '100%',
              height: 150,
              overflow: 'hidden',
              borderRadius: 8,
              marginBottom: 25,
            }}
          />
          <View>
            <Headline>
              {intl.formatMessage({ id: 'visastar.home.welcome.title' })}
            </Headline>
            <SubHeadline
              style={{ marginTop: 25, lineHeight: 20, marginBottom: 25 }}
            >
              {intl.formatMessage({ id: 'visastar.home.welcome.description' })}
            </SubHeadline>
            <SubHeadline>
              {intl.formatMessage({
                id: 'visastar.home.welcome.subDescription',
              })}
            </SubHeadline>
          </View>
          <SectionHeader
            title={intl.formatMessage({
              id: 'visastar.home.services.headline',
            })}
          />
          <TouchableCard title="Visum" onPress={onPressViaHandler} />
          <TouchableCard title="Legalisierung" />
        </Layout>
      </ScrollView>
    </>
  );
};
