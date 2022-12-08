import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { HeadlineBold } from '../Typography/Typography';

export const Layout = styled.View`
  margin: 5%;
`;

export const Wrapper = styled.View`
  margin: 0 5%;
`;

export const CardWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  margin-top: ${({ theme }) => theme.marginTop};
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Avatar = styled.View`
  height: 64px;
  width: 64px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background-color: ${({ theme }) => theme.colors.primaryBrand};
  border-radius: ${({ theme }) => theme.circleRadius};
`;

export const AvatarInitials = styled(HeadlineBold)`
  color: ${({ theme }) => theme.colors.primaryBackground};
`;

export const TouchableCardOpacity = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.marginTop};
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 15px;
  margin-bottom: ${({ theme }) => theme.marginBottom};
`;

export const Card = styled.View`
  width: 100%;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.marginTop};
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 15px;
  margin-bottom: ${({ theme }) => theme.marginBottom};
`;

export const StyledScrollView = styled(ScrollView)`
  background-color: ${({ theme }) => theme.colors.defaultBackgroundColor};
`;
