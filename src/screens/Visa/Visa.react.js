import React from 'react';
import { useQuery } from 'react-query';
import { ScrollView, Text, View } from 'react-native';
import { Layout } from 'components/general/Layout/Layout';
import { Header } from 'components/general/Header';
import { useIntl } from 'react-intl';
import { getVisaCountries } from 'network/api';
import { TouchableCard } from 'components/general/TouchableCard';
import { ROUTES } from 'res/constants/routes';
import { Loader } from 'components/general/Loader';

export const Visa = ({ navigation }) => {
  const intl = useIntl();

  const { data: visaCountries, isLoading, error } = useQuery(
    ['visaCountries'],
    getVisaCountries
  );

  const onPressHandler = id => {
    navigation.navigate(ROUTES.VISA_APP, {
      id,
    });
  };

  if (isLoading) return <Loader />;
  if (error)
    return (
      <View>
        <Text>Error...</Text>
      </View>
    );

  return (
    <>
      <Header
        goBack={() => navigation.goBack()}
        title="Visa"
        navigation={navigation}
      />
      <ScrollView>
        <Layout>
          <View>
            {visaCountries?.map(vCountry => {
              const imageUrl = vCountry.better_featured_image.source_url;
              return (
                <TouchableCard
                  key={vCountry.id}
                  backgroundImage={imageUrl}
                  title={vCountry.title.rendered}
                  description={intl.formatMessage({
                    id: 'home.visa.applyCard.description',
                  })}
                  onPress={() => onPressHandler(vCountry.id)}
                />
              );
            })}
          </View>
        </Layout>
      </ScrollView>
    </>
  );
};
