import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

export const PrimaryButton = styled(Button).attrs({
  mode: 'contained',
  dark: true,
  buttonColor: '#00bf80',
})`
  border-radius: 10px;
`;

export const SecondaryButton = styled(Button).attrs({
  mode: 'contained',
  buttonColor: 'white',
  textColor: '#00bf80',
})`
  border: 2px solid #00bf80;
  border-radius: 10px;
`;

export const DangerButton = styled(Button).attrs({
  mode: 'contained',
  buttonColor: '#ff0000',
  textColor: 'white',
})`
  border-radius: 10px;
`;
