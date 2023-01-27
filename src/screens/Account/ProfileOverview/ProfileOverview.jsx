import React from 'react';
import { StyledCard } from 'components/general/Layout/Layout';
import { ROUTES } from 'res/constants/routes';
import { Avatar, Text } from 'react-native-paper';
import {
  ArrowRight,
  ProfileSubTitle,
  ProfileUserInfo,
} from '../Account.styled';

export const ProfileOverview = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate(ROUTES.PROFILE);
  };
  return (
    <StyledCard onPress={onPressHandler}>
      <StyledCard.Content style={{ flexDirection: 'row' }}>
        <Avatar.Text label="HH" />
        <ProfileUserInfo>
          <Text variant="titleLarge">Test</Text>
          <ProfileSubTitle variant="labelSmall">Test@test.com</ProfileSubTitle>
        </ProfileUserInfo>
        <ArrowRight name="right" size={18} />
      </StyledCard.Content>
    </StyledCard>
  );
};
