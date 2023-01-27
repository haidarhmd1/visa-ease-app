import React from 'react';
import { ScrollView, View } from 'react-native';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { AppHeader } from 'components/general/AppHeader';
import { useIntl } from 'react-intl';
import { ROUTES } from 'res/constants/routes';
import { ArrowRight } from 'screens/Account/Account.styled';

const visaCountries = [
  { id: 1, title: 'UAE', image: '' },
  { id: 2, title: 'China', image: '' },
  { id: 3, title: 'Cuba', image: '' },
];
const RightContent = properties => (
  <ArrowRight {...properties} name="right" size={18} />
);

export const Visa = ({ navigation }) => {
  const intl = useIntl();

  const onPressHandler = id => {
    navigation.navigate(ROUTES.VISA_APP, {
      id,
    });
  };

  return (
    <>
      <AppHeader
        goBack={() => navigation.goBack()}
        title={intl.formatMessage({ id: 'visastar.home.services.visa' })}
        navigation={navigation}
      />
      <ScrollView>
        <Layout>
          <View>
            {visaCountries?.map(vCountry => {
              return (
                <StyledCard
                  key={vCountry.id}
                  onPress={() => onPressHandler(vCountry.id)}
                >
                  <StyledCard.Content
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <StyledCard.Cover
                      style={{ width: 100, height: 100 }}
                      source={{ uri: 'https://picsum.photos/700' }}
                    />
                    <StyledCard.Title
                      style={{ flex: 1 }}
                      title={vCountry.title}
                      subtitle={intl.formatMessage({
                        id: 'home.visa.applyCard.description',
                      })}
                      right={RightContent}
                    />
                  </StyledCard.Content>
                </StyledCard>
              );
            })}
          </View>
        </Layout>
      </ScrollView>
    </>
  );
};
