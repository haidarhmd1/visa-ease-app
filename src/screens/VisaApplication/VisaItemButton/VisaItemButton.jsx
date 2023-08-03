import React from 'react';
import { Button, List } from 'react-native-paper';
import { MyTheme } from 'styles/theme/theme.extended';

const ProgessSuccess = () => <List.Icon icon="progress-check" color="green" />;
const ProgessPending = () => (
  <List.Icon icon="progress-pencil" color="lightgray" />
);

const onPressHandler = (route, navigation, visaId, visaItem) =>
  navigation.navigate(route, {
    visaId,
    item: visaItem,
  });

export const VisaItemButton = ({
  route,
  navigation,
  title,
  visaId = '',
  isProgessCompleted = false,
  visaItem = {},
}) => {
  return (
    <Button
      style={{
        color: MyTheme.colors.black,
        marginBottom: 14,
      }}
      buttonColor={MyTheme.colors.disabled}
      contentStyle={{
        justifyContent: 'flex-start',
      }}
      textColor={MyTheme.colors.black}
      onPress={() => onPressHandler(route, navigation, visaId, visaItem)}
      icon={isProgessCompleted ? ProgessSuccess : ProgessPending}
    >
      {title}
    </Button>
  );
};
