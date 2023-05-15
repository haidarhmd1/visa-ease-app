import React from 'react';
import { AppHeader } from 'components/AppHeader';
import { Layout, StyledScrollView } from 'components/Layout/Layout';
import { TouchableWithoutFeedback, View } from 'react-native';
import { HomeHeroView } from 'screens/Home/HomeHeroView';
import { VisaApplicationList } from 'components/VisaApplicationList';
import { useIntl } from 'react-intl';
import { ServiceItems } from './ServiceItems';

export const Home = ({ navigation }) => {
  const { formatMessage } = useIntl();
  return (
    <View style={{ flex: 1 }}>
      <AppHeader navigation={navigation} role="main" />
      <HomeHeroView />
      <StyledScrollView>
        <TouchableWithoutFeedback>
          <Layout>
            <ServiceItems navigation={navigation} />
            <VisaApplicationList
              title={formatMessage({ id: 'home.visa.history.title' })}
              navigation={navigation}
            />
          </Layout>
        </TouchableWithoutFeedback>
      </StyledScrollView>
    </View>
  );
};
