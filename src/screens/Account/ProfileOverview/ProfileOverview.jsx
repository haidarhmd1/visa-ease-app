import React from 'react';
import { StyledCard } from 'components/general/Layout/Layout';
import { ROUTES } from 'res/constants/routes';
import { Avatar, Card, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const ProfileOverview = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate(ROUTES.PROFILE);
  };
  return (
    <StyledCard onPress={onPressHandler}>
      <Card.Content style={{ flexDirection: 'row' }}>
        <Avatar.Text label="HH" />
        <View style={styles.profileUserInfo}>
          <Text variant="titleLarge">Test</Text>
          <Text style={styles.profileSubTitle} variant="labelSmall">Test@test.com</Text>
        </View>
        <AntDesign style={styles.arrowRight} name="right" size={18} />
      </Card.Content>
    </StyledCard>
  );
};

const styles = StyleSheet.create({
  profileSubTitle: {
    color: '#a3a3a3'
  },
  profileUserInfo: {
    marginLeft: 18
  },
  arrowRight: {
    color: '#a3a3a3',
    alignSelf: 'center',
    marginLeft: 'auto'
  }
})