import React from 'react';
import { View } from 'react-native';
import { DubaiCardImage } from 'assets/images';
import { TouchableCard } from 'components/general/TouchableCard';
import { ROUTES } from 'res/constants/routes';

export const VisumApplyList = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate(ROUTES.VISA_APP);
  };

  return (
    <View>
      <TouchableCard
        isFullWidth={false}
        backgroundImage={DubaiCardImage}
        Title="Dubai"
        onPress={onPressHandler}
      />
    </View>
  );
};
