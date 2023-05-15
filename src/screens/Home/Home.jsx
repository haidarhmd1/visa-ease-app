import React from 'react';
import { AppHeader } from 'components/general/AppHeader';
import { Layout, StyledScrollView } from 'components/general/Layout/Layout';
import { TouchableWithoutFeedback, View } from 'react-native';
import { HomeHeroView } from 'components/HomeHeroView';
import { ServiceItems } from './ServiceItems';

export const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <AppHeader navigation={navigation} role="main" />
      <HomeHeroView />
      <StyledScrollView>
        <TouchableWithoutFeedback>
          <Layout>
            <ServiceItems navigation={navigation} />
          </Layout>
        </TouchableWithoutFeedback>
      </StyledScrollView>
    </View>
  );
};
