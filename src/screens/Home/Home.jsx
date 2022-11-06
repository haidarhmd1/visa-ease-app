import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SectionHeader } from 'components/general/SectionHeader';
import { Layout } from 'components/general/Layout/Layout';
import { Header } from 'components/general/Header';
import { useIntl } from 'react-intl';
import { getVisaCountries } from 'network/api';
import { VisumApplyCard } from './VisumApplyCard';

export const Home = ({ navigation }) => {
  const intl = useIntl();
  const [loading, isLoading] = useState(true);
  const [visaCountries, setVisaCountries] = useState();

  useEffect(() => {
    async function getData() {
      const visa = await getVisaCountries();
      setVisaCountries(visa);
      isLoading(false);
    }
    getData();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <Header navigation={navigation} isMain />
      <ScrollView>
        <Layout>
          <SectionHeader
            title={intl.formatMessage({ id: 'home.sectionHeader.title' })}
          />
          <VisumApplyCard
            visaCountries={visaCountries}
            navigation={navigation}
          />
        </Layout>
      </ScrollView>
    </>
  );
};
