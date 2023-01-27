import React from 'react';
import { AppHeader } from 'components/general/AppHeader';
import { Layout, StyledScrollView } from 'components/general/Layout/Layout';
import { Header } from './Header';
import { ServiceItems } from './ServiceItems';

export const Home = ({ navigation }) => {
  return (
    <>
      <AppHeader navigation={navigation} role="main" />
      <StyledScrollView>
        <Layout>
          <Header />
          <ServiceItems navigation={navigation} />
        </Layout>
      </StyledScrollView>
    </>
  );
};
