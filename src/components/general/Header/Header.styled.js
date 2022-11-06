import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TitleBold } from '../Typography/Typography';

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  border-radius: ${({ theme }) => theme.circleRadius};
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.backgroundIcon};
`;

export const StyledHeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  padding: 12px 5%;
`;

export const StyledText = styled(TitleBold)`
  margin: auto;
  font-size: ${({ theme }) => theme.fontSize.title};
`;

export const HeaderLogo = styled.Image`
  width: 120px;
  height: 25px;
  align-self: center;
`;

export const StyledUserIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.brandIcon};
`;

export const StyledBackIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.brandIcon};
`;
