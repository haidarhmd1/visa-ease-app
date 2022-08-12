import React from 'react';
import { ScrollView } from 'react-native';
import { SectionHeader } from 'components/general/SectionHeader';
import { Layout } from 'components/general/Layout/Layout';
import { Header } from 'components/general/Header';
import { VisumApplyCard } from './VisumApplyCard';

export const Home = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} isMain />
      <ScrollView>
        <Layout>
          <SectionHeader title="Visum" />
          <VisumApplyCard navigation={navigation} />
        </Layout>
      </ScrollView>
    </>
  );
};
