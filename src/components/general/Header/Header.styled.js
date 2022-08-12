import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { TitleBold } from '../Typography/Typography';

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  border-radius: 50px;
  padding: 12px;
  background-color: whitesmoke;
`;

export const StyledHeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  padding: 12px 5%;
`;

export const StyledText = styled(TitleBold)`
  width: auto;
  margin: auto;
  font-size: 17px;
  align-self: center;
  justify-content: center;
`;

export const HeaderLogo = styled.Image`
  width: 120;
  height: 25;
  align-self: center;
`;
