import React from 'react';
import { Button, List } from 'react-native-paper';

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
      mode="outlined"
      style={{
        borderRadius: 10,
        borderColor: 'lightgrey',
        color: 'black',
        marginBottom: 14,
      }}
      buttonColor="white"
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
