import React from 'react';
import { StyledCard } from 'components/general/Layout/Layout';
import { ROUTES } from 'res/constants/routes';
import { Avatar, Card, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useUserStore } from 'store/zustand';
import { userCredentials } from 'utils/userCredentials';

export const ProfileOverview = ({ navigation }) => {
  const user = useUserStore();
  const onPressHandler = () => {
    navigation.navigate(ROUTES.PROFILE);
  };

  return (
    <StyledCard onPress={onPressHandler}>
      <Card.Content style={styles.flexRow}>
        <Avatar.Text label={userCredentials(user.userData.fullname)} />
        <View style={styles.profileUserInfo}>
          <Text variant="titleLarge">{user.userData.fullname}</Text>
          <Text style={styles.profileSubTitle} variant="labelSmall">
            {user.userData.email}
          </Text>
        </View>
        <AntDesign style={styles.arrowRight} name="right" size={18} />
      </Card.Content>
    </StyledCard>
  );
};

const styles = StyleSheet.create({
  profileSubTitle: {
    color: '#a3a3a3',
  },
  profileUserInfo: {
    marginLeft: 18,
  },
  arrowRight: {
    color: '#a3a3a3',
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  flexRow: { flexDirection: 'row' },
});
