/* eslint-disable sonarjs/no-identical-functions */
import React from 'react';
import {
  View,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { useIntl } from 'react-intl';
import { ROUTES } from 'helpers/constants/routes';
import { List, Text } from 'react-native-paper';
import { colorPalette } from 'styles/theme/theme.extended';

const services = [
  {
    id: 1,
    title: 'visastar.home.services.visa',
    route: ROUTES.VISA_HOME,
    icon: 'file-document-multiple-outline',
  },
];

export const ServiceItems = ({ navigation }) => {
  const { formatMessage } = useIntl();

  const onPressRouteNavigationHandler = route => {
    navigation.navigate(route);
  };

  return (
    <View>
      <Text variant="titleLarge" style={{ paddingBottom: 16 }}>
        {formatMessage({ id: 'screen.main.ourServices' })}
      </Text>

      <FlatList
        horizontal
        data={services}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingBottom: 5,
        }}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            screenWidth={Dimensions.get('window')}
            onPress={() => {
              onPressRouteNavigationHandler(item.route);
            }}
          >
            <View style={styles.view}>
              <List.Icon
                icon={item.icon}
                style={{
                  justifyContent: 'center',
                  marginTop: 7,
                }}
              />
              <Text variant="labelMedium" style={styles.text}>
                {formatMessage({
                  id: item.title,
                })}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 5,
    height: 75,
    width: 120,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 14,
    backgroundColor: colorPalette.gray.g100,
  },
  text: { marginTop: 'auto', textAlign: 'center' },
});
