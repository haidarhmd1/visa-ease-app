import React from 'react';
import { Image } from 'react-native';
import { AppHeader } from 'components/general/AppHeader';
import { Layout, StyledScrollView } from 'components/general/Layout/Layout';
import { VisaStarHeroImage } from 'assets/images';
import { Header } from './Header';
import { ServiceItems } from './ServiceItems';

export const Home = ({ navigation }) => {
  return (
    <>
      <AppHeader navigation={navigation} role="main" />
      <StyledScrollView>
        <Layout>
          {/* <Image
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
          /> */}
          <Header />
          <ServiceItems navigation={navigation} />
        </Layout>
      </StyledScrollView>
    </>
  );
};
