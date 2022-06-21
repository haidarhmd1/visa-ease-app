import React from 'react';
import { ScrollView } from 'react-native';
import { ImageSlider } from 'components/home/imageSlider';
import { VisumApplyList } from 'components/home/HorizontalBoxStack';
import { SectionHeader } from 'components/general/SectionHeader';
import { Layout } from 'components/general/Layout/Layout';

export const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <Layout>
        <ImageSlider />
        <SectionHeader title="Visum" />
        <VisumApplyList navigation={navigation} />
      </Layout>
    </ScrollView>
  );
};
