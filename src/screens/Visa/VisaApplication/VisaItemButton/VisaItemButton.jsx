import React from 'react';
import { Button, List } from 'react-native-paper';
import { colorPalette } from 'styles/theme/theme.extended';

const ProgessSuccess = () => <List.Icon icon="progress-check" color="green" />;
const ProgessPending = () => (
  <List.Icon icon="progress-pencil" color="lightgray" />
);

const onPressHandler = (route, navigation) => navigation.navigate(route);

export const VisaItemButton = ({
  route,
  navigation,
  title,
  isProgessCompleted = false,
}) => {
  return (
    <Button
      style={{
        color: 'black',
        marginBottom: 14,
      }}
      buttonColor={colorPalette.gray.g50}
      contentStyle={{
        justifyContent: 'flex-start',
      }}
      textColor="black"
      onPress={() => onPressHandler(route, navigation)}
      icon={isProgessCompleted ? ProgessSuccess : ProgessPending}
    >
      {title}
    </Button>
  );
};
