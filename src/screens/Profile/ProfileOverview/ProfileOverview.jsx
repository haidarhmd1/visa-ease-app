import React from 'react';
import { TitleBold } from 'components/general/Typography/Typography';
import {
  Avatar,
  AvatarInitials,
  TouchableCardOpacity,
} from 'components/general/Layout/Layout';
import { ROUTES } from 'res/constants/routes';
import {
  ArrowRight,
  ProfileSubTitle,
  ProfileUserInfo,
} from '../Profile.styled';

export const ProfileOverview = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate(ROUTES.ACCOUNT);
  };
  return (
    <TouchableCardOpacity onPress={onPressHandler}>
      <Avatar>
        <AvatarInitials> HH </AvatarInitials>
      </Avatar>
      <ProfileUserInfo>
        <TitleBold>Test</TitleBold>
        <ProfileSubTitle>Test@test.com</ProfileSubTitle>
      </ProfileUserInfo>
      <ArrowRight name="right" size={18} />
    </TouchableCardOpacity>
  );
};
