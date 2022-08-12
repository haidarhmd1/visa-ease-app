import React from 'react';
import {
  SubHeadline,
  SubHeadlineBold,
} from 'components/general/Typography/Typography';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
  StyledImage,
  StyledTouchableOpacity,
  TextWrapper,
} from './TouchableCard.styled';

export const TouchableCard = ({
  backgroundImage,
  Title,
  isFullWidth = true,
  onPress,
}) => {
  return (
    <StyledTouchableOpacity isFullWidth onPress={onPress}>
      <StyledImage source={backgroundImage} />
      <TextWrapper>
        <View style={{ flex: 1 }}>
          <SubHeadlineBold>{Title}</SubHeadlineBold>
          <SubHeadline>
            Apply for a Visa in either Express or Standard
          </SubHeadline>
        </View>
        <AntDesign
          name="rightcircleo"
          size={24}
          color="#00BF80"
          style={{ alignSelf: 'center' }}
        />
      </TextWrapper>
    </StyledTouchableOpacity>
  );
};
