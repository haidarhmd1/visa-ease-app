import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { HeadlineBold } from '../Typography/Typography';

export const Layout = styled.View`
  margin: 5%;
`;

export const Wrapper = styled.View`
  margin: 0 5%;
`;

export const TouchableIconCardOpacity = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 15px;
  height: 100px;
  width: 48%;
  margin-bottom: 16px;
`;

export const StyledCard = styled(Card).attrs(properties => ({
  mode: 'contained',
}))`
  margin-top: ${({ theme }) => theme.marginTop};
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  /* margin-bottom: ${({ theme }) => theme.marginBottom}; */
`;

export const StyledScrollView = styled(ScrollView)`
  background-color: ${({ theme }) => theme.colors.defaultBackgroundColor};
`;
