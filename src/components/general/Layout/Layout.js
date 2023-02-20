import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const Layout = styled.View`
  padding-left: 16;
  padding-right: 16;
  padding-top: 8;
  padding-bottom: 8;
`;

export const Wrapper = styled.View`
  padding-left: 16;
  padding-right: 16;
  padding-top: 8;
  padding-bottom: 8;
`;

export const Spacer = styled.View`
  padding: 8px;
`;

export const TouchableIconCardOpacity = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 15px;
  height: 100px;
  width: 48%;
  margin-bottom: 16px;
`;

export const StyledCard = styled(Card).attrs(() => ({
  mode: 'contained',
}))`
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;

export const StyledScrollView = styled(ScrollView)`
  background-color: ${({ theme }) => theme.colors.defaultBackgroundColor};
`;
