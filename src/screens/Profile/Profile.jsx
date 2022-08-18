import React from 'react';
import {
  HeadlineBold,
  TitleBold,
} from 'components/general/Typography/Typography';
import { Header } from 'components/general/Header';
import { ScrollView } from 'react-native';
import {
  Avatar,
  AvatarInitials,
  Layout,
  TouchableCardOpacity,
} from 'components/general/Layout/Layout';
import { AntDesign } from '@expo/vector-icons';
import {
  ArrowRight,
  ProfileCardWrapper,
  ProfileSubTitle,
  ProfileUserInfo,
} from './Profile.styled';

export const Profile = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} title="Account" />
      <ScrollView>
        <Layout>
          <HeadlineBold> Profile </HeadlineBold>
          <TouchableCardOpacity>
            <Avatar>
              <AvatarInitials> HH </AvatarInitials>
            </Avatar>
            <ProfileUserInfo>
              <TitleBold>Test</TitleBold>
              <ProfileSubTitle>Test@test.com</ProfileSubTitle>
            </ProfileUserInfo>
            <ArrowRight name="right" size={18} />
          </TouchableCardOpacity>
        </Layout>
      </ScrollView>
    </>
  );
};
