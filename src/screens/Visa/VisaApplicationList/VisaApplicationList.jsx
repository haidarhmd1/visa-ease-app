import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spacer } from 'components/general/Layout/Layout';
import { useIntl } from 'react-intl';
import { ActivityIndicator, Badge, List, Text } from 'react-native-paper';

import { SpacerDivider } from 'components/SpacerDivider';
import { useQuery } from 'react-query';
import { getAllVisaApplicationByUser } from 'network/api';
import { MyTheme } from 'styles/theme/theme.extended';
import { AntDesign } from '@expo/vector-icons';
import { ROUTES } from 'res/constants/routes';
import { useVisaStatus } from 'utils/useVisaStatus';
import { badgeProcess } from 'utils/BadgeStatus';

export const VisaApplicationList = ({ navigation }) => {
  const { visaStatus } = useVisaStatus();
  const { formatMessage } = useIntl();

  const { data: visaApplications, isLoading } = useQuery(
    'getAllVisaApplications',
    getAllVisaApplicationByUser
  );

  if (isLoading) return <ActivityIndicator size="large" />;

  const moveToVisaScreenHandler = visaId => {
    navigation.navigate(ROUTES.VISA_APP, {
      visaId,
    });
  };

  return visaApplications?.data.length > 0 ? (
    <View>
      <SpacerDivider />
      <Text variant="bodyLarge">
        {formatMessage({ id: 'screen.visa.visaApplicationList.title' })}
      </Text>
      <Spacer />
      {visaApplications.data.map(applications => {
        return (
          <List.Item
            key={applications.id}
            style={[styles.padding, styles.list]}
            onPress={() => moveToVisaScreenHandler(applications.id)}
            title={applications.country.toUpperCase()}
            description={visaStatus(applications.status)}
            // eslint-disable-next-line react/no-unstable-nested-components
            left={() => (
              <Badge style={styles.badgeStyle(applications)} size={8} />
            )}
            // eslint-disable-next-line react/no-unstable-nested-components
            right={() => (
              <AntDesign style={styles.alignCenter} name="right" size={14} />
            )}
          />
        );
      })}
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  padding: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: MyTheme.colors.primaryBrand,
  },
  cardContent: {
    flexDirection: 'row',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'space-between',
  },
  cardContentTextArrow: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  alignCenter: {
    alignSelf: 'center',
  },
  marginRight: {
    marginRight: 12,
  },
  row: {
    flexDirection: 'row',
  },
  list: {
    borderWidth: 1,
    marginBottom: 8,
    borderColor: MyTheme.colors.primaryBrand,
    borderRadius: 12,
  },
  badgeStyle: applications => {
    return {
      backgroundColor: badgeProcess(applications.status),
      alignSelf: 'center',
    };
  },
});
